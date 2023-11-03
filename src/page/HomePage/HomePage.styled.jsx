import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  margin: 4rem auto 2rem;
  min-height: 600px;
  overflow-y: scroll;
  background-image: url(/src/assets/batman.svg);
  background-size: contain;
  background-repeat: no-repeat;

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

  display: flex;
  flex-direction: column;
  -webkit-box-align: flex-end;
  -ms-flex-align: flex-end;
  align-items: flex-end;

  @media screen and (max-width: 1000px) {
    text-align: center;
    margin-top: 1.8rem;
    row-gap: 4rem;
    max-width: 680px;
    margin-right: auto;
    margin-left: auto;
    justify-content: flex-end;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    min-height: 670px;

    background-size: 400px 400px;
    background-position-x: center;
  }

  @media screen and (max-width: 680px) {
    background-size: 300px 300px;
  }

  @media screen and (max-width: 680px) {
    min-height: 600px;
  }
`;

export const TextContainer = styled.div`
  max-width: 55%;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  @media screen and (max-width: 1000px) {
    max-width: 100%;
  }
`;

export const Text = styled.p`
  display: block;
  font-weight: 600;
  color: var(--grey-color);
  position: relative;
  font-weight: 700;
  font-size: 2rem;
  letter-spacing: 2px;

  @media screen and (max-width: 680px) {
    font-size: 1.75rem;
  }

  @media screen and (max-width: 540px) {
    color: var(--light-color);
  }
`;

export const MainLink = styled(Link)`
  display: block;
  width: 200px;
  font-size: 1.5em;
  font-weight: bold;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  text-align: center;
  padding: 1rem 1rem;
  border: none;
  border-radius: 10px;
  text-decoration: none;
  color: white;
  background: var(--red-color);
  transition: 0.5s;

  &:hover {
    transform: translate(0, -3px);
    box-shadow: 0 0 0 2px var(--dark-color), 0 0 0 4px var(--red-color);
  }
`;
