export interface CatalogItemModel {
    id: number;
    name: string;
    description: string;
    image: string;
    rating: number;
    price: number;
    reviews: number;
    inStock: boolean;
    category?: string;
}
