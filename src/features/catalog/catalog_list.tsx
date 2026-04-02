import { useReducer } from "react";
import CatalogItem from "./components/catalog_item";
import type { CatalogItemModel } from "./domain/catalog_item_model";
import type { CartItemAction } from "./domain/catalog_item_props";

export default function CatalogList({ items }: { items: CatalogItemModel[] }) {

    const [cartItems, dispatch] = useReducer(cartReducer, []);

    function handleAddToCart(id: number) {
        dispatch({
            action: 'add',
            itemId: id,
        });
    }

    function handleRemoveFromCart(id: number) {
        dispatch({
            action: 'remove',
            itemId: id,
        });
    }

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
                inCart: cartItems.includes(index),
                onAdd: handleAddToCart,
                onRemove: handleRemoveFromCart,
            }))}
        </>
    );
}

function cartReducer(items: number[], action: CartItemAction): number[] {
    switch (action.action) {
        case 'add': return [...items, action.itemId];
        case 'remove': return items.filter(e => e !== action.itemId);
        default: return items;
    }
}
