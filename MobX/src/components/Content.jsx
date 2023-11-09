import React from "react";
import { observer } from "mobx-react";

const Content = observer(({ darkModeStore }) => {
  return (
    <div className={`content ${darkModeStore.isDark ? "dark" : "white"}`}>
      <p>이 사이트는 프론트엔드 테킷 수강생과 함께 공부하는 사이트입니다.</p>
    </div>
  );
});

export default Content;
