import styled from "styled-components";

export const QuoteContainer = styled.div`
  background-color: #f1f1f1;
  width: 60%;
  padding: 2em;
  transform: translate(25%, 3%);
  border-radius: 10px;
  box-shadow: 4px 4px 1px #330033;
  display: flex;
  flex-direction: column;

  @media (max-width: 500px) {
    flex-direction: column;
    cursor: pointer;
    max-width: 50%;

    padding: 2em;
  }

  justify-content: space-between;
  align-items: center;
  line-height: 1.4;
`;

export const QuoteText = styled.h2`
  font-size: 25px;
  font-family: arial;
  color: #4d004d;

  @media (max-width: 500px) {
    font-size: 18px;
  }
`;

export const QuoteAuthor = styled.p`
  font-family: arial;
  color: #4d004d;
`;
