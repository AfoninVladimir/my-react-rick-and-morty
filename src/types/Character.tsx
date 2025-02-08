import {Origin} from "@/types/Origin.tsx";
import {PersonageStatus} from "@/enums/PersonageStatus.tsx";

export type Character = {
    id: number;
    name: string;
    status: PersonageStatus;
    species: string;
    type: string;
    gender: string;
    origin: Origin;
    location: Location;
    image: string;
    episode: string[];
    url: string;
    created: string;
}