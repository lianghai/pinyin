import type { PageLoad } from "./$types";

export const load: PageLoad = function ({ params }) {
  return {
    syllables: params.query
      .split("-")
      .filter(Boolean)
      .map((i) => i.toLowerCase()),
  };
};
