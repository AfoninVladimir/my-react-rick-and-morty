import {PersonageCard} from "@/components/personage-card.tsx";
import PaginationHome from "@/components/pagination-home.tsx";
import {Paginator} from "@/types/Paginator.tsx";
import {useState, useEffect} from "react";
import axiosInstance from "@/middleware/axios_instance.tsx";
import {Character} from "@/types/Character.tsx";

export default function IndexHome() {
    const paginator: Paginator = {
        page: 1,
        pageSize: 20,
        totalPages: 1,
        first: true,
        last: false
    }
    const [paginatorPage, setPaginator] = useState<Paginator>(paginator);
    const [characters, setCharacters] = useState<Character[]>([]);

    function UpdateTotalPage(newTotalPages: number) {
        setPaginator((prevPaginator) => ({
            ...prevPaginator,
            totalPages: newTotalPages
        }))
    }

    useEffect(() => {
        const sendRequest = async () => {
            await axiosInstance.get("/character", {
                params: {
                    page: paginatorPage.page
                }
            })
                .then(response => {
                    UpdateTotalPage(response.data.info.count);
                    setCharacters(response.data.results ?? [])
                })
                .catch(error => {
                    console.log(error);
                })

        }
        sendRequest();
    }, [paginatorPage.page])

    return (
        <>
            <PaginationHome paginatorPage={paginatorPage} setPaginator={setPaginator}></PaginationHome>
            <div className={"grid grid-cols-4 gap-4 mt-8"}>
                {characters.map((character) => (
                    <PersonageCard personage={character}></PersonageCard>
                ))}
            </div>
            <PaginationHome paginatorPage={paginatorPage} setPaginator={setPaginator}></PaginationHome>
        </>
    )
}
