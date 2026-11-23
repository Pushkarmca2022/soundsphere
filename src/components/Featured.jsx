import { useRef } from 'react'
import ProductCard from './ProductCard'
import { ArrowRight } from './Icons'

export default function Featured({ products, onBuy }) {
  const trackRef = useRef(null)
  const scroll = () => trackRef.current?.scrollBy({ left: 300, behavior: 'smooth' })

  return (
    <section className="section" id="featured">
      <div className="container">
        <div className="section-head">
          <h2>Featured</h2>
          <a href="#featured" className="view-all">view all</a>
        </div>
      </div>
      <div className="carousel-wrap">
        <div className="carousel" ref={trackRef}>
          {products.length === 0 && <p className="empty">No speakers match your search.</p>}
          {products.map((p) => (
            <ProductCard key={p.id} product={p} onBuy={onBuy} />
          ))}
        </div>
        {products.length > 4 && (
          <button className="carousel-next" onClick={scroll} aria-label="Next">
            <ArrowRight />
          </button>
        )}
      </div>
    </section>
  )
}
