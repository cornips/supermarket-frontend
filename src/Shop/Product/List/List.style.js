import styled from "styled-components";
import config from "../../../config";

export const GridContainer = styled.div`
  width: 100%;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 0px;
  margin: 0 2em;

  @media only screen and (min-width: ${config.breakpoints.medium}px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (min-width: ${config.breakpoints.large}px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

export const Message = styled.p`
  grid-area: 1 / 7 / 1 / 1;
`;
