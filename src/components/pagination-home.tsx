import {
    Pagination,
    PaginationContent,
    /*PaginationEllipsis,*/
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import {Paginator} from "@/types/Paginator.tsx";

export default function PaginationHome({paginatorPage, setPaginator}: { paginatorPage: Paginator,
    setPaginator: React.Dispatch<React.SetStateAction<Paginator>> }) {


    function IncrementPage(){
        UpdatePage(paginatorPage.page + 1);
    }
    function DecrementPage(){
        UpdatePage(paginatorPage.page -1);
    }
    function UpdatePage(newPage: number){
        setPaginator((prevPaginator) => ({
            ...prevPaginator,
            page: newPage,
            first: newPage === 1,
            last: newPage === prevPaginator.totalPages
        }))
    }

    return (
        <Pagination className={"m-4"}>
            <PaginationContent>
                {
                    !paginatorPage.first &&
                    <PaginationItem>
                        <PaginationPrevious className={"hover:cursor-pointer"} onClick={DecrementPage}/>
                    </PaginationItem>
                }
                {
                    !paginatorPage.first &&
                    <PaginationItem>
                        <PaginationLink className={"hover:cursor-pointer"} onClick={() => UpdatePage(paginatorPage.page - 1)}>
                            {paginatorPage.page - 1}
                        </PaginationLink>
                    </PaginationItem>
                }
                <PaginationItem>
                        <PaginationLink className={"hover:cursor-pointer"} isActive>
                        {paginatorPage.page}
                    </PaginationLink>
                </PaginationItem>
                {
                    !paginatorPage.last &&
                    <PaginationItem>
                        <PaginationLink className={"hover:cursor-pointer"} onClick={() => UpdatePage(paginatorPage.page + 1)}>
                            {paginatorPage.page + 1}
                        </PaginationLink>
                    </PaginationItem>
                }
                {/*                <PaginationItem>
                    <PaginationEllipsis/>
                </PaginationItem>*/}
                {
                    !paginatorPage.last &&
                    <PaginationItem>
                        <PaginationNext className={"hover:cursor-pointer"} onClick={IncrementPage}/>
                    </PaginationItem>
                }
            </PaginationContent>
        </Pagination>
    )
}


