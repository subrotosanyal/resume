"use client";

import { Row, Text } from "@once-ui-system/core";
import { useI18n } from "./I18nProvider";

export function LanguageSwitcher() {
  const { locale, setLocale, locales, localeLabels, t } = useI18n();

  return (
    <Row vertical="center" gap="8" s={{ hide: true }}>
      <Text variant="body-default-s" onBackground="neutral-weak">
        {t("nav.language", "Language")}
      </Text>
      <select
        value={locale}
        onChange={(e) => setLocale(e.target.value as (typeof locales)[number])}
        style={{
          background: "transparent",
          color: "inherit",
          border: "1px solid var(--neutral-alpha-medium)",
          borderRadius: "10px",
          padding: "0.2rem 0.5rem",
          fontSize: "0.85rem",
        }}
      >
        {locales.map((code) => (
          <option key={code} value={code}>
            {localeLabels[code]}
          </option>
        ))}
      </select>
    </Row>
  );
}
