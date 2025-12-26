import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default function Layout({ children, modal }: LayoutProps) {
  return (
    <>
      <div id="modal-root" />
      {children}
      {modal}
    </>
  );
}
