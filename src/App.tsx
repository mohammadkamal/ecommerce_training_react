import './App.css'
import ShoppingCartCounter from './features/cart/components/shopping_cart_counter.tsx'
import { ShoppingCartProvider } from './features/cart/controllers/shopping_cart_provider.tsx'
import CatalogList from './features/catalog/catalog_list.tsx'

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <ShoppingCartCounter />
        <CatalogList />
      </ShoppingCartProvider>
    </>
  )
}

export default App
