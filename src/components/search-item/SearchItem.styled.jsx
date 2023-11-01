import styled from "styled-components";

export const SearchItemContainer = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: var(--dark-color);
  padding: 0.4rem 0;
  min-height: 67px;

  img {
    width: 50px;
    margin-right: 2rem;
  }

  p {
    font-weight: 700;
    cursor: pointer;
  }
`;
