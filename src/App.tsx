import './App.css'
import ShoppingCartCounter from './features/cart/components/shopping_cart_counter.tsx'
import CatalogList from './features/catalog/catalog_list.tsx'
import { mockCatalogItems } from './features/catalog/data/mock_catalog_items.ts'

function App() {

  return (
    <>
      <ShoppingCartCounter />
      <CatalogList
        items={mockCatalogItems}
      />
    </>
  )
}

export default App
