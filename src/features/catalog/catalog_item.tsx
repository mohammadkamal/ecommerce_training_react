export default function CatalogItem({ name, image, rating }: {
    name: string;
    image: string;
    rating: number;
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
            <button>Add to Cart</button>
        </div>
    );
}