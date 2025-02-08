import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {Heart} from "lucide-react"
import {Button} from "@/components/ui/button.tsx";
export function PersonageCard() {
    return (
        <Card>
            <CardHeader>
                <img src="https://rickandmortyapi.com/api/character/avatar/787.jpeg" alt="Two Crows" className={"border rounded-xl"}/>
            </CardHeader>
            <CardContent>
                <CardTitle>Two Crows</CardTitle>
                <CardDescription>
                    <div>status</div>
                    <div>species</div>
                    <div>type</div>
                    <div>gender</div>
                </CardDescription>
            </CardContent>
            <CardFooter>
                <Button><Heart/></Button>
            </CardFooter>
        </Card>
    )
}
