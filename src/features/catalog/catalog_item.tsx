export default function CatalogItem() {
    const containerStyle = {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column' as const,
        border: '1px solid black',
    };

    return (
        <div style={containerStyle}>
            <div>
                <text>Carrot</text>
                <text> (4.5/5.0)</text>
            </div>
            <div>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Vegetable-Carrot-Bundle-wStalks.jpg"
                    alt="Carrot"
                    width={500} />
            </div>
            <button>Add to Cart</button>
        </div>
    );
}