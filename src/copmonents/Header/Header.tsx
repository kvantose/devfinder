import { ThemeSwitcher } from "copmonents/ThemeSwitcher/ThemeSwitcher";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">devfinder</h1>
      <ThemeSwitcher />
    </header>
  );
};
