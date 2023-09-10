import { FC } from "react";
import { observer } from "mobx-react-lite";

import { ButtonProps } from "./types";

export const Button: FC<ButtonProps> = observer(({ viewModel }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={viewModel.handleClick}
    >
      {viewModel.title}
    </button>
  );
});
