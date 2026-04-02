import { useState, type CSSProperties, type JSX } from "react";
import { useShoppingCart } from "../../cart/controllers/shopping_cart_context";
import { Search, ShoppingCart, User } from "lucide-react";

export default function Header() {
    const cartCount = useShoppingCart().length;

    return (
        <header style={{
            position: 'sticky',
            top: 0,
            zIndex: 50,
            backgroundColor: '#ffffff',
            borderBottom: '1px solid #e5e7eb',
        }}>
            <div style={{
                maxWidth: '80rem',
                marginLeft: 'auto',
                marginRight: 'auto',
                padding: '0 1rem',
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    height: '4rem'
                }}>
                    {/* Logo, Add link */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                        <span style={{
                            fontSize: '1.5rem',
                            fontWeight: 600
                        }}>TechStore</span>
                    </div>

                    {/* Navigation, add links */}
                    <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                        <HeaderLink>Home</HeaderLink>
                        <HeaderLink>Products</HeaderLink>
                        <HeaderLink>Audio</HeaderLink>
                        <HeaderLink>Computers</HeaderLink>
                        <HeaderLink>Wearables</HeaderLink>
                    </nav>

                    {/* Actions, add links */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <HeaderIcon>
                            <Search className="h-5 w-5" />
                        </HeaderIcon>
                        <HeaderIcon>
                            <User className="h-5 w-5" />
                        </HeaderIcon>
                        <HeaderIcon>
                            <ShoppingCart className="h-5 w-5" />
                            {cartCount > 0 && (
                                <span style={{
                                    position: 'absolute',
                                    top: '-0.25rem',
                                    right: '-0.25rem',
                                    backgroundColor: '#000000',
                                    color: '#ffffff',
                                    fontSize: '0.75rem',
                                    borderRadius: '9999px',
                                    height: '1.25rem',
                                    width: '1.25rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    {cartCount}
                                </span>
                            )}
                        </HeaderIcon>
                        {/* <HeaderIcon>
                            <Menu className="h-5 w-5" />
                        </HeaderIcon> */}
                    </div>
                </div>
            </div>
        </header>
    );
}

function HeaderLink({ children }: { children: JSX.Element[] | string }) {
    const [hovered, setHovered] = useState(false);
    return (
        <text
            style={{ color: hovered ? '#4b5563' : 'inherit', transition: 'color 0.2s ease' }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >{children}</text>
    );
}

function HeaderIcon({ children }) {
    const [hovered, setHovered] = useState(false);

    const ghostIconButtonStyles: CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '2.25rem',
        height: '2.25rem',
        padding: 0,
        background: 'none',
        border: 'none',
        borderRadius: '0.375rem',
        cursor: 'pointer',
        color: 'inherit',
        transition: 'background-color 0.2s ease, color 0.2s ease',
    };

    const ghostIconButtonHoverStyles: CSSProperties = {
        backgroundColor: '#e9ebef',
        color: '#030213',
    };

    return (
        <button style={{
            ...ghostIconButtonStyles,
            ...(hovered ? ghostIconButtonHoverStyles : {}),
        }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>{children}</button>
    );
}