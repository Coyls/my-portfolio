import { SiteConfig } from "@/config/site.config";
import { getScopedI18n } from "@/locales/server";
import Link from "next/link";

export const ButtonAvailable: React.FC = async () => {
  const t = await getScopedI18n("header");

  if (!SiteConfig.disponibility.isAvailable) {
    return null;
  }

  return (
    <div>
      <p>{t("available")}</p>
      <Link href={`mailto:${SiteConfig.contactEmail}`}>
        <p className="text-primary underline-offset-4 hover:underline">
          {SiteConfig.disponibility.message}
        </p>
      </Link>
    </div>
  );
};
