import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 40px 26px 20px;
  background-color: #c9c9c9;
`;

export const Greeting = styled.View`
  flex-direction: row;
  gap: 8px;
`;

export const Content = styled.View`
  padding: 26px 20px;
  gap: 16px;
`;

export const InfoPanel = styled.View`
  width: 100%;
  padding: 8px 12px;
  border-radius: 16px;
  height: 160px;
  background-color: #c9c9c9;
`;

export const Highlight = styled.View`
  width: 100%;
  background-color: #ccc;
  padding: 8px 12px;
  border-radius: 16px;
`;
