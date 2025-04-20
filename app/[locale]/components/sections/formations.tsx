import { Button } from "@/components/ui/button";
import { SiteConfig } from "@/config/site.config";
import { getCurrentLocale, getScopedI18n } from "@/locales/server";
import Link from "next/link";
import { GobelinsEn, GobelinsFr } from "../lang-components";
import { Section } from "../utils/section";

export const Formations: React.FC = async () => {
  const description = SiteConfig.formations.hasDescription;
  const t = await getScopedI18n("formations");
  const locale = await getCurrentLocale();

  return (
    <Section className="flex flex-col gap-8">
      <h2>formations.</h2>
      <div className="flex flex-col gap-6 px-0 md:px-8">
        <div className="flex flex-col justify-between md:flex-row">
          <div>
            <h3>{t("gobelins.title")}</h3>
            <h4>GOBELINS, L&apos;école de l&apos;image</h4>
          </div>
          <div className="flex flex-col md:text-right">
            <h5>2020 - 2023</h5>
            <h5>Annecy</h5>
          </div>
        </div>

        {description && (
          <article className="flex flex-col gap-4 text-sm md:text-base">
            {locale === "fr" ? <GobelinsFr /> : <GobelinsEn />}
          </article>
        )}
      </div>
      <div className="flex flex-col gap-6 px-0 md:px-8">
        <div className="flex flex-col justify-between md:flex-row">
          <div>
            <h3>{t("bootdev.title")}</h3>
            <Link href="https://boot.dev" target="_blank">
              <Button variant="link" className="p-0 text-base">
                <h4>Boot.dev</h4>
              </Button>
            </Link>
          </div>
          <div className="flex flex-col md:text-right">
            <h5>2025 - now</h5>
            <h5>Online</h5>
          </div>
        </div>
      </div>
    </Section>
  );
};
