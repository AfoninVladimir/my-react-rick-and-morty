import DefaultLayout from "@/components/layouts/default-layout.tsx";
import IndexPersonage from "@/pages/personage/index.tsx";
import {useParams} from "react-router-dom";

export default function Personage() {
    const {id} = useParams();
    const personageId = Number(id);
    if (isNaN(personageId)) {
        throw new Error("Failed to load personage data!");
    }
    return (
        <DefaultLayout>
            <IndexPersonage personageId={personageId}>
            </IndexPersonage>
        </DefaultLayout>
    )
}
