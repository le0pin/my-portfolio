export default function Badge(props) {
  return (
    <button className="flex flex-row items-center justify-center rounded-full bg-zinc-800 px-2 py-1 text-xs text-zinc-300">
      {props.children}
    </button>
  );
}
