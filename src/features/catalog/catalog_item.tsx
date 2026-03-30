export default function CatalogItem({ name, image, rating, inCart }: {
    name: string;
    image: string;
    rating: number;
    inCart: boolean;
}) {
    const imageWidth = 500;

    const product = {
        image: image,
        name: name,
        rating: rating,
    };

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column' as const,
            border: '1px solid black',
        }}>
            <div>
                <text>{product.name}</text>
                <text> ({product.rating}/5.0)</text>
            </div>
            <div>
                <img
                    src={product.image}
                    alt={product.name}
                    width={imageWidth} />
            </div>
            <CatalogItemButton inCart={inCart} onClick={() => { }} />
        </div>
    );
}

function CatalogItemButton({ inCart, onClick }: { inCart: boolean; onClick: () => void }) {
    return (
        <button onClick={e => {
            e.stopPropagation();
            onClick();
        }}>
            {inCart ? "Remove from Cart" : "Add to Cart"}
        </button>
    );
}