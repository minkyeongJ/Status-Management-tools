import { makeAutoObservable } from "mobx";

class DarkModeStore {
  isDark = false;
  constructor() {
    makeAutoObservable(this);
  }
  setIsDark() {
    this.isDark = !this.isDark;
  }
}

export default DarkModeStore;
