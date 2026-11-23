import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Featured from './components/Featured'
import SearchBar from './components/SearchBar'
import NewArrivals from './components/NewArrivals'
import SmartSpeakers from './components/SmartSpeakers'
import ShippingBanner from './components/ShippingBanner'
import VisitUs from './components/VisitUs'
import Footer from './components/Footer'
import { featuredProducts } from './data/products'

export default function App() {
  const [cart, setCart] = useState([])
  const [query, setQuery] = useState('')

  const addToCart = (product) => setCart((c) => [...c, product])

  const filtered = featuredProducts.filter((p) =>
    p.name.toLowerCase().includes(query.trim().toLowerCase())
  )

  return (
    <>
      <Navbar cartCount={cart.length} />
      <Hero />
      <Featured products={filtered} onBuy={addToCart} />
      <SearchBar value={query} onChange={setQuery} />
      <NewArrivals />
      <SmartSpeakers />
      <ShippingBanner />
      <VisitUs />
      <Footer />
    </>
  )
}
