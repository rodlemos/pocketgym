import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { TabRoutes } from "./Tab.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <TabRoutes />
    </NavigationContainer>
  );
}
