import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {PersonageStatus} from "@/enums/PersonageStatus.tsx";
import {Heart, HelpCircle, Skull} from "lucide-react";
import {useEffect, useState} from "react";
import axiosInstance from "@/instances/axios_instance.tsx";
import {Character} from "@/types/Character.tsx";
import {Button} from "@/components/ui/button.tsx";
import {localStorageGet, localStorageSet} from "@/instances/localStorage_instance.tsx";
import {useToast} from "@/hooks/use-toast.ts";

export default function IndexPersonage({personageId}: { personageId: number }) {
    const {toast} = useToast();

    const [personage, setPersonage] = useState<Character>();
    const [favorites, setFavorites] = useState<number[]>(() => {
        const localFavorites = localStorageGet<number[]>("favorites");
        return localFavorites !== null ? localFavorites : [];
    });

    const sendRequest = async () => {
        await axiosInstance.get(`/character/${personageId}`)
            .then(response => {
                setPersonage(() => response.data);
            })
            .catch(error => {
                console.log(error);
            })

    }
    sendRequest();

    useEffect(() => {
        localStorageSet<number[]>("favorites", favorites);
    }, [favorites]);

    function ChangeFavorites(id: number) {
        if (favorites.includes(id)) {
            setFavorites((prevNumbers) => prevNumbers.filter((i) => i !== id));
            toast({
                title: "Персонаж удалён из избранного!",
            });
        } else {
            setFavorites((prevNumbers) => [...prevNumbers, id]);
            toast({
                title: "Персонаж добавлен в избранное!",
            });
        }
    }
    return (
        <>
            {personage ? (
                <Card className={"max-w-sm min-w-96"}>
                    <CardHeader>
                        <img src={personage.image} alt={personage.name} className={"border rounded-xl"}/>
                        <CardTitle className={"text-center"}>{personage.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription className={"text-lg"}>
                            <div className={"flex"}>
                                <p>Status:</p>
                                {personage.status === PersonageStatus.Alive && <Heart/>}
                                {personage.status === PersonageStatus.Dead && <Skull/>}
                                {personage.status === PersonageStatus.Unknown && <HelpCircle/>}
                            </div>
                            <div>Species: {personage.species}</div>
                            {personage.type && <div>Type: {personage.type}</div>}
                            <div>Gender: {personage.gender}</div>
                            <div>Origin: {personage.origin.name}</div>
                            <div>Location: {personage.location.name}</div>
                            <div>Gender: {personage.gender}</div>
                            <div>Episodes: [{personage.episode.map((item) => (item.split("/").pop())).join(", ")}]</div>
                        </CardDescription>
                    </CardContent>
                    <CardFooter>
                        <Button className={"text-lg bg-card text-card-foreground hover:bg-accent border [&_svg]:size-6"}
                                onClick={() => ChangeFavorites(personage.id)}
                        >
                            Like
                            {favorites.includes(personage.id) ?
                                <Heart fill="red" strokeWidth={2}/> :
                                <Heart fill="white" strokeWidth={2}/>
                            }

                        </Button>
                    </CardFooter>
                </Card>
            ) : (
                <p>Loading...</p>
            )}
        </>
    )
}
