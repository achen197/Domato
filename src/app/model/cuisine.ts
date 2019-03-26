export class CuisineRes {
    cuisines: CuisineWrapper[];
}

export class CuisineWrapper {
    cuisine: Cuisine;
}

export class Cuisine {
    cuisine_id: string;
    cuisine_name: string;
}
