import { heroImages } from '../data/products'
import { ArrowRight } from './Icons'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <h1>Feel the beat<br />in every<br />corner</h1>
          <p>
            Music is the soundtrack of your life. Bring home crystal-clear sound
            and deep bass that turns every moment into an experience.
          </p>
          <div className="hero-actions">
            <a href="#featured" className="btn btn-light">Shop now</a>
            <a href="#arrivals" className="link-arrow">Explore speakers <ArrowRight width={14} /></a>
          </div>
        </div>

        <div className="hero-grid">
          <div className="dots" aria-hidden="true" />
          <div className="hero-card small">
            <span className="tag">New</span>
            <img src={heroImages.newItem} alt="New RGB portable speaker" />
          </div>
          <div className="hero-card small">
            <span className="tag">Popular</span>
            <img src={heroImages.popular} alt="Popular smart speaker" />
          </div>
          <div className="hero-card big">
            <span className="tag">Featured</span>
            <img src={heroImages.featured} alt="Featured studio bookshelf speaker" />
            <div className="big-overlay">
              <h3>Studio Bookshelf</h3>
              <p>Hand-tuned wooden cabinet with a 6.5" woofer that fills any room with warm, natural sound.</p>
              <a href="#featured" className="btn btn-white-block">Read more</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
