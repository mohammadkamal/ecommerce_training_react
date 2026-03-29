export default function CatalogItem() {
    const imageUrl = "https://upload.wikimedia.org/wikipedia/commons/a/a2/Vegetable-Carrot-Bundle-wStalks.jpg";
    const productLabel = "Carrot";
    const rating = 4.5;
    const imageWidth = 500;

    const product = {
        image: imageUrl,
        name: productLabel,
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