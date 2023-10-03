import React, { useState } from "react";
import useThemeSwitcher from "../../Hooks/useThemeSwitcher";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const SwitchTheme = () => {
  const [colorTheme, setTheme] = useThemeSwitcher();

  const [darkMode, setDarkMode] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkMode(checked);
  };

  return (
    <DarkModeSwitch checked={darkMode} onChange={toggleDarkMode} size={32} />
  );
};

export default SwitchTheme;
