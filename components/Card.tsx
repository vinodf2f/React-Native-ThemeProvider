import * as React from "react";
import { ThemedView, ThemedText } from "./Themed";
import {
  StyleSheet,
  ViewProps,
  Platform,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Button from "./Button";
import ThemeContext, {
  ThemeContextValueTypes,
  ThemeType,
} from "../ThemeContext";
import appTheme from "../utils/theme";

interface CardProps extends ViewProps {
  onPress: () => void;
}

const Card = (props: CardProps) => {
  const { theme } = React.useContext(ThemeContext) as ThemeContextValueTypes;
  let newTheme = theme as ThemeType;
  const { primary } = appTheme[newTheme];

  return (
    <ThemedView
      style={[styles.container, { borderColor: primary }, props.style]}
    >
      <TouchableOpacity onPress={() => {}}>
        <ThemedView style={styles.cardSection}>
          <ThemedText>Vinod Y</ThemedText>
        </ThemedView>
        <ThemedView style={styles.cardSection}>
          <ThemedText>Some Content</ThemedText>
        </ThemedView>
        <ThemedView style={[styles.cardSection]}>
          <ThemedText>Footer </ThemedText>
          <ThemedText>Footer right</ThemedText>
          {/* <Button title="Click" onPress={() => {}} /> */}
        </ThemedView>
      </TouchableOpacity>
    </ThemedView>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: "flex-start",
    borderWidth: 3,
    padding: 5,
    borderRadius: 20,
    marginVertical: 10,
    marginRight: Platform.OS === "web" ? 30 : 20,
    width: Platform.OS === "web" ? 300 : Dimensions.get("window").width - 80,
  },
  cardSection: {
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
