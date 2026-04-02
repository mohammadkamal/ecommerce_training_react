import type { CatalogItemModel } from "./catalog_item_model";

export interface CatalogItemProps extends CatalogItemModel {
    inCart: boolean;
    onAdd: (id: number) => void,
    onRemove: (id: number) => void,
}

export interface CartItemAction {
    action: string;
    itemId: number;
}