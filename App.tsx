import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, Platform } from "react-native";
import { ContextProvider } from "./ThemeContext";
import Child from "./components/Child";
import { ThemedView } from "./components/Themed";
import ThemeSwitcher from "./components/ThemeSwitcher";

export default function App() {
  return (
    <ContextProvider>
      <ThemedView style={{ flex: 1 }}>
        <SafeAreaView />
        <ThemeSwitcher />
        <Child />
      </ThemedView>
    </ContextProvider>
  );
}
