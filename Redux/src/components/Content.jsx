import React from "react";
import { useSelector } from "react-redux";

export default function Content({ isDark }) {
  const darkModeState = useSelector((state) => state.darkModeState);
  return (
    <div className={`content ${darkModeState ? "dark" : "white"}`}>
      <p>이 사이트는 프론트엔드 테킷 수강생과 함께 공부하는 사이트입니다.</p>
    </div>
  );
}
