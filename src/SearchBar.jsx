import { useState } from "react"

export default function SearchBar({ handleFilter, handleSearch, setSearching }) {
  const [inputClicked, setInputClicked] = useState(false)

  window.addEventListener("click", () => {
    inputClicked ? setSearching(false) : ""
  })
  return (
    <>
      <div className="search">
        <input
          type="text"
          name='search'
          onChange={handleSearch}
          onClick={() => {
            setSearching(true);
            setInputClicked(true)
          }}
        />
      </div>
    </>
  )
}