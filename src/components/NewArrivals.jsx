import { newArrivals } from '../data/products'
import { ArrowRight } from './Icons'

export default function NewArrivals() {
  return (
    <section className="section" id="arrivals">
      <div className="container">
        <div className="section-head">
          <h2 className="light">Loud New Arrivals</h2>
          <a href="#arrivals" className="view-all">view all</a>
        </div>
        <div className="arrivals-grid">
          {newArrivals.map((item) => (
            <div className="arrival-card" key={item.id}>
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="arrival-overlay">
                <h3>{item.title}</h3>
                <a href="#featured">more information <ArrowRight width={14} /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
