import React from "react";
import { observer } from "mobx-react";

const Header = observer(({ darkModeStore }) => {
  return (
    <header className={`header ${darkModeStore.isDark ? "dark" : "white"}`}>
      <h1>Welcome! 프론트엔드 테킷 수강생</h1>
    </header>
  );
});
export default Header;
