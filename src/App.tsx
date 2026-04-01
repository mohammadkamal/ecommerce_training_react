import './App.css'
import ShoppingCartCounter from './features/cart/components/shopping_cart_counter.tsx'
import CatalogList from './features/catalog/catalog_list.tsx'
import { products } from './features/catalog/catalog_items.ts';

function App() {

  return (
    <>
      <ShoppingCartCounter />
      <CatalogList
        items={products}
      />
    </>
  )
}

export default App
