import ListItem from "../ListItem";

export default function Movies({ items, movies }) {
  const s = items.filter(item => item.type == "movie")

  return (
    <>
      <h2>Movies</h2>
      {
        s.map(movie => < ListItem item={movie} />)
      }
    </>
  )
}