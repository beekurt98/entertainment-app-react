import ListItem from "../ListItem";

export default function Series({ items, series }) {
  const s = items.filter(item => item.type == "tv")
  return (
    <>
    <h2>Series</h2>
      {
        s.map(x => < ListItem item={x} />)
      }
    </>
  )
}