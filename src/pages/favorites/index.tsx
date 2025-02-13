import {PersonageCard} from "@/components/personage-card.tsx";
import {useState, useEffect} from "react";
import axiosInstance from "@/instances/axios_instance.tsx";
import {Character} from "@/types/Character.tsx";
import "@/instances/localStorage_instance.tsx"
import {localStorageGet, localStorageSet} from "@/instances/localStorage_instance.tsx";

export default function IndexFavorites() {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [favorites, setFavorites] = useState<number[]>(() => {
        const localFavorites = localStorageGet<number[]>("favorites");
        return localFavorites !== null ? localFavorites : [];
    });
    useEffect(() => {
        const sendRequest = async () => {
            await axiosInstance.get(`/character/${favorites}`)
                .then(response => {
                    setCharacters(response.data ?? [])
                })
                .catch(error => {
                    console.log(error);
                })

        }
        sendRequest();
    },[favorites])

    useEffect(() => {
        localStorageSet<number[]>("favorites", favorites);
    }, [favorites]);

    return (
        <>
            <div className={"grid grid-cols-4 gap-4 mt-8"}>
                {characters.map((character) => (
                    <PersonageCard personage={character} favorites={favorites} setFavorites={setFavorites}></PersonageCard>
                ))}
            </div>
        </>
    )
}
