import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {Heart, HelpCircle, Skull} from "lucide-react"
import {Button} from "@/components/ui/button.tsx";
import {Character} from "@/types/Character.tsx";
import {PersonageStatus} from "@/enums/PersonageStatus.tsx";
import {useToast} from "@/hooks/use-toast.ts";


export function PersonageCard({personage, favorites, setFavorites}: {
    personage: Character,
    favorites: number[],
    setFavorites: React.Dispatch<React.SetStateAction<number[]>>
}) {
    const {toast} = useToast();

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
        <Card>
            <CardHeader>
                <a href={`personage/${personage.id}`} target={"_blank"}>
                    <img src={personage.image} alt={personage.name} className={"border rounded-xl"}/>
                    <CardTitle className={"text-center"}>{personage.name}</CardTitle>
                </a>
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
                    <div>Gender: {personage.gender}</div>
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
    )
}
