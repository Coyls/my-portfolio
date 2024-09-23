"use client";

import { createI18nClient } from "next-international/client";

export const {
  I18nProviderClient,
  useChangeLocale,
  useCurrentLocale,
  useI18n,
} = createI18nClient({
  en: () => import("./en"),
  fr: () => import("./fr"),
});
