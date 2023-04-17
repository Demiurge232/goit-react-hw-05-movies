import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieAdditionalInformation } from 'sources/getThemoviedb';
import { StyledImg } from './Cast.styled';
const Cast = () => {
  const [casts, setCast] = useState(null);
  const { movieId } = useParams();

  const POSTER_BASE_URL = 'http://image.tmdb.org/t/p/w500/';

  useEffect(() => {
    getMovieAdditionalInformation(Number(movieId), 'credits')
      .then(response => setCast([...response.data.cast]))
      .catch(error => console.log(error));
  }, [movieId]);
  return (
    <ul>
      {casts?.map(cast => (
        <li key={cast.id}>
          <StyledImg
            src={
              cast.profile_path ? `${POSTER_BASE_URL}${cast.profile_path}` : ''
            }
            alt={cast.name}
          />
          <div>
            <h3>{cast.name}</h3>
            <span>{cast.character}</span>
          </div>
        </li>
      )) ?? (
        <li>
          <span>We don't have any casts for this movie</span>
        </li>
      )}
    </ul>
  );
};
export default Cast;
