import React, { FC } from "react";
import { observer } from "mobx-react-lite";

import { Button } from "../button";
import { ControlProps } from "./types";

export const Control: FC<ControlProps> = observer(({ viewModel }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    viewModel.setValue(value);
  };
  return (
    <div className="flex gap-x-4 items-start">
      <div className="flex flex-col gap-y-2 w-64">
        {viewModel.leftButtons.map((item, key) => (
          <Button key={key} viewModel={item} />
        ))}
      </div>
      <input
        type="text"
        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
        value={viewModel.value}
        onChange={handleChange}
      />
      <div className="flex flex-col gap-y-2 w-64">
        {viewModel.rightButtons.map((item, key) => (
          <Button key={key} viewModel={item} />
        ))}
      </div>
    </div>
  );
});
