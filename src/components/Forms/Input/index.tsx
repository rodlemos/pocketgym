import React, { ReactElement } from "react";
import { Container, InputField } from "./styles";
import { KeyboardTypeOptions } from "react-native";

type Props = {
  placeholder: string;
  icon: ReactElement;
  keyboardType: KeyboardTypeOptions;
};

export function Input({ icon, placeholder, keyboardType }: Props) {
  return (
    <Container>
      {icon}
      <InputField
        placeholder={placeholder}
        placeholderTextColor={"#CDD0D7"}
        keyboardType={keyboardType}
      />
    </Container>
  );
}
