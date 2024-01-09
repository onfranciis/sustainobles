export default function Layout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      <div id="modal-root" />
      {children}
      {modal}
    </>
  );
}
