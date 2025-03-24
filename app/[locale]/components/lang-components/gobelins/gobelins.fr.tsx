import { Button } from "@/components/ui/button";
import Link from "next/link";

export const GobelinsFr = () => {
  return (
    <>
      <p>
        Une formation de 3 ans, dont 2 en alternance chez{" "}
        <Link href="https://prismo.io/" target="_blank">
          <Button variant="link" className="h-auto p-0 text-sm md:text-base">
            PRISMO
          </Button>
        </Link>
        , dans une promo composée de{" "}
        <span className="font-bold">10 développeurs</span> et{" "}
        <span className="font-bold">10 designers</span>.
      </p>
      <p>
        Très axée <span className="font-bold">projet</span> (environ 50 à 60 %
        du temps), la formation nous a permis de réaliser des objets connectés (
        <Link href="https://github.com/Coyls/karae" target="_blank">
          <Button variant="link" className="h-auto p-0 text-sm md:text-base">
            <span className="italic">Karae</span>
          </Button>
        </Link>
        ), des expositions interactives (
        <Link href="https://wake-ashen.vercel.app/fr" target="_blank">
          <Button variant="link" className="h-auto p-0 text-sm md:text-base">
            <span className="italic">Wake</span>
          </Button>
        </Link>
        ) ou encore des projets de data-visualisation (
        <Link
          href="https://github.com/Coyls/ktk-dataviz-backend"
          target="_blank"
        >
          <Button variant="link" className="h-auto p-0 text-sm md:text-base">
            <span className="italic">KTK</span>
          </Button>
        </Link>
        ,{" "}
        <Link href="https://workshop-dataviz.vercel.app/" target="_blank">
          <Button variant="link" className="h-auto p-0 text-sm md:text-base">
            <span className="italic">Siah</span>
          </Button>
        </Link>
        ).
      </p>
      <p>
        Travailler au quotidien avec des designers m’a permis d’affûter mon
        regard sur l’UX et les aspects visuels des projets. Cette proximité m’a
        aussi aidé à gagner en autonomie, à prendre plus d’initiatives et à
        mieux collaborer en équipe.
      </p>
    </>
  );
};
