export default function ShoppingCartCounter() {
    const containerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'end',
    };


    return (
        <section>
            <div style={containerStyle}>
                <text>Shopping cart</text>
                <text> (0)</text>
            </div>
        </section>
    )
}