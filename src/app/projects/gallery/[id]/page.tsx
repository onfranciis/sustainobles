import Gallery from "@/components/projects/Gallery";
import { GallerySections } from "@/utils/Gallery";

const GalleryDefault = ({ params }: { params: { id: string } }) => {
  const Selected = GallerySections.find(
    (section) => section.slug === params.id
  );

  return Selected ? (
    <Gallery directory={Selected.slug} numberOfImages={Selected.number} />
  ) : (
    <div className=" min-h-screen flex flex-col justify-center items-center p-5 bg-white text-primary">
      <p className="text-5xl font-bold">404</p>
      <p className="text-3xl">Not Found</p>
    </div>
  );
};

export default GalleryDefault;
