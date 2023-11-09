import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import DarkModeStore from "../store";

const darkModeStore = new DarkModeStore();

export default function Page() {
  return (
    <div className="page">
      <Header darkModeStore={darkModeStore} />
      <Content darkModeStore={darkModeStore} />
      <Footer darkModeStore={darkModeStore} />
    </div>
  );
}
