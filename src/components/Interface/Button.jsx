import Link from "next/link";

export default function Button(props) {
  return (
    <Link
      {...props}
      href={props.href}
      className={`${
        props.variant === "filled"
          ? "font flex w-fit flex-row items-center justify-center rounded-lg bg-zinc-50 px-4 py-1.5 text-sm text-zinc-800 shadow-lg shadow-white/20 transition hover:bg-zinc-50/90 sm:text-base"
          : props.variant === "outlined"
            ? "flex w-fit flex-row items-center justify-center rounded-lg border border-zinc-600 bg-inherit px-4 py-1.5 text-sm font-medium text-zinc-300 transition hover:bg-zinc-50/5 sm:text-base"
            : props.variant === "ghost"
              ? "flex w-fit flex-row items-center justify-center rounded-lg bg-inherit px-4 py-1.5 text-sm font-medium text-zinc-300 decoration-zinc-500 transition duration-300 hover:bg-zinc-900/80 sm:text-base"
              : ""
      }`}
      {...props}
    >
      {props.children}
    </Link>
  );
}
