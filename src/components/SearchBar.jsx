import { FilterIcon, SearchIcon } from './Icons'

export default function SearchBar({ value, onChange }) {
  return (
    <section className="search-section">
      <div className="container search-inner">
        <button className="icon-box" aria-label="Filters"><FilterIcon /></button>
        <input
          type="text"
          placeholder="Search speakers..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <a href="#featured" className="icon-box filled" aria-label="Search"><SearchIcon /></a>
      </div>
    </section>
  )
}
