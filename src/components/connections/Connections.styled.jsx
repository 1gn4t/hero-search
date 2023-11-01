import styled from "styled-components";

export const ConnectionsList = styled.ul``;

export const Item = styled.li``;

export const Tittle = styled.span`
  display: block;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--grey-color);
  margin: 1.6rem 0 1.6rem 4rem;
  position: relative;
  font-weight: 700;
  font-size: 2rem;
  letter-spacing: 2px;
  margin-top: 3.6rem;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    left: -40px;
    height: 3px;
    width: 30px;
    background-color: var(--yellow-color);
  }
`;

export const Text = styled.span`
  letter-spacing: 1px;
  line-height: 1.9;
`;
