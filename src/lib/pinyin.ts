export const initials = [
  "",
  "b",
  "p",
  "m",
  "f",
  "d",
  "t",
  "n",
  "l",
  "g",
  "k",
  "h",
  "j",
  "q",
  "x",
  "zh",
  "ch",
  "sh",
  "r",
  "z",
  "c",
  "s",
];

export const finalToInitialToAlt: Record<
  string,
  Record<string, string> | ((initial: string) => string)
> = {
  "": {
    "": "er",
    zh: "i",
    ch: "i",
    sh: "i",
    r: "i",
    z: "i",
    c: "i",
    s: "i",
  },
  a: {},
  e: {},
  ai: {},
  ei: {},
  ao: {},
  ou: {},
  an: {},
  en: {},
  ang: {},
  eng: {},

  i: {
    "": "yi",
  },
  ia: {
    "": "ya",
  },
  ie: {
    "": "ye",
  },
  iao: {
    "": "yao",
  },
  iu: {
    "": "you",
  },
  ian: {
    "": "yan",
  },
  in: {
    "": "yin",
  },
  iang: {
    "": "yang",
  },
  ing: {
    "": "ying",
  },

  u: {
    "": "wu",
  },
  ua: {
    "": "wa",
  },
  uo: {
    "": "wo",
  },
  uai: {
    "": "wai",
  },
  ui: {
    "": "wei",
  },
  uan: {
    "": "wan",
  },
  un: {
    "": "wen",
  },
  uang: {
    "": "wang",
  },
  ong: {
    "": "weng",
  },

  ü: {
    "": "yu",
  },
  üe: {
    "": "yue",
  },
  üan: {
    "": "yuan",
  },
  ün: {
    "": "yun",
  },
  iong: {
    "": "yong",
  },
};

export function* iterSyllables(): Generator<string> {
  for (const initial of initials) {
    for (const [final, initialToAlt] of Object.entries(finalToInitialToAlt)) {
      if (typeof initialToAlt == "function") {
        yield initial + initialToAlt(final);
      } else {
        yield initial + (initialToAlt[initial] ?? final);
      }
    }
  }
}
