import { makeAutoObservable } from "mobx";

export interface IButtonViewModel {
  title: string;
  callback: () => void;
}

export class ButtonViewModel {
  title: IButtonViewModel["title"];
  callback: IButtonViewModel["callback"];

  constructor(
    title: IButtonViewModel["title"],
    callback: IButtonViewModel["callback"]
  ) {
    this.title = title;
    this.callback = callback;

    makeAutoObservable(this);
  }

  handleClick = () => this.callback();
}
