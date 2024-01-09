import Gallery from "@/components/projects/Gallery";
import { GallerySections } from "@/utils/Gallery";

const GalleryDefault = ({ params }: { params: { id: string } }) => {
  const Selected = GallerySections.find(
    (section) => section.slug === params.id
  ) || { slug: "not-found", number: 0 };

  return <Gallery directory={Selected.slug} numberOfImages={Selected.number} />;
};

export default GalleryDefault;
