"use client";

import { I18nProviderClient } from "@/locales/client";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "./components/utils/theme.provider";

export const Providers = (
  props: React.PropsWithChildren<{ locale: string }>,
) => {
  const { children, locale } = props;
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <I18nProviderClient locale={locale}>
        {children}
        <Analytics />
      </I18nProviderClient>
    </ThemeProvider>
  );
};
