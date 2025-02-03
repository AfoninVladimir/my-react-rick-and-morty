import {PersonageCard} from "@/components/personage-card.tsx";

export default function IndexHome() {

    return (
        <div className={"grid grid-flow-col grid-rows-4 gap-4"}>
            <PersonageCard></PersonageCard>
            <PersonageCard></PersonageCard>
            <PersonageCard></PersonageCard>
        </div>
    )
}
