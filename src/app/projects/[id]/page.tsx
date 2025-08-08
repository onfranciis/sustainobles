import Image from "next/image"
import { notFound } from "next/navigation";
import { IProjectCardProp } from "@/types";
import { DATA } from "@/lib/projects";
import { GallerySections } from "@/utils/Gallery";

interface ProjectPageProps {
  params: { id: string };
}

const Project = ({ params }: ProjectPageProps) => {
  const { id } = params;

  const project = DATA.find((project: IProjectCardProp) => project.id === id);

  const Selected = GallerySections.find(
    (section) => section.slug === id
  );

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-10 xl:px-20 py-12 text-xl text-[#1e1e1e]">
      <h1 className="mb-6 text-[32px] font-semibold text-center">{project?.title}</h1>
      <div className="space-y-3.5">
        <p>{project?.body}</p>
      </div>

      <section className="mt-10">
        <h2 className="mb-6 text-[32px] font-semibold text-center">Pictures</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {Array.from({ length: Selected?.number ?? 0 }).map((_, i) => {
            return (
              <div key={i} className="relative w-full aspect-[400/267]">
                <Image className="object-cover w-full h-full aspect-[400/267]" fill src={`/projects/${Selected?.slug}/image${i + 1}.png`} alt="" />
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Project