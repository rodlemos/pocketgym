import React from "react";
import { Container } from "./styles";
import { Heading } from "../Headings";
import { Text } from "react-native";

interface Props {
  title: string;
}

export function TrainingCard({ title }: Props) {
  return (
    <Container>
      <Heading medium>{title}</Heading>
      <Text>Data de início</Text>
    </Container>
  );
}
