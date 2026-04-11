import { type JSX } from "react";
import { useShoppingCart } from "../../cart/controllers/shopping_cart_context";
import { Search, ShoppingCart, User } from "lucide-react";
import { Button } from "../../../shared/components/button";

export default function Header() {
    const cartCount = useShoppingCart().length;

    return (
        <header className="sticky top-0 z-50 bg-white border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo, Add link */}
                    <div className="flex items-center">
                        <span className="text-2xl font-semibold">TechStore</span>
                    </div>

                    {/* Navigation, add links */}
                    <nav className="hidden md:flex items-center gap-8">
                        <HeaderLink>Home</HeaderLink>
                        <HeaderLink>Products</HeaderLink>
                        <HeaderLink>Audio</HeaderLink>
                        <HeaderLink>Computers</HeaderLink>
                        <HeaderLink>Wearables</HeaderLink>
                    </nav>

                    {/* Actions, add links */}
                    <div className="flex items-center gap-4">
                        <HeaderIcon>
                            <Search className="h-5 w-5" />
                        </HeaderIcon>
                        <HeaderIcon>
                            <User className="h-5 w-5" />
                        </HeaderIcon>
                        <HeaderShoppingCartIcon>
                            <ShoppingCart className="h-5 w-5" />
                            {cartCount > 0 && (
                                <ShoppingCartCount>
                                    {cartCount}
                                </ShoppingCartCount>
                            )}
                        </HeaderShoppingCartIcon>
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
    return (
        <text
            className="hover:text-gray-600 transition-colors">{children}</text>
    );
}

function HeaderIcon({ children }) {
    return (
        <Button variant="ghost" size="icon" className="hidden sm:flex">
            {children}
        </Button>
    );
}

function HeaderShoppingCartIcon({ children }) {
    return (
        <Button variant="ghost" size="icon" className="relative">
            {children}
        </Button>
    );
}

function ShoppingCartCount({ children }: { children?: number }) {
    return (
        <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {children}
        </span>
    );
}