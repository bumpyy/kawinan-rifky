import { DATE } from "../../lib/constants";
import { TimePropsType } from "../../lib/types";
import Divider from "../Divider";

function CountdownCard({
  text,
  countdown,
  className,
}: {
  text: string;
  countdown: number | string;
  className?: string;
}) {
  return (
    <div
      className={`text-2xl font-semibold text-center w-full max-w-28 p-4 bg-primary rounded-3xl ${className}`}
    >
      <p>{("00" + countdown).slice(-2)}</p>
      <p>{text}</p>
    </div>
  );
}

export default function Time({ day, hour, min, sec }: TimePropsType) {
  return (
    <section
      className="text-center flex items-center flex-col gap-4"
      id="Waktu"
    >
      <h2 className="capitalize text-3xl">save the date</h2>
      <h2 className="capitalize text-5xl">our special day</h2>

      <div className="grid max-w-96 w-full mx-auto justify-items-center my-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
        <CountdownCard
          text="Hari"
          countdown={day}
          className="md:col-span-3"
        />

        <CountdownCard
          text="Jam"
          countdown={hour}
        />

        <CountdownCard
          text="Menit"
          countdown={min}
        />
        <CountdownCard
          text="Detik"
          countdown={sec}
        />
      </div>

      <div className="flex flex-col gap-4 items-center font-semibold">
        <p className="text-4xl">
          {DATE.toLocaleString("id", { weekday: "long" })},{" "}
          {DATE.toLocaleString("id", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })
            .split("/")
            .join(" ")}
        </p>

        <blockquote className="text-center md:w-3/4 lg:w-3/5">
          <p>
            “Once in awhile, right in the middle of an ordinary life, love gives
            us a fairy tale.”
          </p>
          <p>Unknown</p>
        </blockquote>
        <p></p>
      </div>

      <Divider />

      <div className="flex flex-col gap-10">
        <DateGroup
          title="Akad Nikah"
          end={1.5}
        />

        <DateGroup
          title="Resepsi"
          start={2}
          end={4.5}
        />

        {/* TODO: Add calendar notification feature */}
        <div
          className=""
          data-aos="fade-up"
          data-aos-easing="linear"
        >
          <a
            href="https://www.google.com/calendar/render?action=TEMPLATE&text=Pernikahan+Rifky+%26+Fira&location=Jl.+Setu+Baru+No.1%2C+Sukmajaya%2C+Kec.+Sukmajaya%2C%0AKota+Depok%2C+Jawa+Barat+16412&dates=20240525T060000Z%2F20240525T123000Z"
            target="_blank"
            className=""
            data-tooltip="Add to Calendar"
            data-aos="zoom-in"
          >
            <i className="far fa-calendar-plus"></i>
            Google Calendar
          </a>
        </div>
      </div>
    </section>
  );
}

function DateGroup({
  title,
  start = 0,
  end = 0,
}: {
  title: string;
  start?: number;
  end?: number;
}) {
  return (
    <div className="container flex flex-col gap-2">
      <p className="font-semibold text-2xl capitalize">{title}</p>
      <p className="text-xl">
        {DATE.toLocaleString("id", { weekday: "long" })},{" "}
        {DATE.toLocaleString("id", {
          day: "2-digit",
          month: "numeric",
          year: "numeric",
        })
          .split("/")
          .join(".")}
      </p>
      <p className="text-xl">
        <span>Pukul </span>
        {new Date(DATE.getTime() + start * 60 * 60 * 1000).toLocaleString(
          "id",
          {
            hour: "2-digit",
            minute: "2-digit",
          }
        )}
        -
        {new Date(DATE.getTime() + end * 60 * 60 * 1000).toLocaleString("id", {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>
    </div>
  );
}
