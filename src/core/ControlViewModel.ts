import { makeAutoObservable } from "mobx";

import { IButtonViewModel, ButtonViewModel } from "./ButtonViewModel";

interface IControlViewModel {
  value: string;
  leftButtons: ButtonViewModel[];
  rightButtons: ButtonViewModel[];
}

export class ControlViewModel {
  value: IControlViewModel["value"];
  leftButtons: IControlViewModel["leftButtons"];
  rightButtons: IControlViewModel["rightButtons"];

  constructor(
    leftButtons: IButtonViewModel[],
    rightButtons: IButtonViewModel[]
  ) {
    this.value = "";

    this.leftButtons = leftButtons.map(
      ({ title, callback }) => new ButtonViewModel(title, callback)
    );

    this.rightButtons = rightButtons.map(
      ({ title, callback }) => new ButtonViewModel(title, callback)
    );

    makeAutoObservable(this);
  }

  setValue = (value: string) => {
    this.value = value;
  };
}
