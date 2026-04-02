import { Star } from "lucide-react";
import { type CSSProperties, useState } from "react";
import type { CatalogItemProps } from "../domain/catalog_item_props";

export default function CatalogItem({
    id,
    name,
    description,
    image,
    rating,
    price,
    reviews,
    inStock,
    inCart,
    onAdd,
    onRemove,
}: CatalogItemProps) {

    const style: CSSProperties = {
        backgroundColor: '#ffffff',
        color: '#0a0a0a',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',        // gap-6 = 1.5rem
        borderRadius: '0.75rem', // rounded-xl
        border: '1px solid #0000001a',
        overflow: 'hidden',
        transition: 'box-shadow 0.2s ease',
    };

    const [hovered, setHovered] = useState(false);

    return (
        <div style={{
            ...style,
            boxShadow: hovered ? '0 10px 15px -3px rgb(0 0 0 / 0.1)' : 'none',
        }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <CatalogItemImage image={image} name={name} hovered={hovered} />

            <div style={{ padding: '1rem' }}>
                <CatalogItemName name={name} hovered={hovered} />

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    marginBottom: '0.5rem'
                }}>
                    <CatalogItemRating rating={rating} />
                    <span style={{ fontSize: '0.875rem', color: '#4b5563' }}>({reviews})</span>
                </div>

                <p style={{
                    fontSize: '0.875rem',
                    color: '#4b5563',
                    marginBottom: '1rem',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                }}>
                    {description}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '1.25rem', fontWeight: 600 }}>${price}</span>
                    <CatalogItemAction inStock={inStock}
                        inCart={inCart}
                        onInteract={
                            () => inCart ? onRemove(id) : onAdd(id)
                        }
                    />
                </div>
            </div>
        </div>
    );
}

function CatalogItemAction({ inStock, inCart, onInteract }
    : { inStock: boolean, inCart: boolean, onInteract: () => void }) {
    const buttonStyles: CSSProperties = {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '0.875rem',       // size="sm"
        fontWeight: 500,
        padding: '0.25rem 0.75rem', // size="sm"
        height: '2rem',             // size="sm"
        borderRadius: '0.375rem',
        border: '1px solid transparent',
        backgroundColor: 'hsl(var(--primary))',
        color: 'hsl(var(--primary-foreground))',
        cursor: 'pointer',
        transition: 'background-color 0.2s ease, opacity 0.2s ease',
    };

    const buttonDisabledStyles: CSSProperties = {
        opacity: 0.5,
        pointerEvents: 'none',
        cursor: 'not-allowed',
    };

    return (
        <button
            data-slot="button"
            disabled={!inStock}
            style={{
                ...buttonStyles,
                ...(!inStock ? buttonDisabledStyles : {}),
            }}
            onClick={onInteract}
        >
            {inStock ? (inCart ? 'Remove from Cart' : 'Add to Cart') : 'Out of Stock'}
        </button>
    );
}

function CatalogItemImage({ image, name, hovered }: { image: string, name?: string, hovered: boolean }) {
    const imageContainerStyles: CSSProperties = {
        aspectRatio: '1 / 1',
        overflow: 'hidden',
        backgroundColor: '#f3f4f6', // bg-gray-100
    };

    const imgStyles: CSSProperties = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.3s ease',
    };

    const imgHoverStyles: CSSProperties = {
        transform: 'scale(1.05)',
    };

    return (
        <div style={imageContainerStyles}>
            <img
                src={image}
                alt={name}
                style={{
                    ...imgStyles,
                    ...(hovered && imgHoverStyles),
                }}
            />
        </div>
    );
}

function CatalogItemName({ name, hovered }: { name: string, hovered: boolean }) {
    const headingStyles: CSSProperties = {
        fontWeight: 600,
        marginBottom: '0.5rem', // mb-2
        transition: 'color 0.2s ease',
    };

    const headingHoverStyles: CSSProperties = {
        color: '#4b5563', // text-gray-600
    };

    return (
        <h3
            style={{
                ...headingStyles,
                ...(hovered && headingHoverStyles),
            }}
        >
            {name}
        </h3>
    );
}

function CatalogItemRating({ rating }: { rating: number }) {
    return (
        <div style={{ display: 'flex' }}>
            {[...Array(5)].map((_, i) => (
                <Star
                    key={i}
                    style={{
                        height: '1rem',
                        width: '1rem',
                        fill: i < Math.floor(rating) ? '#facc15' : 'none',    // yellow-400 or none
                        color: i < Math.floor(rating) ? '#facc15' : '#d1d5db', // yellow-400 or gray-300
                    }}
                />
            ))}
        </div>
    );
}