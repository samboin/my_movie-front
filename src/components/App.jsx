import { useState } from 'react'
import React from 'react'
import SearchBar from './SearchBar'
import MovieList from './MovieList'
import {useEffect } from "react";
import axios from 'axios';
function App() {

  const[movies,setMovies]=useState(
      [
      
    ]
  )

   const[searchQuery,setSearchQuery]=useState("");


useEffect(() => {

  const fetchData = async () => {
             
            try {
                const response = await axios.get("http://localhost:3002/movies")
                // .then(m => setMovies(m.data))
                setMovies(response.data)
             } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
    
         fetchData(); // Async fonksiyonu burada çağırıyoruz.
}, []);



  // const deleteMovie = (movie)=>{
  //   console.log(movies)
  //   const newMovieList = movies.filter(
  //     m => m.id !== movie.id
  //   );

  //   console.log(newMovieList)

  //   setMovies(newMovieList)
  // }

  const deleteMovie = async(movie)=>{
    const deletedMovie = axios.delete(`http://localhost:3002/movies/${movie.id}`)
    
    const newMovieList = movies.filter(
      m => m.id !== deletedMovie.id
    );

    setMovies(newMovieList)
  }

  const searchMovie = (event)=>{
    console.log(event.target.value);  
    setSearchQuery(event.target.value)
  }

  let filteredMovies = movies.filter(
    (movie) => {
      return movie.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1;
    }
  );
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
           <SearchBar handleSearchMovie={searchMovie}/>
          </div>
        </div>
        <MovieList
         movies={filteredMovies}
         deleteMovieProp={deleteMovie}/>
      </div>
    </>
  )
}

export default App
