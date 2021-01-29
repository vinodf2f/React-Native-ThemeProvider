import React, { useContext, useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import ThemeContext, {
  ThemeContextValueTypes,
  ThemeType,
} from "../ThemeContext";
import { ThemedView, ThemedText } from "./Themed";

const themes: ThemeType[] = ["light", "dark", "dim"];

const ThemeSwitcher = () => {
  const { theme, changeTheme } = useContext(
    ThemeContext
  ) as ThemeContextValueTypes;

  const [showThemeSwitcher, setShowThemeSwitcher] = useState(false);

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.chipContainer}>
        <TouchableOpacity
          onPress={() => setShowThemeSwitcher(!showThemeSwitcher)}
          style={[
            styles.toggleChip,
            { borderColor: theme === "dark" ? "white" : "black" },
          ]}
        >
          <ThemedText style={{ fontWeight: "600" }}>
            {showThemeSwitcher ? "Close" : "Theme"}
          </ThemedText>
        </TouchableOpacity>
        {showThemeSwitcher &&
          themes.map((themeItem, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => changeTheme && changeTheme(themeItem)}
            >
              <ThemedView
                theme={themeItem}
                style={[
                  styles.themeChip,
                  {
                    height: themeItem === theme ? 50 : 30,
                    borderColor:
                      themeItem === "dark" && theme === "dark"
                        ? "white"
                        : "black",
                  },
                ]}
              >
                <ThemedText theme={themeItem} style={{ fontWeight: "600" }}>
                  {themeItem}
                </ThemedText>
              </ThemedView>
            </TouchableOpacity>
          ))}
      </ThemedView>
    </ThemedView>
  );
};

export default ThemeSwitcher;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 40,
    zIndex: 9999,
    right: 0,
  },
  chipContainer: {
    alignItems: "flex-end",
    padding: 10,
    borderRadius: 20,
  },
  themeChip: {
    paddingHorizontal: 10,
    marginTop: 13,
    width: 60,
    paddingVertical: 5,
    borderWidth: 1,
    marginHorizontal: 5,
    borderRadius: 8,
  },
  toggleChip: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderWidth: 1,
    height: 30,
    marginHorizontal: 5,
    borderRadius: 5,
  },
});
