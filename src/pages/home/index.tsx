import {PersonageCard} from "@/components/personage-card.tsx";
import PaginationHome from "@/components/pagination-home.tsx";
import {Paginator} from "@/types/Paginator.tsx";
import {useState, useEffect, SetStateAction} from "react";
import axiosInstance from "@/instances/axios_instance.tsx";
import {Character} from "@/types/Character.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import "@/instances/localStorage_instance.tsx"
import {localStorageGet, localStorageSet} from "@/instances/localStorage_instance.tsx";

export default function IndexHome() {
    const paginator: Paginator = {
        page: 1,
        pageSize: 20,
        totalPages: 1,
        first: true,
        last: false,
        filter: {
            searchQuery: ""
        }
    }
    const [paginatorPage, setPaginator] = useState<Paginator>(paginator);
    const [characters, setCharacters] = useState<Character[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [favorites, setFavorites] = useState<number[]>(() => {
        const localFavorites = localStorageGet<number[]>("favorites");
        return localFavorites !== null ? localFavorites : [];
    });


    const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setSearchQuery(event.target.value);
        if (event.target.value === "") {
            Search()
        }
    };

    function UpdateTotalPage(newTotalPages: number) {
        setPaginator((prevPaginator) => ({
            ...prevPaginator,
            totalPages: newTotalPages,
            first: paginatorPage.page === 1,
            last: newTotalPages === paginatorPage.page,
        }))
    }

    useEffect(() => {
        const sendRequest = async () => {
            await axiosInstance.get("/character", {
                params: {
                    page: paginatorPage.page,
                    name: paginatorPage.filter.searchQuery
                }
            })
                .then(response => {
                    UpdateTotalPage(response.data.info.pages);
                    setCharacters(response.data.results ?? [])
                })
                .catch(error => {
                    console.log(error);
                })

        }
        sendRequest();
    }, [paginatorPage.page, paginatorPage.filter.searchQuery])

    useEffect(() => {
        localStorageSet<number[]>("favorites", favorites);
    }, [favorites]);

    function Search() {
        setPaginator((prevPaginator) => ({
            ...prevPaginator,
            page: 1,
            first: true,
            last: paginatorPage.totalPages === paginatorPage.page,
            filter: {
                searchQuery: searchQuery
            }
        }))
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            Search()
        }
    }

    return (
        <>
            <div className={"rounded-md border"}>
                <div className="flex w-full max-w-sm items-center space-x-2 m-2">
                    <Input type="text" placeholder="Search"
                           value={searchQuery}
                           onChange={handleChange}
                           onKeyDown={handleKeyDown}/>
                    <Button onClick={Search}>Search</Button>
                </div>
            </div>
            <PaginationHome paginatorPage={paginatorPage} setPaginator={setPaginator}></PaginationHome>
            <div className={"grid grid-cols-4 gap-4 mt-8"}>
                {characters.map((character) => (
                    <PersonageCard personage={character} favorites={favorites} setFavorites={setFavorites}></PersonageCard>
                ))}
            </div>
            <PaginationHome paginatorPage={paginatorPage} setPaginator={setPaginator}></PaginationHome>
        </>
    )
}
