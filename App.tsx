import React from "react";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import Main from "./src/screens/Main";
import theme from "./src/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.gray700}
        translucent
      />

      <Main />
    </ThemeProvider>
  );
}
