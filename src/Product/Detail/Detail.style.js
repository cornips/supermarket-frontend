import styled from "styled-components";

export const ShopContainer = styled.div`
  text-align: center;
`;

export const ShopLogo = styled.img`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: Shop-logo-spin infinite 20s linear;
  }

  @keyframes Shop-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const ShopHeader = styled.header`
  background-color: #282c34;
  min-height: calc(100vh - 2.5em);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const ShopLink = styled.a`
  color: #61dafb;
`;