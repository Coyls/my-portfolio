import Link from "next/link";

export const ButtonAvailable: React.FC = () => {
  return (
    <div>
      {/* className="border-green-700 border-[1px] px-2 rounded-sm border-foreground  border-opacity-50" */}
      <p>AVAILABLE FOR</p>
      <Link href="mailto:loic.grecofr@gmail.com">
        <p className=" hover:underline underline-offset-4 text-primary">
          FREELANCE WORK
        </p>
      </Link>
      {/* // ? Si juste Bold pas de couleur */}
      {/* <p className="font-bold hover:underline underline-offset-4">
          FREELANCE WORK
        </p> */}
    </div>
  );
};

export default ButtonAvailable;
