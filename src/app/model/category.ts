export class CategoryRes {
    categories: ThingWrapper[];
}
export class ThingWrapper {
    categories: Category;
}

export class Category {
    id: string;
    name: string;
}