import Link from "next/link";

export default function ContactCard(props) {
  return (
    <Link
      href={props.href}
      target="_blank"
      className="flex w-fit flex-row rounded-lg bg-zinc-100 px-4 py-1.5 text-sm font-medium text-zinc-900 transition hover:brightness-90"
    >
      {props.children}
    </Link>
  );
}
