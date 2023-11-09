import React from "react";
import darkModeAtom from "../atom";
import { useAtom } from "jotai";

export default function Footer() {
  const [isDark, setIsDark] = useAtom(darkModeAtom);

  return (
    <footer className={`footer ${isDark ? "dark" : "white"}`}>
      <button onClick={() => setIsDark((state) => !state)}>테마 변경</button>
    </footer>
  );
}
