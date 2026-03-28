export default function WorldWonderLayout({ children, modal }) {
  return (
    <div className="">
      {modal}
      {children}
    </div>
  );
}
