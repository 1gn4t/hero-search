import styled from "styled-components";

export const SearchListContainer = styled.div`
  z-index: 10;
  position: absolute;
  top: calc(100% + 1rem);
  left: 0;
  background-color: var(--light-color);
  width: 100%;
  max-height: 400px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--red-color);
    border-radius: 5px;
  }
`;

export const SearchItemContainer = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: var(--dark-color);
  padding: 0.4rem 0;

  img {
    width: 50px;
    margin-right: 2rem;
  }

  p {
    font-weight: 700;
    cursor: pointer;
  }
`;
