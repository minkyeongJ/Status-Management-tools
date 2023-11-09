import React from "react";
import { useSelector } from "react-redux";

export default function Header() {
  const { darkModeState } = useSelector((state) => state);
  return (
    <header className={`header ${darkModeState ? "dark" : "white"}`}>
      <h1>Welcome! 프론트엔드 테킷 수강생</h1>
    </header>
  );
}
