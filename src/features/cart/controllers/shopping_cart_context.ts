import { createContext, useContext, type Context } from "react";
import type { CartItemAction } from "../../catalog/domain/catalog_item_props";

export const ShoppingCartContext: Context<number[]> = createContext(new Array<number>());
export const ShoppingCartDispatchContext:
    Context<(action: CartItemAction) => void>
    = createContext((_) => { });

export function useShoppingCart(): number[] {
    return useContext(ShoppingCartContext);
}

export function useShoppingCartDispatch(): (action: CartItemAction) => void {
    return useContext(ShoppingCartDispatchContext);
}
