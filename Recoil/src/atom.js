// atoms.js
import { atom } from "recoil";

export const darkModeState = atom({
  key: "darkModeState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
