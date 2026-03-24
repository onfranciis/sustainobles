import Image from "next/image";
import {
  useState,
  useEffect,
  useRef,
  CSSProperties,
  FC,
  MouseEvent,
} from "react";

/* -------------------------------------------------------------------------- */
/*                                      -                                     */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/*                                    TYPES                                   */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/*                                      -                                     */
/* -------------------------------------------------------------------------- */

type PhaseType = "idle" | "exit" | "enter";

interface HeroVariant {
  headline: string;
  image: string;
}

/* -------------------------------------------------------------------------- */
/*                                      -                                     */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/*                                  CONSTANTS                                 */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/*                                      -                                     */
/* -------------------------------------------------------------------------- */

const DURATION = 8_000;
const TRANSITION = 900;

const variants: HeroVariant[] = [
  {
    headline: "Together with Sustainobles, Every Child Thrives",
    image: "/homepage-hero.png",
  },
  {
    headline: "Advancing Sustainoble Goals, a Project at a Time",
    image: "/projects/back-to-school-project/image20.png",
  },
  {
    headline: "Sustainobles: Nuturing Dreams, One step at a Time",
    image: "/projects/charity-football-tournament/image7.png",
  },
];

/* -------------------------------------------------------------------------- */
/*                                      -                                     */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/*                               MAIN COMPONENT                               */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/*                                      -                                     */
/* -------------------------------------------------------------------------- */

const Hero: FC = () => {
  const [current, setCurrent] = useState<number>(0);
  const [, setNext] = useState<number | null>(null);
  const [phase, setPhase] = useState<PhaseType>("idle");
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTransition = (targetIdx: number): void => {
    if (phase !== "idle") return;
    setNext(targetIdx);
    setPhase("exit");
    setTimeout(() => {
      setCurrent(targetIdx);
      setNext(null);
      setPhase("enter");
      setTimeout(() => setPhase("idle"), TRANSITION);
    }, TRANSITION);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((c) => {
        const nextIdx = (c + 1) % variants.length;
        startTransition(nextIdx);
        return c;
      });
    }, DURATION);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const slide: HeroVariant = variants[current];

  const isExiting = phase === "exit";
  const isEntering = phase === "enter";

  const containerStyle: CSSProperties = {
    transition: `all 1s ease`,
  };

  const headlineStyle: CSSProperties = {
    opacity: isExiting ? 0 : 1,
    transform: isExiting ? "translateY(-16px)" : "translateY(0)",
    transition: `opacity ${TRANSITION * 0.6}ms ease, transform ${TRANSITION * 0.6}ms ease`,
  };

  return (
    <div
      style={containerStyle}
      className="w-full bg-primary-gradient min-h-[295px] overflow-hidden"
    >
      <div
        className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 flex max-md:flex-col max-md:pb-5 gap-9
        pt-5"
      >
        <p
          className="text-[40px] lg:text-[56px] xl:text-[60px] font-bold max-sm:leading-tight leading-snug"
          style={headlineStyle}
        >
          {slide.headline}
        </p>

        <div className="relative md:w-[55%] h-full flex-shrink-0 aspect-[694/400] ">
          <Image
            style={headlineStyle}
            className=""
            fill
            src={slide.image}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
