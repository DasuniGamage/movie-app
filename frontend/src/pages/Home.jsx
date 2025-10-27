import { useState } from 'react'
import MovieCard from '../components/MovieCard'
import '../css/Home.css'



function Home() {

    const [searchQuery,setSearchQuery] = useState("");

    const movies=[
        {id:1, title:"Neera",release_date:"2020"},
        {id:2, title:"Affair",release_date:"2024"},
        {id:3, title:"Harmony Secret",release_date:"2018"},
        {id:4, title:"Dangerous Queen",release_date:"2025"},
    ]

    const handleSearch=(e)=>{
        e.preventDefault()
        alert(searchQuery);

    }

  return (
    <div className='home'>
        <form onSubmit={handleSearch} className='search-form'>
            <input 
                type="text" 
                placeholder='Search for Movies...' 
                className='search-input'
                value={searchQuery}
                onChange={(e) =>setSearchQuery(e.target.value)}
            />
            <button type='submit' className='search-button'>Search</button>
        </form>
      <div className='movies-grid'>
        {movies.map((movie)=>(
            movie.title.toLowerCase().startsWith(searchQuery)&&<MovieCard movie={movie} key={movie.id}/>
        ))}
      </div>
    </div>
  )
}

export default Home
