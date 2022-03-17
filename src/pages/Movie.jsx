import React from 'react'

export const Movie = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://api.lorem.space/image/movie?w=260&h=400" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
        <div>
      <h1 className="text-5xl font-bold "> Box Office News!  &#9733; </h1>
      <div class="badge badge-accent mt-2">8.9</div>
        </div>
        <div className="divider"></div>
        <h1 className="text-2xl font-bold mb-5 text-success">About Movie</h1>
        <ul className="flex flex-col gap-3">
            <li>Original title: <strong> Spider-Man </strong></li>
            <li>Popularity: <strong>1500 </strong></li>
            <li>Votes: <strong>20,000</strong></li>
            <li>Release date: <strong>2021-12-15</strong></li>
            <li>Lenguage: <strong>en</strong></li>
        </ul>
        <div className="divider mt-10"></div>
        <p>"Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man."</p>
    </div>
  </div>
</div>
  )
}
