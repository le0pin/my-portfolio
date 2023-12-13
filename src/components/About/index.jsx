import Link from "next/link";
import { socialLinks } from "@/utils/data";
import Typography from "../Interface/Typography";
import Button from "../Interface/Button";

export default function About() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-4">
        <Typography type="title">
          Hi There 👋, I&apos;m Leonardo - Front-End Web Developer Student. I
          love *try* to create good experiences with my work.
        </Typography>
        <Typography type="paragraph">
          A few months ago, I stumbled upon the world of programming and it
          instantly resonated with me after doing some research. Nowadays, I
          spend most of my time delving into web development, design, sales and
          business organization. My goal is always to keep progressing, no
          matter the challenges that come my way.
        </Typography>
      </div>
      <div className="flex flex-row flex-wrap justify-between gap-4">
        <div className="flex w-full flex-row items-center justify-center gap-4 sm:justify-start">
          <Button href="#contact" variant="filled">
            Hire me
          </Button>
          <Button href="#contact" variant="outlined">
            Contact me
          </Button>
        </div>
        <div className="flex w-full flex-row items-center justify-center gap-2 rounded-xl border border-zinc-800/80 bg-zinc-900/40 px-4 py-1 text-sm sm:w-fit">
          <Typography type="text">Social:</Typography>
          <ul className="flex flex-row flex-wrap items-center">
            {socialLinks.map((links) => (
              <li key={links.id}>
                <Link
                  href={links.url}
                  target="_blank"
                  className="flex rounded-full p-2 text-zinc-400 transition hover:bg-zinc-900 hover:text-zinc-200"
                >
                  {links.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
