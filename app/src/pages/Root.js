import React, { useState } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function Root() {
  const [theme, setTheme] = useState("dark");

  function handleTheme() {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  }

  return (
    <div className="app" data-theme={theme}>
      <div className="app-container">
        <header>
          <Header theme={theme} handleTheme={handleTheme} />
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
