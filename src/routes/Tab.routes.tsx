import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import { House, CalendarCheck, Person } from "phosphor-react-native";
import { useTheme } from "styled-components/native";

export function TabRoutes() {
  const { Navigator, Screen } = createBottomTabNavigator();
  const { colors } = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary_400,
        tabBarInactiveTintColor: colors.gray_400,
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <House size={26} color={color} />,
        }}
      />
      <Screen
        name="Planejamento"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <CalendarCheck size={26} color={color} />,
        }}
      />
      <Screen
        name="Perfil"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <Person size={26} color={color} />,
        }}
      />
    </Navigator>
  );
}
