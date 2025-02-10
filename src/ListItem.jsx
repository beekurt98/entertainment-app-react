import { useContext, useState } from "react"
import { bookmarkSvg, bookmarkedSvg } from "./Svg"
import { BookmarkContext } from './App'

export default function ListItem({ item }) {
  const [bookmarked, setBookmarked] = useState(false)
  const { addToBookmarks, bookmarks } = useContext(BookmarkContext)

  // console.log(item.name || item.original_title, bookmarks.includes(item))

  return (
    <>
      <div className="single-listing card">
        <button className="bookmark-btn" onClick={() => {addToBookmarks(item); setBookmarked(!bookmarked)}}>{bookmarks.includes(item) ? bookmarkedSvg : bookmarkSvg}</button>
        <img src={item.backdrop_path == null ? "https://image.tmdb.org/t/p/w200" + item.poster_path : "https://image.tmdb.org/t/p/w200" + item.backdrop_path} />
        <div className="listing-info">
          <span>{item?.release_date || item?.first_air_date && item?.release_date || item?.first_air_date.split("-").at(0)}</span> • <span>{item?.original_title ? "Movie" : "TV Series"} </span> • <span>{item.adult ? "18+" : "PG"}</span>

        </div>
        <h4>{item?.name || item?.original_title}</h4>
      </div>
    </>
  )
}