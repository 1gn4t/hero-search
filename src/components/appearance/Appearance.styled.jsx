import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const Icon = styled(FontAwesomeIcon)`
  color: var(--yellow-color);
  margin-right: 1.4rem;
`;

export const AppearanceList = styled.ul``;

export const Item = styled.li`
  margin: 3.2rem 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`;

export const Tittle = styled.span`
  text-transform: capitalize;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-right: 4rem;
`;
export const Text = styled.span`
  font-weight: 600;
  text-transform: capitalize;
  background-color: var(--red-color);
  border-radius: 2rem;
  padding: 0 1rem;
  text-align: right;
`;
