export class SearchRes {
    restaurants: SearchWrapper[];
}

export class SearchWrapper {
    restaurant: Search;
}
export class Search {
    id: string;
    name: string;
    address: string;
    location: any;
}
