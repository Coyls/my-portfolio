import { getScopedI18n } from "@/locales/server";
import { SiteConfig } from "@/site-config";
import Link from "next/link";

export const ButtonAvailable: React.FC = async () => {
  const t = await getScopedI18n("header");

  if (!SiteConfig.disponibility) {
    return null;
  }

  return (
    <div>
      <p>{t("available")}</p>
      <Link href={`mailto:${SiteConfig.contactEmail}`}>
        <p className="text-primary underline-offset-4 hover:underline">
          FREELANCE WORK
        </p>
      </Link>
    </div>
  );
};
