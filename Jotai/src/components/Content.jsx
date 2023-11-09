import React from "react";
import darkModeAtom from "../atom";
import { useAtom } from "jotai";

export default function Content() {
  const [isDark] = useAtom(darkModeAtom);

  return (
    <div className={`content ${isDark ? "dark" : "white"}`}>
      <p>이 사이트는 프론트엔드 테킷 수강생과 함께 공부하는 사이트입니다.</p>
    </div>
  );
}
