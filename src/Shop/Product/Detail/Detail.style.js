import styled, { css } from "styled-components";
import config from "../../../helpers";

export const StyledDetail = styled.div`
  ${props =>
    props.popup
      ? css`
          position: fixed;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          overflow: auto;
          z-index: 1000;
          &:after {
            content: "";
            position: fixed;
            left: 0;
            top: 0;
            bottom: 0;
            right: 0;
            background: rgba(0, 0, 0, 0.25);
          }
        `
      : ""}
`;

export const Content = styled.div`
  ${props =>
    props.popup
      ? css`
          display: flex;
          flex-direction: column;
          position: relative;
          left: 0;
          top: 3vh;
          z-index: 1;
          background: white;
          width: 500px;
          max-width: 84vw;
          margin: 0 auto 3vh;
          padding: 3vh 4vw 6vh;
          border-radius: 15px;
          box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.22);
        `
      : ""}

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
  }
`;

export const GridBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto 1fr auto;
  grid-column-gap: 32px;
  margin: 0px 16px 76px;
  @media only screen and (min-width: ${config.breakpoints.medium}px) {
    margin: 0;
  }
`;

export const ActionsTop = styled.div`
  grid-area: 1 / 1 / 2 / 3;
  align-items: center;
  background: #efefef;
  margin: 0 -16px 16px;
  padding: 5px 16px;

  @media only screen and (min-width: ${config.breakpoints.medium}px) {
    background: none;
    margin: 0 0 16px;
    padding: 0;
  }
`;

export const GridLeft = styled.div`
  grid-area: 2 / 1 / 4 / 2;
  ${props => {
    let styles = "";
    if (props["vertical-align"] === "center") {
      styles += `
      display: flex;
      align-items: center;
      `;
    }
    styles += `text-align: ${props.align || "center"};`;
    return styles;
  }}
`;

export const GridRight = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  ${props => `text-align: ${props.align || "left"};`}
`;

export const ActionsBottom = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: auto 210px;
  grid-column-gap: 16px;
  position: fixed;
  bottom: 0;
  background: #efefef;
  margin: 0 -16px;
  padding: 16px;
  right: 16px;
  left: 16px;

  @media only screen and (min-width: ${config.breakpoints.medium}px) {
    grid-area: 3 / 2 / 4 / 3;
    margin-top: 4vh;
    position: static;
    background: none;
    margin: 0;
    padding: 0;
  }
`;

export const ProductImage = styled.div`
  img {
    max-width: 100%;
  }
`;

export const ProductDescription = styled.p`
  line-height: 1.4;
`;

export const ProductPrice = styled.span`
  white-space: nowrap;
`;
