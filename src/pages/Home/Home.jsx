import { useEffect, useState } from 'react';
import TrendingTodayList from 'components/TrendingTodayList/TrendingTodayList';
import { getTrending } from 'sources/getThemoviedb';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrending()
      .then(response => setMovies([...response.data.results]))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <TrendingTodayList movies={movies} />;
    </>
  );
};

export default Home;
