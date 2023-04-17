import TrendingTodayItem from 'components/TrendingTodayItem/TrendingTodayItem';
import PropTypes from 'prop-types';

const TrendingTodayList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <TrendingTodayItem key={movie.id} title={movie.title} id={movie.id} />
      ))}
    </ul>
  );
};

export default TrendingTodayList;

TrendingTodayList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};
