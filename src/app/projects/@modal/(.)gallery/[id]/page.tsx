"use client";

import ModalProjects from "@/components/projects/ModalProjects";
import { GallerySections } from "@/utils/Gallery";
import { createPortal } from "react-dom";

const GalleryPage = ({ params }: { params: { id: string } }) => {
  const Selected = GallerySections.find(
    (section) => section.slug === params.id
  );

  return Selected
    ? createPortal(
        <ModalProjects
          directory={Selected.slug}
          numberOfImages={Selected.number}
        />,
        document.getElementById("modal-root")!
      )
    : null;
};

export default GalleryPage;
