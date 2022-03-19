import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

export const Movie = ({ movies }) => {

  const { id } = useParams()

  let movie = movies.filter(item => item.id === +id)[0]

  if(!movie) return <button className='btn loading'>loading</button>
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img src="https://api.lorem.space/image/movie?w=260&h=400" className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <div>
            <h1 className="text-5xl font-bold "> {movie.title}   </h1>
            <div class="badge badge-accent mt-2">{movie.vote_overage}&#9733;</div>
          </div>
          <div className="divider"></div>
          <h1 className="text-2xl font-bold mb-5 text-success">About Movie</h1>
          <ul className="flex flex-col gap-3">
            <li>Original title: <strong> {movie.original_title} </strong></li>
            <li>Popularity: <strong>{movie.popularity} </strong></li>
            <li>Votes: <strong>{movie.vote_count}</strong></li>
            <li>Release date: <strong>{movie.release_date}</strong></li>
            <li>Lenguage: <strong>{movie.original_language}</strong></li>
          </ul>
          <div className="divider mt-10"></div>
          <p>"Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man."</p>
        </div>
      </div>
    </div>
  )
}
