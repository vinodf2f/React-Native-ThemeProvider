import { createContext, useState } from "react";
import * as React from "react";

const ThemeContext = createContext({});

export type ThemeType = "light" | "dark" | "dim";

export interface ThemeContextValueTypes {
  theme?: ThemeType;
  changeTheme?: (theme: ThemeType) => void;
}

export const ContextProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>("dim");

  const changeTheme = (newTheme: ThemeType) => {
    setTheme(newTheme);
  };
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
