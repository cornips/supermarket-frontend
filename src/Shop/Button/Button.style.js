import styled, { css } from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  ${props => `justify-content: ${props.align || "space-around"};`}

  > button:first-child {
    margin-left: 0;
  }
  > button:last-child {
    margin-right: 0;
  }
`;

const Button = props => css`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: space-evenly;
  box-sizing: border-box;
  border: none;
  border-radius: 4px;
  padding: 0 16px;
  margin: 0 8px;
  min-width: 64px;
  height: 36px;
  text-overflow: ellipsis;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 500;
  line-height: 36px;
  overflow: hidden;
  outline: none;
  cursor: pointer;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  transition: box-shadow 0.2s;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(255, 255, 255);
    opacity: 0;
    transition: opacity 0.2s;
  }

  &:hover,
  &:focus {
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
      0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
  }
  &:hover {
    &::before {
      opacity: 0.08;
    }
    &:focus::before {
      opacity: 0.3;
    }
  }
  &:focus {
    &::before {
      opacity: 0.24;
    }
  }

  &:active {
    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
      0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
  }

  &:disabled {
    box-shadow: none;
    cursor: initial;

    &::before {
      opacity: 0;
    }
  }

  img {
    height: 100%;
  }
`;

export const PrimaryButton = styled.button`
  ${Button}
  color: rgb(255, 255, 255);
  background-color: rgb(33, 150, 243);
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);

  &:disabled {
    color: rgba(0, 0, 0, 0.38);
    background-color: rgba(0, 0, 0, 0.12);
  }
`;

export const SecondaryButton = styled.button`
  ${Button}
  color: #1e2126;
  background: none;
  box-shadow: none;
  padding: 0;

  :hover,
  :focus {
    box-shadow: none;
  }

  :active {
    box-shadow: none;
  }

  &:disabled {
    color: rgb(170, 170, 170);
  }
`;

const Icon = props => css`
  height: 21px;

  display: flex;
  align-items: center;
`;

export const IconLeft = styled.div`
  ${Icon}
  padding-right: 8px;
`;

export const IconRight = styled.div`
  ${Icon}
  padding-left: 8px;
`;
