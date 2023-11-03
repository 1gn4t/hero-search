import styled from "styled-components";

export const Container = styled.div`
  margin: 4rem auto 2rem;
  min-height: 600px;

  display: flex;
  justify-content: space-between;
  gap: 40px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    margin-top: 1.8rem;
    row-gap: 4rem;
    max-width: 680px;
    margin-right: auto;
    margin-left: auto;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    gap: 0;
  }
`;
