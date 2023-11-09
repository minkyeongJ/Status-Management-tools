import React from "react";
import { useRecoilState } from "recoil";
import { darkModeState } from "../atom";

export default function Footer() {
  const [isDark, setIsDark] = useRecoilState(darkModeState);

  return (
    <footer className={`footer ${isDark ? "dark" : "white"}`}>
      <button onClick={() => setIsDark((state) => !state)}>테마 변경</button>
    </footer>
  );
}
