import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledHeader, StyledUl, StyledLink } from './SharedLayout.styled';
const SharedLayout = () => {
  return (
    <div>
      <StyledHeader>
        <nav>
          <StyledUl>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/movies">Movies</StyledLink>
            </li>
          </StyledUl>
        </nav>
      </StyledHeader>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
export default SharedLayout;
