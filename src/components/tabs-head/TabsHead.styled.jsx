import styled from "styled-components";

export const TabsHeadContainer = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  padding-bottom: 1.6rem;
  margin: 2.4rem 0;

  @media screen and (max-width: 768px) {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
`;

export const CustomLink = styled.button`
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  font-weight: 500;
  font-size: 1.9rem;
  color: #fff;
  cursor: pointer;
  -webkit-transition: all 300ms ease-in-out;
  -o-transition: all 300ms ease-in-out;
  transition: all 300ms ease-in-out;
  text-decoration-line: none;

  &:hover {
    opacity: 0.9;
  }

  &.active::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -1.7rem;
    width: 100%;
    height: 4px;
    background-color: var(--red-color);
  }

  @media screen and (max-width: 768px) {
    &.active::after {
      display: none;
    }

    &.active {
      color: var(--red-color);
    }
  }
`;
