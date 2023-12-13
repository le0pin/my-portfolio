export default function Typography(props) {
  const types = {
    title: {
      tag: "h1",
      className: "text-xl sm:text-2xl font-medium leading-normal",
    },
    subtitle: { tag: "h2", className: "text-lg font-medium leading-normal" },
    paragraph: {
      tag: "p",
      className: "text-sm sm:text-base text-zinc-300 leading-normal",
    },
    text: { tag: "span", className: "text-sm text-zinc-300 leading-normal" },
  };

  const { tag: Tag, className } = types[props.type] || {
    tag: "span",
    className: "",
  };

  return <Tag className={className}>{props.children}</Tag>;
}
