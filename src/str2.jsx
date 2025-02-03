import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [movies, setMovies] = useState([])
  const [series, setSeries] = useState([])
  const [items, setItems] = useState([])
  const [allItems, setAllItems] = useState([])
  const [searchResultCount, setSearchResultCount] = useState(null)
  const [searching, setSearching] = useState(false)

  useEffect(() => {
    async function getData() {
      const data = await fetch('./src/data.json').then(r => r.json());
      const combinedItems = [
        ...data.movie.results.map(movie => ({ ...movie, type: 'movie' })),
        ...data.tv.results.map(series => ({ ...series, type: 'tv' }))
      ].sort(() => Math.random() - 0.5);;
      setItems(combinedItems);
      setAllItems(combinedItems);
      setMovies(data.movie.results)
      setSeries(data.tv.results)
    }

    getData()
  }, [])

  function handleSearch(e) {
    let searchVal = e.target.value
    const filteredItems = allItems.filter(x => x.original_title?.toLowerCase().includes(searchVal.toLowerCase()) || x.name?.toLowerCase().includes(searchVal.toLowerCase()))
    setItems(filteredItems)
    setSearchResultCount(filteredItems.length)
  }

  function handleFilter(type) {
    const filteredItems = allItems.filter(x => x.type == type)
    setItems(filteredItems)
  }


  return (
    <>
      <div className="nav-bar">
        logo
        <button onClick={() => handleFilter()}>All</button>
        <button onClick={() => handleFilter()}>Movies</button>
        <button onClick={() => handleFilter()}>Series</button>
        <button>Bookmarks</button>

      </div>
      <div className="search">
        <input
          type="text"
          name='search'
          onChange={handleSearch}
          onClick={() => {
            setSearching(true)
          }}
        />
        <p>Found {searchResultCount} results</p>
      </div>

      <div className="items">
        {
          items.map((x) => (
            <div key={x.id}>
              <img src={"https://image.tmdb.org/t/p/w200" + x.poster_path} alt="" />
              <span>{x.release_date || x.first_air_date.split("-").at(0)}</span> . <span>{x.original_title ? "Movie" : "TV Series"} </span>
              <h4>{x.name || x.original_title}</h4>

            </div>
          ))
        }
      </div>

    </>
  )
}

export default App
