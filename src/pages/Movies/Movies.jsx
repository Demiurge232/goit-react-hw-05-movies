import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import getSearchMovie from 'sources/getThemoviedb';
import TrendingTodayList from 'components/TrendingTodayList/TrendingTodayList';
import { StyledForm, StyledInput } from './Movies.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams('');
  const [findFilms, setFindFilms] = useState(null);
  const query = searchParams.get('query') ?? '';
  useEffect(() => {
    if (query === '') {
      return;
    }

    getSearchMovie(query)
      .then(response => setFindFilms([...response.data.results]))
      .catch(error => console.log(error));
  }, [query]);

  const handleSubmit = event => {
    event.preventDefault();
    const { nameFilms } = event.target.elements;

    if (nameFilms.value === '') {
      alert('please fill in the fields');
      return;
    }

    setSearchParams({ query: nameFilms.value });
    nameFilms.value = '';
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          name="nameFilms"
          type="text"
          autoComplete="off"
          autoFocus
        />
        <button type="submit">Search</button>
      </StyledForm>

      {findFilms && <TrendingTodayList movies={findFilms} />}
    </>
  );
};
export default Movies;
