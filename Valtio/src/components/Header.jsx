import React from "react";
import { useAtom } from "jotai";
import stateAtom from "../atom";

export default function Header() {
  const [state] = useAtom(stateAtom);

  return (
    <header className={`header ${state.isDark ? "dark" : "white"}`}>
      <h1>Welcome! 프론트엔드 테킷 수강생</h1>
    </header>
  );
}
