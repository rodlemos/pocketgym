import styled, { css } from "styled-components/native";
import { ProfileImageProps } from ".";

export const Container = styled.View<ProfileImageProps>`
  width: 180px;
  aspect-ratio: 1 / 1;
  background-color: white;
  border-radius: 90px;

  ${({ size }) =>
    size === "small" &&
    css`
      width: 80px;
      border-radius: 40px;
    `}
`;
