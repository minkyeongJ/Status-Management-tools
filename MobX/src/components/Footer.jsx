import React from "react";
import { observer } from "mobx-react";

const Footer = observer(({ darkModeStore }) => {
  return (
    <footer className={`footer ${darkModeStore.isDark ? "dark" : "white"}`}>
      <button onClick={() => darkModeStore.setIsDark()}>테마 변경</button>
    </footer>
  );
});

export default Footer;
