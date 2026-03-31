import './App.css'
import ShoppingCartCounter from './features/cart/components/shopping_cart_counter.tsx'
import CatalogList from './features/catalog/catalog_list.tsx'

function App() {

  return (
    <>
      <ShoppingCartCounter />
      <CatalogList
        items={[
          { id: 5, name: "Carrot", image: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Vegetable-Carrot-Bundle-wStalks.jpg", rating: 4.5 },
          { id: 5, name: "Carrot", image: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Vegetable-Carrot-Bundle-wStalks.jpg", rating: 4.5 },
          { id: 5, name: "Carrot", image: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Vegetable-Carrot-Bundle-wStalks.jpg", rating: 4.5 },
        ]}
      />
    </>
  )
}

export default App
