export default function Container(props) {
  return (
    <div
      {...props}
      className={`flex w-full max-w-screen-md flex-col flex-wrap px-5 ${props.className}`}
    >
      {props.children}
    </div>
  );
}
