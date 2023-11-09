import React from "react";
import useStore from "../store";

export default function Header() {
  const { isDark } = useStore((state) => state);

  return (
    <header className={`header ${isDark ? "dark" : "white"}`}>
      <h1>Welcome! 프론트엔드 테킷 수강생</h1>
    </header>
  );
}
