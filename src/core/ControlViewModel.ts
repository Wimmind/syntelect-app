import { makeAutoObservable } from "mobx";

import { IButtonViewModel, ButtonViewModel } from "./ButtonViewModel";
import { ControlModel } from "./models/ControlModel";

interface IControlViewModel {
  controlModel: ControlModel;
  leftButtons: ButtonViewModel[];
  rightButtons: ButtonViewModel[];
}

export class ControlViewModel {
  private _controlModel: IControlViewModel["controlModel"];
  leftButtons: IControlViewModel["leftButtons"];
  rightButtons: IControlViewModel["rightButtons"];

  constructor(
    leftButtons: IButtonViewModel[],
    rightButtons: IButtonViewModel[]
  ) {
    this._controlModel = new ControlModel();

    this.leftButtons = leftButtons.map(
      ({ title, callback }) => new ButtonViewModel(title, callback)
    );

    this.rightButtons = rightButtons.map(
      ({ title, callback }) => new ButtonViewModel(title, callback)
    );

    makeAutoObservable(this);
  }

  get value() {
    return this._controlModel.value;
  }

  setValue = (value: string) => {
    this._controlModel.setValue(value);
  };
}
