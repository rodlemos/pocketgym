import styled, { css } from "styled-components/native";

interface Props {
  medium?: boolean;
  small?: boolean;
}

export const Heading = styled.Text<Props>`
  font-size: 24px;
  font-weight: 700;

  ${({ medium }) =>
    medium &&
    css`
      font-size: 20px;
      font-weight: 600;
    `}

  ${({ small }) =>
    small &&
    css`
      font-size: 18px;
      font-weight: 600;
    `}
`;
