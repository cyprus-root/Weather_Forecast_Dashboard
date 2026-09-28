function Search_History({ history, onSelect }) {
  if (history.length === 0) {
    return null
  }

  return (
    <div className="history_container">
      <h3 className="history_title">Recent Searches</h3>
      <div className="history_list">
        {history.map((city, index) => (
          <button
            key={`${city}-${index}`}
            className="history_item"
            onClick={() => onSelect(city)}
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Search_History
