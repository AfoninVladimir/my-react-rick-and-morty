import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {Heart, HelpCircle, Skull, Star} from "lucide-react"
import {Button} from "@/components/ui/button.tsx";
import {Character} from "@/types/Character.tsx";
import {PersonageStatus} from "@/enums/PersonageStatus.tsx";

export function PersonageCard({personage}: {personage: Character}) {
    return (
        <Card>
            <CardHeader>
                <img src={personage.image} alt={personage.name} className={"border rounded-xl"}/>
                <CardTitle className={"text-center"}>{personage.name}</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription className={"text-lg"}>
                    <div className={"flex"}>
                        Status:
                        {/*{personage.status}*/}
                        {personage.status === PersonageStatus.Alive && <Heart />}
                        {personage.status === PersonageStatus.Dead && <Skull />}
                        {personage.status === PersonageStatus.Unknown && <HelpCircle />}
                    </div>
                    <div>Species: {personage.species}</div>
                    {/*{personage.type && <div>type: {personage.type}</div>}*/}
                    <div>Gender: {personage.gender}</div>
                </CardDescription>
            </CardContent>
            <CardFooter>
                <Button className={"text-lg bg-card text-card-foreground hover:bg-accent border [&_svg]:size-6"}>
                    Like
                    <Star {...(personage.status !== PersonageStatus.Dead && { fill: "white" })} strokeWidth={2} />
                </Button>
            </CardFooter>
        </Card>
    )
}
