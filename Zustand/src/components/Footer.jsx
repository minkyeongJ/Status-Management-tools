import React from "react";
import useStore from "../store";

export default function Footer() {
  const { isDark, setIsDark } = useStore((state) => state);

  return (
    <footer className={`footer ${isDark ? "dark" : "white"}`}>
      <button onClick={() => setIsDark((state) => !state)}>테마 변경</button>
    </footer>
  );
}
