import { getScopedI18n } from "@/locales/server";
import Image from "next/image";
import { ButtonGithub } from "../socials/button-github";
import { ButtonGmail } from "../socials/button-gmail";
import { ButtonLinkedin } from "../socials/button-linkedin";
import { Section } from "../utils/section";

export const Hero: React.FC = async () => {
  const t = await getScopedI18n("hero");

  return (
    <Section className="flex flex-col-reverse items-center gap-4 md:flex-row md:gap-0">
      <div className="flex flex-[3] flex-col items-center md:items-start">
        <h1>Loïc Greco</h1>
        <div className="flex flex-col md:pl-8">
          <h3 className="text-center md:text-left">{t("subtitle")}</h3>
          {/* // ? Si envie d'ajouter ma localisation */}
          {/* <div className="flex flex-row gap-4">
            <MapPin size={18} />
            City, Country
          </div> */}
          <div className="flex flex-row justify-center gap-4 md:justify-start">
            <ButtonGithub />
            <ButtonLinkedin />
            <ButtonGmail />
          </div>
        </div>
      </div>
      <div className="flex-[1]">
        <div className="relative size-48 md:size-64">
          <Image
            fill
            src="/me.png"
            alt="Picture of Loïc Greco"
            className="rounded-full"
          />
        </div>
      </div>
    </Section>
  );
};
