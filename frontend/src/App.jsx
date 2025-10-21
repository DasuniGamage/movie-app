import './App.css'
import MovieCard from './components/MovieCard'

function App() {

  return (
    <div>
      <MovieCard movie={{title:"ABC",release_date:"2024"}}/>
      <MovieCard movie={{title:"ABC",release_date:"2020"}}/>
    </div>
  )
}

export default App
