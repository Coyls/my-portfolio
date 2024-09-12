import { Section } from "./section";

export const Stack: React.FC = () => {
  return (
    <Section className="flex flex-col gap-4">
      <h2 className="text-6xl font-caption">stack.</h2>
      <div className="flex flex-row justify-center">
        <div className="flex flex-col gap-4">
          <h3 className="text-3xl font-caption">language</h3>
          <ul className="list-disc list-inside">
            <li>React</li>
            <li>Next.js</li>
            <li>TailwindCSS</li>
          </ul>
        </div>
        <div className="h-full w-[1px] border-accent"></div>
        <div className="flex flex-col gap-4">
          <h3 className="text-3xl font-caption">front-end</h3>
          <ul className="list-disc list-inside">
            <li>React</li>
            <li>Next.js</li>
            <li>TailwindCSS</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-3xl font-caption">back-end</h3>
          <ul className="list-disc list-inside">
            <li>Node.js</li>
            <li>Express</li>
            <li>PostgreSQL</li>
            <li>Prisma</li>
          </ul>
        </div>
      </div>
    </Section>
  );
};
