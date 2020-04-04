import styled from "styled-components";
import config from "../../config";

export const Header = styled.header`
  background-color: #282c34;
  font-size: calc(10px + 2vmin);
  color: white;

  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 10vh;
  align-items: center;

  @media only screen and (min-width: ${config.breakpoints.medium}px) {
    grid-template-rows: 20vh;
  }
`;

export const LogoContainer = styled.div`
  height: 100%;
  text-align: left;
`;

export const Logo = styled.img`
  height: 100%;
  pointer-events: none;
`;

export const Title = styled.h1`
  margin: 0 2vw;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1.4em;

  @media only screen and (min-width: ${config.breakpoints.medium}px) {
    font-size: 1.8em;
  }
`;
