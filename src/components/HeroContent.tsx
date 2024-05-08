import { useEffect, useState } from "react";
import {
  DATE,
  LOCATION,
  MEMPELAI_PRIA,
  MEMPELAI_WANITA,
} from "../lib/constants.js";

export default function HeroContent() {
  const [day, setDay] = useState(0); //countdown 2 hours.
  const [hour, setHour] = useState(0); //countdown 2 hours.
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);

  const getTimeUntil = (deadline: string) => {
    const time = Date.parse(deadline) - Date.parse(new Date().toUTCString());

    if (time < 0) {
      setDay(0);
      setHour(0);
      setMin(0);
      setSec(0);
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));

      setDay(days);
      setHour(hours);
      setMin(minutes);
      setSec(seconds);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      getTimeUntil("05/25/2024 15:00:00");
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="grid justify-center h-screen items-center">
      <div className="container">
        <div className="text-center text-2xl flex flex-col gap-10 mb-14">
          <h1 className="">Undangan Pernikahan</h1>
          <h2 className="text-6xl -rotate-2 hover:-rotate-3 transition-transform hover:scale-105">
            {MEMPELAI_PRIA} & {MEMPELAI_WANITA}
          </h2>
          <div>
            <h3>
              {`${DATE.toLocaleString("id", { weekday: "long" })},
              ${DATE.toLocaleString("id", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}`}
            </h3>
            <h4 className="">{LOCATION}</h4>
          </div>
        </div>

        {/*  Start Countdown  */}
        <ul className="flex gap-1 justify-center text-center">
          <li>
            <span className="text-3xl">
              {day.toLocaleString("id", {
                minimumIntegerDigits: 2,
                useGrouping: false,
              })}
            </span>
            <p className="text-sm">Hari</p>
          </li>
          <li className="text-3xl">:</li>
          <li>
            <span className="text-3xl">
              {hour.toLocaleString("id", {
                minimumIntegerDigits: 2,
                useGrouping: false,
              })}
            </span>
            <p className="text-sm text-center">Jam</p>
          </li>
          <li className="text-3xl">:</li>
          <li>
            <span className="text-3xl">
              {min.toLocaleString("id", {
                minimumIntegerDigits: 2,
                useGrouping: false,
              })}
            </span>
            <p className="text-sm">Menit</p>
          </li>
          <li className="text-3xl">:</li>
          <li>
            <span className="text-3xl">
              {sec.toLocaleString("id", {
                minimumIntegerDigits: 2,
                useGrouping: false,
              })}
            </span>
            <p className="text-sm ">Detik</p>
          </li>
        </ul>
      </div>
      {/*  End Countdown  */}
    </div>
  );
}
