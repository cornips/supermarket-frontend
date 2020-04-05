import styled, { css } from "styled-components";

const NoDrag = props => css`
  -webkit-user-drag: none;
  -webkit-app-region: no-drag;
`;

export const StyledLink = styled.a`
  ${NoDrag}
  text-decoration: none;
  color: inherit;
`;

export const ImgContainer = styled.div`
  ${NoDrag}
  height: 80px;
`;

export const Img = styled.img`
  ${NoDrag}
  height: 100%;
`;
