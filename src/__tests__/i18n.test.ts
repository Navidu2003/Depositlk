import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { translations, Language } from "../lib/translations";
import { LanguageProvider } from "../context/LanguageContext";
import LanguageToggle from "../components/LanguageToggle";
import HomePage from "../app/page";

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

  it("updates the visible home page copy when the language switcher changes language", () => {
    render(
      React.createElement(
        LanguageProvider,
        null,
        React.createElement(LanguageToggle),
        React.createElement(HomePage),
      ),
    );

    expect(screen.getByText("Find the right deposit account. Compare every bank fairly.")).toBeTruthy();

    fireEvent.click(screen.getByRole("button", { name: "Sinhala" }));

    expect(screen.getByText("ඔබට ගැළපෙන තැන්පතු ගිණුම සොයා ගන්න. සියලුම බැංකු සාධාරණව සසඳන්න.")).toBeTruthy();
  });
});