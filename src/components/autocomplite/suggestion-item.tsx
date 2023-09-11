import { FC } from "react";

import { SuggestionItemProps } from "./types";

export const SuggestionItem: FC<SuggestionItemProps> = ({ title, imgSrc }) => {
  return (
    <div className="flex justify-between px-4 py-2 hover:bg-blue-500 hover:text-white">
      <span>{title}</span>
      <div>
        <img alt={title} src={imgSrc} className="w-10 h-8 rounded-lg" />
      </div>
    </div>
  );
};
