import React from "react";
import { Container, LoginForm } from "./styles";
import { Input } from "../../components/Forms/Input";
import { EnvelopeSimple, Password } from "phosphor-react-native";
import { FullButton } from "../../components/Buttons/FullButton";

export function Login() {
  return (
    <Container>
      <LoginForm>
        <Input
          placeholder="Email"
          icon={<EnvelopeSimple color="#CDD0D7" size={30} weight="light" />}
          keyboardType="email-address"
        />

        <Input
          placeholder="password"
          icon={<Password color="#CDD0D7" size={30} weight="light" />}
          keyboardType="visible-password"
        />
      </LoginForm>

      <FullButton />
    </Container>
  );
}
