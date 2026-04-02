import { useShoppingCart } from "../controllers/shopping_cart_context";

export default function ShoppingCartCounter() {
    const containerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'end',
    };

    const count = useShoppingCart().length;

    return (
        <section>
            <div style={containerStyle}>
                <text>Shopping cart</text>
                <text> ({count})</text>
            </div>
        </section>
    )
}