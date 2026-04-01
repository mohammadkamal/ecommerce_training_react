import CatalogItem from "./components/catalog_item";
import type { CatalogItemModel } from "./domain/catalog_item_model";

export default function CatalogList({ items }: { items: CatalogItemModel[] }) {
    return (
        <>
            {items.map((item, index) => CatalogItem({
                id: index,
                name: item.name,
                image: item.image,
                rating: item.rating,
                inStock: item.inStock,
                reviews: item.reviews,
                description: item.description,
                price: item.price,
            }))}
        </>
    );
}