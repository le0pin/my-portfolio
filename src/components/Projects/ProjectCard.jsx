import Image from "next/image";
import Link from "next/link";
import Typography from "../Interface/Typography";
import Badge from "../Interface/Badge";

export default function ProjectCard(props) {
  return (
    <Link
      href={props.href}
      target="_blank"
      className="group relative flex min-h-[180px] flex-col gap-2 overflow-hidden rounded-lg border border-zinc-800/80 bg-zinc-900/40 p-6 transition hover:brightness-90"
    >
      <div className="flex w-full flex-col gap-4 sm:max-w-[50%]">
        <div className="flex flex-row flex-wrap justify-between gap-1">
          <Typography type="subtitle">{props.title}</Typography>
          <Badge>{props.badge}</Badge>
        </div>
        <Typography type="text">{props.body}</Typography>
      </div>
      <Image
        src={props.image}
        width={300}
        height={300}
        alt="Card Image"
        className="-right-10 top-8 block rounded-lg border border-zinc-700/80 transition duration-300 group-hover:-rotate-2 group-hover:scale-[1.03] sm:absolute"
      />
    </Link>
  );
}
