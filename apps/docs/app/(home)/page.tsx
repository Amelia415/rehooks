import { GithubIcon, NpmIcon } from "@/components/icons";
import { Hero, Cards } from "@/components/internal";

const links = [
  {
    title: "Github",
    icon: <GithubIcon className="text-fd-foreground size-6 transform" />,
    link: "https://github.com/Pyr33x/rehooks",
  },
  {
    title: "NPM",
    icon: <NpmIcon className="text-fd-foreground size-6 transform" />,
    link: "https://www.npmjs.com/package/rehooks-cli",
  },
];

export default function HomePage() {
  return (
    <div className="h-full w-full">
      <main className="flex min-h-screen flex-col items-center justify-center px-8 py-14">
        <Hero />
        <Cards />
        <div className="mt-12 flex flex-row items-center justify-center gap-x-2">
          {links.map(({ title, link, icon }, index) => (
            <a
              key={index}
              rel="noopener noreferrer"
              href={link}
              title={title}
              target="_blank"
              aria-label="Find rehooks-ts"
              className="transform rounded-full border border-neutral-400 bg-neutral-100/80 p-4 duration-100 ease-in-out hover:scale-105 hover:bg-neutral-200 dark:border-neutral-900 dark:bg-neutral-950 dark:hover:border-neutral-800"
            >
              {icon}
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
