import React from 'react'
import MovieCard from './MovieCard'

export default function Movies({ allMovies }) {
    return (
        <div style={{ height: '450px', display: 'flex' }}>
            {
                allMovies.map(movie => <MovieCard key={movie.id} details={movie} />)
            }
        </div>
    )
}
