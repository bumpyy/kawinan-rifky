import { DATE, MEMPELAI_PRIA, MEMPELAI_WANITA } from "@/lib/constants";

export default function EndSection() {
  return (
    <div className="relative">
      <div className="opacity-50">
        <img
          src="assets/images/end.jpg"
          alt=""
        />
      </div>
      <div className="absolute w-full space-y-2 font-semibold text-center -translate-x-1/2 -translate-y-1/2 md:space-y-5 top-1/2 left-1/2">
        <h1 className="text-xs sm:text-lg md:text-2xl font-garamond lg:text-3xl xl:text-4xl animate-once animate-fade-down">
          Join our Wedding
        </h1>
        <h2 className="text-2xl sm:text-5xl md:text-8xl xl:text-9xl font-gaegu animate-once animate-fade-down">
          {MEMPELAI_PRIA} & {MEMPELAI_WANITA}
        </h2>
        <div className="flex flex-col items-center gap-4 font-semibold">
          <p className="text-lg sm:text-2xl md:text-6xl font-garamond">
            {DATE.toLocaleString("id", {
              day: "2-digit",
              month: "numeric",
              year: "numeric",
            })
              .split("/")
              .join(".")}
          </p>
        </div>
      </div>
    </div>
  );
}
