import { IModalProjectBottomProps } from "@/types";
import ModalProjectsBottom from "./ModalProjectsBottom";

const Gallery = ({ directory, numberOfImages }: IModalProjectBottomProps) => {
  return (
    <main className="bg-white px-[100px] py-[50px]">
      <ModalProjectsBottom
        directory={directory}
        numberOfImages={numberOfImages}
      />
    </main>
  );
};

export default Gallery;
