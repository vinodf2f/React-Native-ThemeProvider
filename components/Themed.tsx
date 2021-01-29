import React, { useContext } from "react";
import { Text, View, ViewProps } from "react-native";
import ThemeContext, {
  ThemeContextValueTypes,
  ThemeType,
} from "../ThemeContext";
import appTheme from "./../utils/theme";

const ThemedText = (props: Text["props"] & ThemeContextValueTypes) => {
  const { style, ...otherProps } = props as ViewProps;
  const { theme } = useContext(ThemeContext) as ThemeContextValueTypes;

  let newTheme = props.theme || (theme as ThemeType);
  const { textColor: color } = appTheme[newTheme];

  return <Text style={[{ color, fontSize: 16 }, style]} {...otherProps} />;
};

const ThemedView = (props: View["props"] & ThemeContextValueTypes) => {
  const { style, ...otherProps } = props as ViewProps;
  const { theme } = useContext(ThemeContext) as ThemeContextValueTypes;
  let newTheme = props.theme || (theme as ThemeType);

  const { backgroundColor } = appTheme[newTheme];

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
};

export { ThemedText, ThemedView };
