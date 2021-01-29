import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Switch,
  Platform,
  ScrollView,
} from "react-native";
import ThemeContext, { ThemeContextValueTypes } from "../ThemeContext";
import { ThemedText, ThemedView } from "./Themed";
import Card from "./Card";

interface ChildProps {}

const Child: React.FC = (props: ChildProps) => {
  const { theme } = React.useContext(ThemeContext) as ThemeContextValueTypes;
  return (
    <ScrollView>
      <ThemedView style={styles.container}>
        <ThemedText style={styles.titleText}>{theme}</ThemedText>
        <ThemedText
          style={{ paddingHorizontal: Platform.OS === "web" ? 50 : 35 }}
        >
          lorem ipsum dolor sitworem ipsum dolor sitworem ipsum dolor sitworem
        </ThemedText>
        <ThemedText style={styles.sectionHeading}>Favorites</ThemedText>
        <ScrollView horizontal style={styles.cardContainerH}>
          <Card onPress={() => {}} style={{ width: 200 }} />
          <Card onPress={() => {}} style={{ width: 200 }} />
          <Card onPress={() => {}} style={{ width: 200 }} />
          <Card onPress={() => {}} style={{ width: 200 }} />
          <Card onPress={() => {}} style={{ width: 200 }} />
          <Card onPress={() => {}} style={{ width: 200 }} />
          <Card onPress={() => {}} style={{ width: 200 }} />
          <Card onPress={() => {}} style={{ width: 200 }} />
          <Card onPress={() => {}} style={{ width: 200 }} />
          <Card onPress={() => {}} style={{ width: 200 }} />
        </ScrollView>
        <ThemedText style={styles.sectionHeading}>
          Checkout all the items
        </ThemedText>
        <ThemedView style={styles.cardContainer}>
          <Card onPress={() => {}} />
          <Card onPress={() => {}} />
          <Card onPress={() => {}} />
          <Card onPress={() => {}} />
          <Card onPress={() => {}} />
          <Card onPress={() => {}} />
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
};

export default Child;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 10,
    paddingLeft: Platform.OS === "web" ? 50 : 25,
  },
  cardContainerH: {
    flexDirection: "column",
    flexWrap: "wrap",
    marginVertical: 10,
    paddingLeft: Platform.OS === "web" ? 50 : 25,
  },
  titleText: {
    fontSize: 26,
    marginVertical: 10,
    paddingLeft: Platform.OS === "web" ? 50 : 25,
  },
  sectionHeading: {
    paddingLeft: Platform.OS === "web" ? 50 : 25,
    fontSize: 24,
    fontWeight: "500",
    marginTop: 10,
  },
});
