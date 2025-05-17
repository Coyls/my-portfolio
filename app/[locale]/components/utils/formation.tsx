import { Button } from "@/components/ui/button";
import Link from "next/link";
import type React from "react";

type FormationProps = React.PropsWithChildren<{
  isVisible?: boolean;
  title: string;
  subtitle: string;
  date: string;
  location: string;
  link?: string;
}>;

export const Formation: React.FC<FormationProps> = async ({
  isVisible = true,
  title,
  subtitle,
  date,
  location,
  link,
  children,
}) => {
  if (!isVisible) return null;

  return (
    <div className="flex flex-col gap-6 px-0 md:px-8">
      <div className="flex flex-col justify-between md:flex-row">
        <div>
          <h3>{title}</h3>
          {link ? (
            <Link href={link} target="_blank">
              <Button variant="link" className="p-0 text-base">
                <h4>{subtitle}</h4>
              </Button>
            </Link>
          ) : (
            <h4>{subtitle}</h4>
          )}
        </div>
        <div className="flex flex-col md:text-right">
          <h5>{date}</h5>
          <h5>{location}</h5>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Formation;
