import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const PowerstatusList = styled.ul``;

export const PowerstatusItem = styled.li`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin: 1.2rem auto;
  padding: 1.2rem;
  -webkit-box-shadow: 0 5px 7px 0 rgba(0, 0, 0, 0.5);
  box-shadow: 0 5px 7px 0 rgba(0, 0, 0, 0.5);
`;

export const Icon = styled(FontAwesomeIcon)`
  color: var(--red-color);
`;
export const PowerstatusTitle = styled.span`
  text-transform: uppercase;
  letter-spacing: 2px;
  border-radius: 7px;
  padding: 0 1.2rem;
  margin: 0 1.6rem;
  opacity: 0.6;
  font-size: 1.7rem;
`;
export const PowerstatusText = styled.span`
  color: var(--yellow-color);
  font-weight: 700;
`;
