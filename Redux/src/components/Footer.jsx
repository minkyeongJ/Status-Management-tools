import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsDark } from "../app/store";

export default function Footer() {
  const darkModeState = useSelector((state) => state.darkModeState);
  const dispatch = useDispatch();
  return (
    <footer className={`footer ${darkModeState ? "dark" : "white"}`}>
      <button onClick={() => dispatch(setIsDark())}>테마 변경</button>
    </footer>
  );
}
