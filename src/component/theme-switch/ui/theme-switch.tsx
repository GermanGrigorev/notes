import useDarkMode from "use-dark-mode";

export const ThemeSwitcher = () => {
  const darkMode = useDarkMode(false);

  return (
    <div>
      <button onClick={darkMode.disable}>Light</button>/
      <button onClick={darkMode.enable}>Dark</button>
    </div>
  );
};
