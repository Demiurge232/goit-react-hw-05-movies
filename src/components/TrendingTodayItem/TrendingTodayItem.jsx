import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
const TrendingTodayItem = ({ title, id }) => {
  const location = useLocation();
  return (
    <li>
      <Link to={`/movies/${Number(id)}`} state={{ from: location }}>
        {title}
      </Link>
    </li>
  );
};
export default TrendingTodayItem;

TrendingTodayItem.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
};
