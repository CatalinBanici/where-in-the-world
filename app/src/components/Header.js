import React from "react";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

export default function Header({ theme, handleTheme }) {
  return (
    <>
      <h1>Where in the world?</h1>
      <button onClick={handleTheme}>
        <span>{theme === "dark" ? <MdDarkMode /> : <MdOutlineDarkMode />}</span>
        Dark Mode
      </button>
    </>
  );
}
