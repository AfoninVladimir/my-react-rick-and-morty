import {HomeFilter} from "@/types/HomeFilter.tsx";

export type Paginator = {
    page: number;
    pageSize: number;
    totalPages: number;
    first: boolean;
    last: boolean;
    filter: HomeFilter;
}