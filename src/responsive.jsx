import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 668px) {
      ${props}
    }
  `;
};
export const tablet = (props) => {
  return css`
    @media only screen and (max-width: 1020px) {
      ${props}
    }
  `;
};
