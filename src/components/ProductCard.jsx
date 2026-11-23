import { useState } from 'react'
import { formatINR } from '../data/products'

export default function ProductCard({ product, onBuy }) {
  const [color, setColor] = useState(0)
  const [added, setAdded] = useState(false)

  const handleBuy = () => {
    onBuy(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1200)
  }

  return (
    <article className="product-card">
      <div className="product-img">
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>
      <div className="product-row">
        <h4>{product.name}</h4>
        <span className="price">{formatINR(product.price)}</span>
      </div>
      <div className="product-row bottom">
        <div>
          <span className="label">Color</span>
          <div className="swatches">
            {product.colors.map((c, i) => (
              <button
                key={c}
                className={`swatch ${i === color ? 'active' : ''}`}
                style={{ background: c }}
                onClick={() => setColor(i)}
                aria-label={`Color ${i + 1}`}
              />
            ))}
          </div>
        </div>
        <button className={`btn-buy ${added ? 'added' : ''}`} onClick={handleBuy}>
          {added ? 'Added ✓' : 'Buy'}
        </button>
      </div>
    </article>
  )
}
