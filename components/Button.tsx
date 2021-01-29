import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { ThemedText, ThemedView } from "./Themed";

interface ButtonProps {
  title: string;
  onPress: () => void;
}

const Button = (props: ButtonProps) => {
  return (
    <ThemedView style={styles.container}>
      <TouchableOpacity onPress={props.onPress}>
        <ThemedText>{props.title}</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.3,
    padding: 6,
    borderRadius: 5,
    backgroundColor: "lightblue",
  },
});
