import { getScopedI18n } from "@/locales/server";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { ButtonGithub, ButtonLinkedin, ButtonMail } from "../socials";
import { Section } from "../utils";
export const Hero: React.FC = async () => {
  const t = await getScopedI18n("hero");

  return (
    <Section className="flex flex-col-reverse items-center gap-4 md:flex-row md:gap-12">
      <div className="flex flex-3 flex-col items-center gap-6 md:items-start">
        <h1>Loïc Greco</h1>
        <div className="flex flex-col gap-4 md:pl-8">
          <span>
            <h3 className="text-center md:text-left">{t("subtitle")}</h3>
            <h3 className="text-center md:text-left">{t("subtitle2")}</h3>
          </span>
          {/* ?? Localisation */}
          <div className="m-auto flex flex-row gap-2 md:m-0">
            <MapPin size={18} />
            Annecy, France
          </div>
          <div className="flex flex-row justify-center gap-4 md:justify-start">
            <ButtonGithub />
            <ButtonLinkedin />
            <ButtonMail />
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="relative size-48 md:size-64">
          <Image
            className="rounded-lg"
            fill
            src="/me.png"
            alt="Picture of Loïc Greco"
            sizes="(max-width: 768px) 80vw, 40vw"
            priority
          />
        </div>
      </div>
    </Section>
  );
};
