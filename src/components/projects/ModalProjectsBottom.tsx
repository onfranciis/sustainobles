import { IModalProjectBottomProps } from "@/types";
import { getAlphabet, getAlphabetLG, getAlphabetMD } from "@/utils/Grid";

const ModalProjectsBottom = ({
  directory,
  numberOfImages = 0,
}: IModalProjectBottomProps) => {
  return (
    <div className="w-full gallery-grid">
      {Array.from({ length: numberOfImages }).map((_, i) => (
        <div
          style={{
            backgroundImage: `url("/projects/${directory}/image${i + 1}.png")`,
          }}
          className={`h-[400px] w-full block 
          gallery-grid-item-small
          gallery-grid-item-${getAlphabet(i + 1)} 
          gallery-grid-item-large-${getAlphabetLG(i + 1)}
          gallery-grid-item-medium-${getAlphabetMD(i + 1)}
           text-white rounded-xl bg-no-repeat bg-center bg-cover gallery-image`}
          key={i}
        ></div>
      ))}
    </div>
  );
};

export default ModalProjectsBottom;
