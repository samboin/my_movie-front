import React from 'react'

const MovieList = (props) => {

  return (
    <div className="row">

    {props.movies.map((movie)=>(
        <div className='col-lg-3' key={movie.id}>
        <div className="card mb-4 shadow-sm">
            <img src={movie.imageUrl} className='card-img-top' style={{height:"360px",objectFit:"cover"}} alt="Sample Movie"></img>
            <div className='card-body'>
              <div className="car-title">
                <h5>{movie.name}</h5>
                <p className="'card-text'">{movie.overview}</p>
                <div className="d-flex justify-content-between align-items-center">
                <button type="button" className="btn btn-outline-danger" onClick={(event) => props.deleteMovieProp(movie)}>Delete</button>
                    <h2><span className="badge text-bg-primary">{movie.rating}</span></h2>
                </div>
              </div>
            </div>
        </div>
    </div>
    ))}

        
    </div>
  )
}

export default MovieList