import React, { FC, useState } from "react";
import { observer } from "mobx-react-lite";

import { SuggestionItem } from "./suggestion-item";
import { AutocompliteProps } from "./types";

export const AutoComplite: FC<AutocompliteProps> = observer(
  ({ viewModel, maxSuggestionCount }) => {
    const [value, setValue] = useState("");
    const [isShowHint, setIsShowHint] = useState(false);

    const handleClickSuggestion = (value: string) => {
      setValue(value);
      setIsShowHint(false);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setValue(value);
      viewModel.fetchSuggestions(value);
    };

    return (
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={handleChange}
          onFocus={() => setIsShowHint(true)}
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 w-1/2"
        />
        {viewModel.isFetching && <span className="ml-3 text-md">Fetching</span>}
        {isShowHint && !!viewModel.suggestions.length && (
          <div className="absolute left-0 right-0 mt-2 bg-white border border-gray-300 rounded-md shadow-sm overflow-hidden z-10">
            <ul>
              {viewModel.suggestions
                .slice(0, maxSuggestionCount)
                .map(({ flag, name, fullName }, key) => (
                  <li
                    key={key}
                    onClick={() => handleClickSuggestion(fullName)}
                    className="cursor-pointer"
                  >
                    <SuggestionItem
                      title={`${name}, ${fullName}`}
                      imgSrc={flag}
                    />
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
);
