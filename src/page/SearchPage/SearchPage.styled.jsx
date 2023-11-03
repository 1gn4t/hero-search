import styled from "styled-components";

export const BodyContainer = styled.div`
  margin-top: 4rem;
  height: 600px;
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

  display: grid;
  grid-template-columns: 2fr 3fr;
  -webkit-column-gap: 4rem;
  -moz-column-gap: 4rem;
  column-gap: 4rem;
  margin-right: 2rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 3fr;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  @media screen and (max-width: 1000px) {
    text-align: center;
    margin-top: 1.8rem;
    grid-template-columns: 1fr;
    row-gap: 4rem;
    max-width: 680px;
    margin-right: auto;
    margin-left: auto;
  }
`;

export const ImgContainer = styled.img`
  width: 100%;
  border-radius: 6px;
  overflow: hidden;

  @media screen and (max-width: 1000px) {
    max-width: 400px;
    margin: 0 auto;
    overflow: visible;
  }
`;
