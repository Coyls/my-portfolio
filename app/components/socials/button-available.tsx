import Link from "next/link";

export const ButtonAvailable: React.FC = () => {
  return (
    <Link href="mailto:loic.grecofr@gmail.com">
      <div>
        {/* className="border-green-700 border-[1px] px-2 rounded-sm border-foreground  border-opacity-50" */}
        <p>AVAILABLE FOR</p>
        <p className="font-bold">FREELANCE WORK</p>
      </div>
    </Link>
  );
};

export default ButtonAvailable;
