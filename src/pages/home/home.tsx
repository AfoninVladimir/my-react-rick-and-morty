import DefaultLayout from "@/components/layouts/default-layout.tsx";
import IndexHome from "@/pages/home/index.tsx";

export default function Home(){
    return(
        <DefaultLayout>
            <IndexHome></IndexHome>
        </DefaultLayout>
    )
}
