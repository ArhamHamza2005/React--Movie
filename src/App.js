import './App.css';
import { useEffect,useState } from 'react';
import MoviesCard from './MoviesCard';
// b7b6ef84

const API_URL = "http://www.omdbapi.com?apikey=b169cf0";
function App() {
    const searchMovie= async (title) => {
    const response=await fetch(`${API_URL}&s=${title}`)
    const data= await response.json()
  
    SetMovies(data.Search)
  }

  const [Movies,SetMovies]=useState([]) 
  const [Search,setSearch]=useState() 
  

  useEffect(()=>{
    searchMovie("FUNNY")
  },[])
  console.log(Movies)
  return (
    <>
    <div className='app'>
     <div className="search">
  <input
    placeholder="Search for movies"
    value={Search}
    onChange={(e) => setSearch(e.target.value)}
  />
  {/* <button className="search-button" alt="search" onClick={() => searchMovie(Search)}> */}
  <button class="button" onClick={() => searchMovie(Search)}>Click Me</button>
</div>


  {Movies?.length > 0 ? (
          <div className="container">
            {Movies.map((movie) => (
              <MoviesCard movie={movie} />

            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No Movies Found</h2>
          </div>
        )}
  
  {/* <MoviesCard movie={Movies}/> */}
  </div>
  </>

  );



}

export default App;
// www.Luckystudio4u.com  