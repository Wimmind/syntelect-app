import { AutocompliteViewModel } from "../../core";

export interface AutocompliteProps {
  viewModel: AutocompliteViewModel;
  maxSuggestionCount: number;
}

export interface SuggestionItemProps {
  title: string;
  imgSrc: string;
}
