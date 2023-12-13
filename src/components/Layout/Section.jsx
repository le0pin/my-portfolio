export default function Section(props) {
  return (
    <section
      {...props}
      className={`relative flex w-full flex-col flex-wrap items-center justify-center ${props.className}`}
    >
      {props.children}
    </section>
  );
}
