import styled from "styled-components";
import config from "../../config";

export const StyledSearch = styled.div`
  margin: 1em auto;
  max-width: 375px;
  background: #efefef;
  padding: 16px;
  margin: 0;
  box-sizing: border-box;

  @media only screen and (min-width: ${config.breakpoints.medium}px) {
    background: none;
    padding: 0;
    margin: 1em auto;
  }
`;
