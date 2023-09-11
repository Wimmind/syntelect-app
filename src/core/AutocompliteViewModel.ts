import { makeAutoObservable } from "mobx";

import { getCountryByName } from "../api/apiService";

import { Country } from "../api/models/Country";

interface IAutocompliteViewModel {
  suggestions: Country[];
  isFetching: boolean;
}

export class AutocompliteViewModel {
  suggestions: IAutocompliteViewModel["suggestions"];
  isFetching: IAutocompliteViewModel["isFetching"];

  constructor() {
    this.suggestions = [];
    this.isFetching = false;

    makeAutoObservable(this);
  }

  async fetchSuggestions(text: string) {
    this.setIsFetching(true);
    const suggestions = await getCountryByName(text);
    this.setSuggestions(suggestions);
    this.setIsFetching(false);
  }

  setSuggestions = (suggestions: Country[]) => {
    this.suggestions = suggestions;
  };

  setIsFetching = (value: boolean) => {
    this.isFetching = value;
  };
}
