import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const SearchContainer = styled.form`
  border: 2px solid var(--grey-color);
  border-radius: 3rem;
  padding: 1rem 2rem;
  position: relative;

  @media screen and (max-width: 768px) {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
`;

export const SearchInput = styled.input`
  min-width: 420px;
  color: #fff;

  @media screen and (max-width: 768px) {
    min-width: auto;
    color: #fff;
  }
`;

export const SearchButton = styled.button`
  color: var(--grey-color);
  font-size: 2.3rem;
  cursor: pointer;
`;

export const Icon = styled(FontAwesomeIcon)``;
