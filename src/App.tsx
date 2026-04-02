import './App.css'
import { ShoppingCartProvider } from './features/cart/controllers/shopping_cart_provider.tsx'
import CatalogList from './features/catalog/catalog_list.tsx'
import Header from './features/home/components/header.tsx'

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <Header />
        <CatalogList />
      </ShoppingCartProvider>
    </>
  )
}

export default App
