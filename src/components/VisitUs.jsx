import { PinIcon } from './Icons'

const ADDRESS = 'Connaught Place, New Delhi, Delhi 110001'

export default function VisitUs() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(ADDRESS)}&z=15&output=embed`
  const directions = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS)}`

  return (
    <section className="section" id="visit">
      <div className="container">
        <div className="map-wrap">
          <iframe title="SoundSphere store location" src={mapSrc} loading="lazy" />
          <div className="visit-card">
            <a className="directions" href={directions} target="_blank" rel="noreferrer">
              <PinIcon width={12} /> Get directions
            </a>
            <h3>Visit us</h3>
            <p>
              SoundSphere Audio Store<br />
              Shop No. 24, Block E, Inner Circle<br />
              Connaught Place, New Delhi<br />
              Delhi 110001
            </p>
            <p className="hours"><u>Open day</u>: 11am–8:30pm everyday</p>
          </div>
        </div>
      </div>
    </section>
  )
}
