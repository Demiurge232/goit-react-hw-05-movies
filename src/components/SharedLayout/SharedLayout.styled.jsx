import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const StyledHeader = styled.header`
  width: 100%;
  height: 40px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;
export const StyledUl = styled.ul`
  display: flex;
  gap: 10px;
  list-style: none;
`;

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-weight: 700;

  &.active {
    color: red;
  }
  &:hover,
  :focus {
    text-decoration: underline;
    color: red;
  }
`;
