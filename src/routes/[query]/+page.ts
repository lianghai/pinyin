import { error } from "@sveltejs/kit";
import { localeToData } from "$lib/data";

const locale = "nl";
const data = localeToData[locale];

export function load({ params: { query } }) {
  const syllables: string[] = [];
  for (const candidate of query.toLowerCase().split("-")) {
    if (candidate in data.syllableToRespelling) {
      syllables.push(candidate);
    } else {
      error(404, "Not Found");
    }
  }
  return {
    locale,
    data,
    syllables,
  };
}
