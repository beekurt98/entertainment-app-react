import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [movies, setMovies] = useState([])
  const [series, setSeries] = useState([])
  const [items, setItems] = useState([])

  useEffect(() => {
    // async function getItems(type) {
    //   const url = `https://api.themoviedb.org/3/${type}/popular?language=en-US&page=1`;
    //   console.log(url)
    //   const options = {
    //     method: 'GET',
    //     headers: {
    //       accept: 'application/json',
    //       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MmJlYjBiNTI5YmZlMTM5ZGFlOWJmNDQ5MDJlZWNhYyIsIm5iZiI6MTczODU3Njk3Ni4wMDMsInN1YiI6IjY3YTA5NDRmYTc0ZDhlZTIzYjI2NzViOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V-6XnooIH4z1zqZxLGlsHq-rRSEKu0xG2B4JOCkXNtI'
    //     }
    //   };
    //   const data = await fetch(url, options).then(res => res.json())
    //   console.log(data)
    //   type == "movie" ? setMovies(data.results) : setSeries(data.results)
    // }
    async function getData(type) {
      const data = await fetch('./src/data.json').then(r => r.json());
     if ( type == "movie") {
      setMovies(data.movie.results)
      setItems([...items, data.movie.results])
     } else {
      setSeries(data.tv.results)
      setItems([...items, data.tv.results])
     }
    }
    // getItems("movie")
    // getItems("tv")
    getData("movie")
    getData("tv")
  }, [])
  
  console.log(items)

  return (
    <>
      <h1>Hey</h1>
      series
      {
        items.map((x) => (
           <div key={x.id}>
            {x.name || x.original_title}
            <img src={"https://image.tmdb.org/t/p/w200" + x.poster_path} alt="" />

          </div>
        ))
      }
    </>
  )
}

export default App
