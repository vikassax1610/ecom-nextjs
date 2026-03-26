export default function Layout({ modal, children }) {
  return (
    <div>
      {children}
      {modal}
    </div>
  );
}
