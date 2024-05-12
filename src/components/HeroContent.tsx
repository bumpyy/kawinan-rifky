import { DATE, MEMPELAI_PRIA, MEMPELAI_WANITA } from "../lib/constants.js";

export default function HeroContent() {
  return (
    <div className=" justify-center flex flex-col h-screen-dynamic items-center">
      <div className="container h-3/5  flex flex-col justify-center items-center">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center font-garamond mb-4">
          Join and Celebrate Our Wedding
        </h1>
        <div className="text-center flex flex-col gap-2 ">
          <h2 className="text-title font-gaegu leading-3 lowercase font-bold">
            {MEMPELAI_PRIA} & {MEMPELAI_WANITA}
          </h2>
          <div className="font-garamond text-xl font-semibold">
            <h3
            //   data-aos="fade-up"
            //   data-aos-easing="linear"
            >
              {DATE.toLocaleString("id", {
                day: "2-digit",
                month: "numeric",
                year: "numeric",
              })
                .split("/")
                .join(".")}
            </h3>
          </div>
        </div>
      </div>

      <div className="h-3/5 w-auto">
        <img
          className="object-contain object-bottom relative h-full w-auto"
          src="assets/images/hero.jpg"
          alt=""
        />
      </div>

      {/*  Start Countdown  */}
      {/* <ul className="flex gap-1 text-5xl justify-center text-center">
        <li>
          <span className="">
            {day.toLocaleString("id", {
              minimumIntegerDigits: 2,
              useGrouping: false,
            })}
          </span>
          <p className="text-lg">Hari</p>
        </li>
        <li className="">:</li>
        <li>
          <span className="">
            {hour.toLocaleString("id", {
              minimumIntegerDigits: 2,
              useGrouping: false,
            })}
          </span>
          <p className="text-lg text-center">Jam</p>
        </li>
        <li className="">:</li>
        <li>
          <span className="">
            {min.toLocaleString("id", {
              minimumIntegerDigits: 2,
              useGrouping: false,
            })}
          </span>
          <p className="text-lg">Menit</p>
        </li>
        <li className="">:</li>
        <li>
          <span className="">
            {sec.toLocaleString("id", {
              minimumIntegerDigits: 2,
              useGrouping: false,
            })}
          </span>
          <p className="text-lg ">Detik</p>
        </li>
      </ul> */}
      {/*  End Countdown  */}
    </div>
  );
}
