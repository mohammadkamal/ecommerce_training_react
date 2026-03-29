import CatalogItem from "./catalog_item";

interface CatalogItemModel {
    id: number;
    name: string;
    image: string;
    rating: number;
}

export default function CatalogList({ items }: { items: CatalogItemModel[] }) {
    return (
        <>
            {items.map((item) => CatalogItem({ name: item.name, image: item.image, rating: item.rating }))}
        </>
    );
}