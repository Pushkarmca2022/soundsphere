import { smartSpeakers } from '../data/products'
import { ArrowRight } from './Icons'

export default function SmartSpeakers() {
  return (
    <section className="section tinted" id="smart">
      <div className="container">
        <div className="section-head">
          <h2>Smart speakers</h2>
        </div>
        <div className="smart-row">
          <div className="smart-grid">
            {smartSpeakers.map((s) => (
              <div className="smart-card" key={s.id}>
                <img src={s.image} alt={s.title} loading="lazy" />
                <span>{s.title}</span>
              </div>
            ))}
          </div>
          <a href="#featured" className="more-link">more <ArrowRight width={14} /></a>
        </div>
      </div>
    </section>
  )
}
