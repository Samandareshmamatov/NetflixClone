import React from 'react'
import request from '../request/Axios';
import reqApiKey from '../request/request';

const Hero = () => {
  const [movie, setMovie] = React.useState([]);

  React.useEffect(() => {
    request
      .get(reqApiKey.fetchNetflixOriginals)
      .then((res) => setMovie(res.data.results[Math.floor(Math.random() *res.data.results.length)]));
  }, []);
    console.log(movie);
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
      }}
    >
      <div className="heroContent">
        <h1 className="heroTitle">{movie?.original_name}</h1>
        <div className='heroSpanBox'>
          <span>⭐{movie?.vote_average}  </span>
          <span>📅{movie?.first_air_date}  </span>
          <span>🟢{movie?.popularity}  </span>
        </div>
        <p className="heroText">
          {movie.overview?.length > 250
            ? movie.overview?.slice(0, 250)
            : movie.overview + "..."}
        </p>
        <button className="heroBtn">Play</button>
      </div>
    </div>
  );
}

export default Hero