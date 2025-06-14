function SearchBar({ city, setCity, onSearch, onGeoLocation }) {
    const handleSubmit = (e) => {
        e.preventDefault()
        onSearch(city)
    }

    return (
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={city}
            onChange={e => setCity(e.target.value)}
            placeholder="Enter city"
        />
        <button type="submit">Search</button>
        <button type="button" onClick={onGeoLocation}>
            Use My Location
        </button>
        </form>
    )
}

export default SearchBar
