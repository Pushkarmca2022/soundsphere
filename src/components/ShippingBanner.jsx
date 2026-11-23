import { shippingImage } from '../data/products'
import { PhoneIcon, MailIcon } from './Icons'

export default function ShippingBanner() {
  return (
    <section className="section">
      <div className="container">
        <div className="shipping">
          <div className="shipping-text">
            <h2>Free Delivery Services</h2>
            <p className="note">*only within Delhi NCR</p>
            <ul>
              <li><PhoneIcon width={14} /> +91 98100 12345</li>
              <li><MailIcon width={14} /> order@soundsphere.in</li>
            </ul>
          </div>
          <div className="shipping-img">
            <img src={shippingImage} alt="Portable speaker" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  )
}
