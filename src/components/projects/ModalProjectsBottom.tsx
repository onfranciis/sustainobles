import { IModalProjectBottomProps } from "@/types";

const ModalProjectsBottom = ({
  directory,
  numberOfImages = 0,
}: IModalProjectBottomProps) => {
  const getAlphabet = (index: number) => {
    if (index % 7 === 1) {
      return "a";
    } else if (index % 7 === 2) {
      return "b";
    } else if (index % 7 === 3) {
      return "c";
    } else if (index % 7 === 4) {
      return "d";
    } else if (index % 7 === 5) {
      return "e";
    } else if (index % 7 === 6) {
      return "f";
    } else if (index % 7 === 0) {
      return "g";
    } else {
      return "a";
    }
  };

  return (
    <div className="w-full gallery-grid">
      {Array.from({ length: numberOfImages }).map((_, i) => (
        <div
          style={{
            backgroundImage: `url("/projects/${directory}/image${i + 1}.png")`,
          }}
          className={`h-[400px] w-full block gallery-grid-item-${getAlphabet(
            i + 1
          )} text-white rounded-xl bg-no-repeat bg-center bg-cover gallery-image`}
          key={i}
        ></div>
      ))}
    </div>
  );
};

export default ModalProjectsBottom;
