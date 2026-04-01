import CatalogItem from "./catalog_item";
import type { CatalogItemModel } from "./catalog_item_type";

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