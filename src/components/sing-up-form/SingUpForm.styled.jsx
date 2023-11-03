import styled from "styled-components";

export const Container = styled.div`
  margin: 4rem auto 2rem;
  min-height: 600px;

  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 780px) {
    min-height: 400px;
  }
`;

export const Title = styled.h2`
  display: block;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--light-color);
  margin: 1.6rem 0 1.6rem;
  position: relative;
  font-weight: 700;
  font-size: 2rem;
  letter-spacing: 2px;
  margin-top: 3.6rem;
`;

export const SubTitle = styled.span`
  display: block;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--grey-color);
  position: relative;
  font-weight: 700;
  font-size: 1.5rem;
  letter-spacing: 2px;

  &::before {
    content: "";
    position: absolute;
    bottom: -10px;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    left: 50%;
    height: 3px;
    width: 50%;
    background-color: var(--yellow-color);
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 4rem;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  justify-content: space-beetwen;
`;

export const Label = styled.label``;

export const Input = styled.input`
  border: 2px solid var(--grey-color);
  border-radius: 3rem;
  padding: 1rem 7rem 1rem 2rem;
  position: relative;
  width: 100%;
  color: #fff;

  @media screen and (max-width: 768px) {
    min-width: auto;
    color: #fff;
  }
`;

export const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 40px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1000px) {
    gap: 20px;
  }
`;

export const Button = styled.button`
  display: block;
  font-size: 1.25em;
  font-weight: bold;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  text-align: center;
  padding: 1rem 3rem;
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
