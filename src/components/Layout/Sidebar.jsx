export default function Sidebar(props) {
  return (
    <aside
      {...props}
      className={`flex h-full w-full max-w-[98px] flex-col justify-start ${props.className}`}
    >
      {props.children}
    </aside>
  );
}
