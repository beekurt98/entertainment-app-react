import { useEffect, useState, useContext, createContext } from 'react'
import { Routes, Route, Link } from 'react-router-dom';

import './App.css'

import SearchBar from './SearchBar';
import Nav from './Nav';
import MainPage from './pages/MainPage'
import Bookmarks from './pages/Bookmarks'
import Movies from './pages/Movies'
import Series from './pages/Series'

export const BookmarkContext = createContext()

function App() {
  const [movies, setMovies] = useState([])
  const [series, setSeries] = useState([])
  const [items, setItems] = useState([])
  const [allItems, setAllItems] = useState([])
  const [searchResultCount, setSearchResultCount] = useState(null)
  const [searching, setSearching] = useState(false)
  const [bookmarks, setBookmarks] = useState(JSON.parse(localStorage.getItem("bookmarks")) ||[])

  useEffect(() => {
    async function getData() {
      const data = await fetch('./src/data.json').then(r => r.json());
      const combinedItems = [
        ...data.movie.results.map(movie => ({ ...movie, type: 'movie', bookmarked: 'false' })),
        ...data.tv.results.map(series => ({ ...series, type: 'tv', bookmarked: 'false' }))
      ].sort(() => Math.random() - 0.5);
      setItems(combinedItems);
      setAllItems(combinedItems);
      setMovies(data.movie.results)
      setSeries(data.tv.results)
      console.log(combinedItems)
    }

    getData()
    const storedBms = JSON.parse(localStorage.getItem("bookmarks")) || [];
    setBookmarks(storedBms);

  }, [])

  function handleSearch(e) {
    let searchVal = e.target.value
    const filteredItems = allItems.filter(x => x.original_title?.toLowerCase().includes(searchVal.toLowerCase()) || x.name?.toLowerCase().includes(searchVal.toLowerCase()))
    setItems(filteredItems)
    setSearchResultCount(filteredItems.length)
    searchVal.length == 0 ? setSearching(false) : setSearching(true)
  }

  function handleFilter(type) {
    const filteredItems = allItems.filter(x => x.type == type)
    setItems(filteredItems)
  }

  function addToBookmarks(item) {
    const storedBms = JSON.parse(localStorage.getItem("bookmarks")) || [];
    const isBookmarked = storedBms.some((bm) => bm.id === item.id);

    let updatedBookmarks;

    if (isBookmarked) {
      updatedBookmarks = storedBms.filter((bm) => bm.id !== item.id);
    } else {
      updatedBookmarks = [...storedBms, item];
    }

    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
    setBookmarks(updatedBookmarks);
  }

  return (
    <>
      <Nav />
      <SearchBar setSearching={setSearching} handleFilter={handleFilter} handleSearch={handleSearch} />
      {searching && <p>Found {searchResultCount} results</p>
      }
      <BookmarkContext.Provider value={{ addToBookmarks, bookmarks }}>
        <Routes>
          <Route path="/" element={<MainPage items={items} />} />
          <Route path="/bookmarks" element={<Bookmarks bookmarks={bookmarks} />} />
          <Route path="/movies" element={<Movies items={items} movies={movies} />} />
          <Route path="/series" element={<Series items={items} series={series} />} />
        </Routes>
      </BookmarkContext.Provider>
    </>
  )
}

export default App
