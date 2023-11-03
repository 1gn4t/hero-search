import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;

  @media screen and (max-width: 992px) {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
`;

export const HeaderLogo = styled.h2`
  cursor: pointer;
  span {
    color: var(--red-color);
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const SingInButton = styled.button`
  cursor: pointer;
  width: 100px;
  font-size: 1em;
  font-weight: bold;
  text-align: center;
  padding: 1rem 1rem;
  margin: 1rem 0;
  border: none;
  border-radius: 10px;
  text-decoration: none;
  color: var(--grey-color);
  background: var(--yellow-color);
  transition: 0.5s;

  &:hover {
    transform: translate(0, -3px);
    box-shadow: 0 0 0 2px var(--dark-color), 0 0 0 4px var(--yellow-color);
  }
`;

export const SingOutButton = styled.button`
  cursor: pointer;
  width: 100px;
  font-size: 1em;
  font-weight: bold;
  text-align: center;
  padding: 1rem 1rem;
  margin: 1rem 0;
  border: none;
  border-radius: 10px;
  text-decoration: none;
  color: var(--yellow-color);
  background: var(--grey-color);
  transition: 0.5s;

  &:hover {
    transform: translate(0, -3px);
    box-shadow: 0 0 0 2px var(--dark-color), 0 0 0 4px var(--grey-color);
  }
`;
