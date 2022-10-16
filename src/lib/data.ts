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
      lun: "loen",
      jia: "dzja",
      zhao: "dzjau",
      hui: "hoeé",
      tian: "tièn",
      xiao: "sjau",
      wen: "wen",
      zhu: "dzjoe",
      ke: "ke",
      hao: "hau",
      liang: "ljang",
      hai: "haai",
      liu: "ljo",
      dong: "dong",
      yuan: "juèn",
    },
  },
};
