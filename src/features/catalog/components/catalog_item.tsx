import { Star } from "lucide-react";
import { useShoppingCart, useShoppingCartDispatch } from "../../cart/controllers/shopping_cart_context";
import type { CatalogItemModel } from "../domain/catalog_item_model";
import { Card } from "../../../shared/components/card";
import { Button } from "../../../shared/components/button";

export default function CatalogItem({
    id,
    name,
    description,
    image,
    rating,
    price,
    reviews,
    inStock,
}: CatalogItemModel) {
    const dispatch = useShoppingCartDispatch();
    const inCart = useShoppingCart().includes(id);

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
        <Card className="group overflow-hidden hover:shadow-lg transition-shadow">
            <CatalogItemImage image={image} name={name} />

            <div className="p-4">
                <CatalogItemName name={name} />

                <div className="flex items-center gap-1 mb-2">
                    <CatalogItemRating rating={rating} />
                    <span className="text-sm text-gray-600">({reviews})</span>
                </div>

                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {description}
                </p>
                <div className="flex items-center justify-between">
                    <span className="text-xl font-semibold">${price}</span>
                    <CatalogItemAction inStock={inStock}
                        inCart={inCart}
                        onInteract={
                            () => inCart ? handleRemoveFromCart(id) : handleAddToCart(id)
                        }
                    />
                </div>
            </div>
        </Card>
    );
}

function CatalogItemAction({ inStock, inCart, onInteract }
    : { inStock: boolean, inCart: boolean, onInteract: () => void }) {
    return (
        <Button disabled={!inStock} size="sm" onClick={onInteract}>
            {inStock ? (inCart ? 'Remove from Cart' : 'Add to Cart') : 'Out of Stock'}
        </Button>
    );
}

function CatalogItemImage({ image, name }: { image: string, name?: string }) {
    return (
        <div className="aspect-square overflow-hidden bg-gray-100">
            <img
                src={image}
                alt={name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
        </div>
    );
}

function CatalogItemName({ name }: { name: string }) {
    return (
        <h3 className="font-semibold mb-2 group-hover:text-gray-600 transition-colors">
            {name}
        </h3>
    );
}

function CatalogItemRating({ rating }: { rating: number }) {
    return (
        <div className="flex">
            {[...Array(5)].map((_, i) => (
                <Star
                    key={i}
                    className={`h-4 w-4 ${i < Math.floor(rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                        }`}
                />
            ))}
        </div>
    );
}