import { makeAutoObservable } from "mobx";

export class ControlModel {
  value: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  setValue = (value: string) => {
    this.value = value;
  };
}
