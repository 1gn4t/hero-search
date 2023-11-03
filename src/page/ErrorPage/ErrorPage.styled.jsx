import styled from "styled-components";

export const Container = styled.div`
  margin: 4rem auto 2rem;
  min-height: 600px;
  background-image: url(/src/assets/sad-batman.gif);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 30%;

  display: flex;
  -webkit-box-align: flex-end;
  -ms-flex-align: flex-end;
  align-items: flex-end;
  justify-content: center;

  @media screen and (max-width: 680px) {
    min-height: 400px;
  }

  @media screen and (max-width: 500px) {
    background-position: top;
    min-height: 300px;
  }
`;

export const Text = styled.span`
  display: block;
  font-size: 3em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    font-size: 2em;
  }

  @media screen and (max-width: 500px) {
    font-size: 1em;
  }
`;
