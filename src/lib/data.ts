const wikipedia = "https://en.wikipedia.org/wiki";

type LocaleID = string;

export const locales: Record<
  LocaleID,
  {
    name: string;
    referenceURL: string;
    syllableToRespelling: Record<string, string>;
  }
> = {
  nl: {
    name: "Dutch (Nederlands)",
    referenceURL: wikipedia + "/Dutch_language",
    syllableToRespelling: {
      zhang: "dzjang",
      yi: "ie",
      lun: "loeën", // how to avoid the pronunciation omission of -n?
      jia: "dzjia", // dzja would not have enough /i/
      zhao: "dzjau",
      hui: "hoeé",
      tian: "tièn",
      xiao: "sjiau",
      wen: "wèn", // emphasize e variants for clarity
      zhu: "dzjoe",
      ke: "ke",
      hao: "hau",
      liang: "ljang",
      hai: "haai",
      liu: "ljo",
      dong: "dong",
      yuan: "uèn", // no need for the pseudo onset
    },
  },
};
