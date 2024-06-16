import { Dispatch, SetStateAction, useState } from "react";
import { MEMPELAI_PRIA, MEMPELAI_WANITA } from "../lib/constants";

export default function Preload({
  openHandler,
}: {
  openHandler: Dispatch<SetStateAction<boolean>>;
}) {
  const [isAnimating, setIsAnimating] = useState(false);
  const sp = new URLSearchParams(window.location.search);
  const guestName = sp.get("guest"); // world

  return (
    <div
      onAnimationEnd={(e) => {
        console.log(e);
        if (e.animationName === "slide-up") {
          openHandler(true);
        }
      }}
      className={`
      ${isAnimating ? "animate-once animate-slide-up" : ""}
      flex text-center h-full justify-around fixed flex-col max-lg:gap-4  items-center w-full bg-secondary`}
    >
      <div>
        <h1 className="text-3xl animate-once animate-fade-down">
          The Wedding Of
        </h1>
        <h2 className="font-semibold lowercase text text-9xl animate-fade-down animate-once animate-delay-200">
          {MEMPELAI_PRIA} & {MEMPELAI_WANITA}
        </h2>
      </div>
      <div className="w-full -mt-36 -z-10 ">
        <img
          className="w-full opacity-0 animate-fade animate-once animate-delay-200"
          src="assets/images/header-bg.jpg"
          alt=""
          draggable="false"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="container flex flex-col items-center gap-4 max-lg:gap-2">
          <p className="-mb-2 font-semibold md:text-6xl animate-once animate-fade-up">
            dear
          </p>
          <p className="font-semibold text-8xl animate-fade-up animate-once animate-delay-200">
            {guestName ? guestName : "Guest"}
          </p>
          <p className="text-base animate-once animate-fade-up sm:text-lg lg:text-xl animate-delay-300">
            you are cordially invited to our wedding
          </p>
        </div>
        <div className=" animate-once animate-jump-in animate-delay-[350ms] lg:max-w-72 cursor-pointer max-w-48 md:max-w-56">
          <img
            onClick={() => {
              setIsAnimating(true);
              const audio = document.getElementById(
                "audio"
              ) as HTMLAudioElement;
              audio?.play();
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
