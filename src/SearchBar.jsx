import { useState } from "react"

export default function SearchBar({ handleFilter, handleSearch, setSearching }) {
  const [inputClicked, setInputClicked] = useState(false)

  window.addEventListener("click", () => {
    inputClicked ? setSearching(false) : ""
  })
  return (
    <>
      <div className="search">
        {searchSvg}
        <input
          type="text"
          name='search'
          onChange={handleSearch}
          onClick={() => {
            setSearching(true);
            setInputClicked(true)
          }}
          placeholder="Search for movies or TV series"
        />
      </div>
    </>
  )
}

const searchSvg = <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.31 12.9L17.71 16.29C17.8993 16.4778 18.0058 16.7334 18.0058 17C18.0058 17.2666 17.8993 17.5222 17.71 17.71C17.5222 17.8993 17.2666 18.0058 17 18.0058C16.7334 18.0058 16.4778 17.8993 16.29 17.71L12.9 14.31C11.5025 15.407 9.77666 16.0022 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16.0022 9.77666 15.407 11.5025 14.31 12.9ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2Z" fill="white"/>
</svg>
