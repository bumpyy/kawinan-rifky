import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { MEMPELAI_PRIA, MEMPELAI_WANITA } from "../lib/constants";

export default function Preload({
  openHandler,
}: {
  openHandler: Dispatch<SetStateAction<boolean>>;
}) {
  const [isAnimating, setIsAnimating] = useState(false);
  const guestName = useRef<string | null>("");
  useEffect(() => {
    const sp = new URLSearchParams(window.location.search);
    guestName.current = sp.get("guest"); // world
    console.log();

    return () => {};
  }, []);

  return (
    <div
      onAnimationEnd={() => {
        openHandler(true);
      }}
      className={`
      ${isAnimating ? "animate-slide-up" : ""}
      flex text-center h-full fixed flex-col max-lg:gap-4 justify-center items-center w-full bg-secondary`}
    >
      <div>
        <h1 className="text-3xl">The Wedding Of</h1>
        <h2 className="text text-9xl font-semibold">
          {MEMPELAI_PRIA} & {MEMPELAI_WANITA}
        </h2>
      </div>
      <img
        className="w-full lg:-my-8 -z-10"
        src="assets/images/header-bg.jpg"
        alt=""
        draggable="false"
      />
      <div className="flex flex-col max-lg:gap-4 items-center">
        <p className="text-6xl font-semibold">dear</p>
        <p className="text-8xl font-semibold">
          {guestName.current ? guestName.current : "Guest"}
        </p>
        <p className="">you are cordially invited to our wedding</p>
        <div className="mt-4 lg:max-w-72 cursor-pointer max-w-48 md:max-w-56">
          <img
            onClick={() => {
              setIsAnimating(true);
            }}
            src="assets/images/open-invitation.png"
            alt="open invitation"
            draggable="false"
          />
        </div>
      </div>
    </div>
  );
}
