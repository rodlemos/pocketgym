import React from "react";
import { Container } from "./styles";

export interface ProfileImageProps {
  size: "large" | "small";
}

export function ProfileImage({ size = "large" }: ProfileImageProps) {
  return <Container size={size} />;
}
