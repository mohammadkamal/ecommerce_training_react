import { Star } from "lucide-react";
import { type CSSProperties, useState } from "react";
import type { CatalogItemModel } from "./catalog_item_type";

export default function CatalogItem({ name,
    description,
    image,
    rating,
    price,
    reviews,
    inStock }: CatalogItemModel) {

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

    const [hovered, setHovered] = useState(false);

    return (
        <div style={{
            ...style,
            boxShadow: hovered ? '0 10px 15px -3px rgb(0 0 0 / 0.1)' : 'none',

        }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
            <div style={imageContainerStyles}>
                <img
                    src={image}
                    alt={name}
                    style={{
                        ...imgStyles,
                        ...(hovered ? imgHoverStyles : {}),
                    }}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                />
            </div>

            <div className="p-4">
                <h3 className="font-semibold mb-2 group-hover:text-gray-600 transition-colors">
                    {name}
                </h3>

                <div className="flex items-center gap-1 mb-2">
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
                    <span className="text-sm text-gray-600">({reviews})</span>
                </div>

                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {description}
                </p>

                <div className="flex items-center justify-between">
                    <span className="text-xl font-semibold">${price}</span>
                    <button
                        data-slot="button"
                        disabled={!inStock}
                        style={{
                            ...buttonStyles,
                            ...(!inStock ? buttonDisabledStyles : {}),
                            ...style,
                        }}
                    >
                        {inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                </div>
            </div>
        </div>
    );
}
