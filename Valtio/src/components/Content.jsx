import React from "react";
import { useAtom } from "jotai";
import stateAtom from "../atom";

export default function Content() {
  const [state] = useAtom(stateAtom);

  return (
    <div className={`content ${state.isDark ? "dark" : "white"}`}>
      <p>이 사이트는 프론트엔드 테킷 수강생과 함께 공부하는 사이트입니다.</p>
    </div>
  );
}
