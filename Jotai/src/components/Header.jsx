import React from "react";
import darkModeAtom from "../atom";
import { useAtom } from "jotai";

export default function Header() {
  const [isDark] = useAtom(darkModeAtom);

  return (
    <header className={`header ${isDark ? "dark" : "white"}`}>
      <h1>Welcome! 프론트엔드 테킷 수강생</h1>
    </header>
  );
}
