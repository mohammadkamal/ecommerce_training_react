import { useReducer, type JSX } from "react";
import type { CartItemAction } from "../../catalog/domain/catalog_item_props";
import { ShoppingCartContext, ShoppingCartDispatchContext } from "./shopping_cart_context";

export function ShoppingCartProvider({ children = [] }: { children: JSX.Element[] }) {
    const [shoppingCart, shoppingCartDispatch] = useReducer(cartReducer, []);

    return (
        <ShoppingCartContext value={shoppingCart}>
            <ShoppingCartDispatchContext value={shoppingCartDispatch}>
                {children}
            </ShoppingCartDispatchContext>
        </ShoppingCartContext>
    );
}

function cartReducer(items: number[], action: CartItemAction): number[] {
    switch (action.action) {
        case 'add': return [...items, action.itemId];
        case 'remove': return items.filter(e => e !== action.itemId);
        default: return items;
    }
}