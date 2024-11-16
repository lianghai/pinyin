import { error } from "@sveltejs/kit";
import { syllableToRespelling } from "$lib/data";

export function load({ params: { query } }) {
  const syllables: string[] = [];
  for (const candidate of query.toLowerCase().split("-")) {
    if (candidate in syllableToRespelling) {
      syllables.push(candidate);
    } else {
      error(404, "Not Found");
    }
  }
  return {
    syllableToRespelling,
    syllables,
  };
}
