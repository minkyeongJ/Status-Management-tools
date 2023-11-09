import React from "react";
import { useAtom } from "jotai";
import stateAtom from "../atom";

export default function Footer() {
  const [state, setState] = useAtom(stateAtom);

  return (
    <footer className={`footer ${state.isDark ? "dark" : "white"}`}>
      <button
        onClick={() => setState((prev) => ({ ...prev, isDark: !prev.isDark }))}
      >
        테마 변경
      </button>
    </footer>
  );
}
