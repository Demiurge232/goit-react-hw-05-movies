import { useEffect, useRef, useState, Suspense } from 'react';
import { Link, useParams, Outlet, useLocation } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { getMovieById } from 'sources/getThemoviedb';
import {
  StyledImg,
  BoxMovie,
  GenresList,
  BoxInfo,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [currentGenres, setCurrentGenres] = useState(null);
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');
  const POSTER_BASE_URL = 'http://image.tmdb.org/t/p/w500/';

  useEffect(() => {
    getMovieById(Number(movieId))
      .then(response => {
        setMovie(response.data);
        setCurrentGenres([...response.data.genres]);
      })
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <>
      <div>
        <Link to={backLinkHref.current}>
          <button type="button">
            <AiOutlineArrowLeft /> Go back
          </button>
        </Link>
      </div>

      <BoxMovie>
        <StyledImg
          src={
            movie.poster_path ? `${POSTER_BASE_URL}${movie.poster_path}` : ''
          }
          alt={movie.title}
        />
        <div>
          <h1>{movie.title}</h1>
          <p>User Score: {movie.vote_average}%</p>

          <h2>Overview</h2>
          <p>{movie.overview}</p>

          <h3>Genres</h3>
          <GenresList>
            {currentGenres?.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            )) ?? (
              <li>
                <span>We don't have any genres for this movie</span>
              </li>
            )}
          </GenresList>
        </div>
      </BoxMovie>

      <BoxInfo>
        <span>Additional Information</span>
        <ul>
          <li>
            <Link to="Cast">Cast</Link>
          </li>
          <li>
            <Link to="Reviews">Reviews</Link>
          </li>
        </ul>

        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </BoxInfo>
    </>
  );
};

export default MovieDetails;
