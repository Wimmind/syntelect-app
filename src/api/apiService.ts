import countries from "./countries.json";
import { getRandom } from "../tools";
import { Country } from "./models/Country";

export const getCountryByName = (countryName: string): Promise<Country[]> => {
  return new Promise((resolve) => {
    setTimeout(resolve, getRandom(100, 800));
  }).then(() => {
    if (typeof countryName !== "string" || !countryName) {
      return [];
    }

    const searchText = countryName.toLocaleLowerCase();

    return countries.filter(
      (x) =>
        x.name.toLocaleLowerCase().startsWith(searchText) ||
        x.fullName.toLocaleLowerCase().startsWith(searchText)
    );
  });
};
