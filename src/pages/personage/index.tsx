import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {PersonageStatus} from "@/enums/PersonageStatus.tsx";
import {Heart, HelpCircle, Skull} from "lucide-react";
import {useState} from "react";
import axiosInstance from "@/instances/axios_instance.tsx";
import {Character} from "@/types/Character.tsx";

export default function IndexPersonage({personageId}: { personageId: number }) {
    const [personage, setPersonage] = useState<Character>();
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
    console.log(personage)
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
                    </CardFooter>
                </Card>
            ) : (
                <p>Loading...</p>
            )}
        </>
    )
}
