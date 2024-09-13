import { getScopedI18n } from "@/locales/server";
import Link from "next/link";

export const ButtonAvailable: React.FC = async () => {

  const t = await getScopedI18n("header");

  return (
    <div>
      <p>{t("available")}</p>
      <Link href="mailto:loic.grecofr@gmail.com">
        <p className="text-primary underline-offset-4 hover:underline">
          FREELANCE WORK
        </p>
      </Link>
    </div>
  );
};
