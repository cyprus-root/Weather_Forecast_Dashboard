import { useState } from 'react'

function Search_Bar({ onSearch }) {
  const [city, setCity] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = city.trim()
    if (trimmed) {
      onSearch(trimmed)
    }
  }

  return (
    <form className="search_container" onSubmit={handleSubmit}>
      <input
        className="search_input"
        type="text"
        placeholder="Search for a city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button className="search_btn" type="submit">
        Search
      </button>
    </form>
  )
}

export default Search_Bar
