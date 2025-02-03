import ListItem from "../ListItem";

export default function Movies({ bookmarks }) {

  return (
    <>
      <h2>Bookmarks</h2>
      {
        bookmarks.length == 0
        ? "Nothing to show..."
        : bookmarks.map(movie => < ListItem item={movie} />)
      }
    </>
  )
}