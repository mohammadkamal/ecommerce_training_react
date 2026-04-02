import CatalogItem from "./components/catalog_item";
import { mockCatalogItems } from "./data/mock_catalog_items";

export default function CatalogList() {
    const items = mockCatalogItems;

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
