import { Button } from "@/components/ui/button";
import Link from "next/link";

export const GobelinsEn = () => {
  return (
    <>
      <p>
        A 3-year course, of which 2 in an internship at{" "}
        <Link href="https://prismo.io/" target="_blank">
          <Button variant="link" className="h-auto p-0 text-sm md:text-base">
            PRISMO
          </Button>
        </Link>
        , in a promo composed of{" "}
        <span className="font-bold">10 developers</span> and{" "}
        <span className="font-bold">10 designers</span>.
      </p>
      <p>
        Very project-oriented (about 50 to 60% of the time), the course has
        allowed us to create connected objects (
        <Link href="https://github.com/Coyls/karae" target="_blank">
          <Button variant="link" className="h-auto p-0 text-sm md:text-base">
            <span className="italic">Karae</span>
          </Button>
        </Link>
        ), interactive exhibitions (
        <Link href="https://wake-ashen.vercel.app/en" target="_blank">
          <Button variant="link" className="h-auto p-0 text-sm md:text-base">
            <span className="italic">Wake</span>
          </Button>
        </Link>
        ) or data-visualisation projects (
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
        Working daily with designers has allowed me to sharpen my eye on UX and
        the visual aspects of projects. This proximity has also helped me gain
        autonomy, take more initiatives and work better in a team.
      </p>
    </>
  );
};
