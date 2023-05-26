import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function Root({ theme, setTheme }) {
  return (
    <>
      <header>
        <Header theme={theme} setTheme={setTheme} />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
