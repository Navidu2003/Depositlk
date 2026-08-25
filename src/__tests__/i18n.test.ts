import { describe, it, expect } from "vitest";
import { translations, Language } from "../lib/translations";

describe("Trilingual Localization Dictionaries", () => {
  const languages: Language[] = ["en", "si", "ta"];

  it("contains all language keys and structures", () => {
    languages.forEach((lang) => {
      const dict = translations[lang];
      expect(dict).toBeDefined();
      expect(dict.nav.home).toBeTruthy();
      expect(dict.hero.title).toBeTruthy();
      expect(dict.calculator.title).toBeTruthy();
      expect(dict.common.fd).toBeTruthy();
    });
  });

  it("provides accurate Sinhala terms for deposit types", () => {
    expect(translations.si.common.fd).toBe("ස්ථාවර තැන්පතු");
    expect(translations.si.common.rd).toBe("පුනරාවර්තී තැන්පතු");
    expect(translations.si.common.savings).toBe("ඉතුරුම් ගිණුම");
  });

  it("provides accurate Tamil terms for deposit types", () => {
    expect(translations.ta.common.fd).toBe("நிலையான வைப்பு");
    expect(translations.ta.common.rd).toBe("தொடர் வைப்பு");
    expect(translations.ta.common.savings).toBe("சேமிப்புக் கணக்கு");
  });
});