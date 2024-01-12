import { IModalProjectBottomProps } from "@/types";
import { getAlphabet, getAlphabetLG, getAlphabetMD } from "@/utils/Grid";

const ModalProjectsBottom = ({
  directory,
  numberOfImages = 0,
}: IModalProjectBottomProps) => {
  return (
    <div className="w-full gallery-grid gap-5 -md:gap-2">
      {Array.from({ length: numberOfImages }).map((_, i) => (
        <div
          style={{
            backgroundImage: `url("/projects/${directory}/image${i + 1}.png")`,
          }}
          className={`h-[400px] w-full block text-white rounded-xl 
          gallery-grid-item-small
          gallery-grid-item-${getAlphabet(i + 1)} 
          gallery-grid-item-large-${getAlphabetLG(i + 1)}
          gallery-grid-item-medium-${getAlphabetMD(i + 1)} 
          bg-no-repeat bg-center bg-cover gallery-image`}
          key={i}
        ></div>
      ))}
    </div>
  );
};

export default ModalProjectsBottom;
