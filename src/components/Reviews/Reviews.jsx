import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieAdditionalInformation } from 'sources/getThemoviedb';
const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    getMovieAdditionalInformation(Number(movieId), 'reviews')
      .then(response => {
        if (response.data.results !== []) {
          setReviews([...response.data.results]);
        }
        return;
      })
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <>
      <ul>
        {reviews?.map(review => (
          <li key={review.id}>
            <h3>Author: {review.author}</h3>
            <p>{review.content}</p>
          </li>
        )) ?? (
          <li>
            <span>We don't have any reviews for this movie.</span>
          </li>
        )}
      </ul>
    </>
  );
};

export default Reviews;
