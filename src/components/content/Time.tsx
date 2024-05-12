import ScrollAnimation from "react-animate-on-scroll";
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
      className={`text-4xl font-semibold text-center w-full max-w-28 p-4 bg-primary rounded-3xl ${className}`}
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
      id="waktu"
    >
      <ScrollAnimation animateIn="tada">
        <h2 className="capitalize text-5xl font-semibold">save the date</h2>
        <h3 className="capitalize text-7xl font-semibold">our special day</h3>
      </ScrollAnimation>

      <div
        className="grid max-w-96 w-full mx-auto justify-items-center my-8 grid-cols-3 gap-4 "
        data-aos="fade-up"
        data-aos-easing="linear"
      >
        <CountdownCard
          text="Hari"
          countdown={day}
          className="col-span-3"
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
        <p
          className="text-5xl"
          data-aos="fade-up"
          data-aos-easing="linear"
        >
          {DATE.toLocaleString("id", { weekday: "long" })},{" "}
          {DATE.toLocaleString("id", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })
            .split("/")
            .join(" ")}
        </p>
        {/* TODO: Add calendar notification feature */}
        <div
          className="lg:max-w-72 max-w-40 md:max-w-48"
          data-aos="fade-up"
          data-aos-easing="linear"
        >
          <a
            href="https://www.google.com/calendar/render?action=TEMPLATE&text=Pernikahan+Andre+%26+Fira&location=Jl.+Setu+Baru+No.1%2C+Sukmajaya%2C+Kec.+Sukmajaya%2C%0AKota+Depok%2C+Jawa+Barat+16412&dates=20240525T060000Z%2F20240525T123000Z"
            target="_blank"
            className=""
            data-tooltip="Add to Calendar"
            data-aos="zoom-in"
          >
            <img
              src="assets/images/save-calendar.png"
              alt=""
              draggable="false"
            />
          </a>
        </div>
        <blockquote
          className="text-center space-y-2 text-xl mt-4"
          data-aos="fade-up"
          data-aos-easing="linear"
        >
          <p>
            “Once in a while, right in the middle of an ordinary life, love
            gives us a fairy tale.”
          </p>
          <p>- Unknown</p>
        </blockquote>
      </div>

      <Divider imageUrl="assets/images/divider-love.png" />

      <div className="flex flex-col items-center gap-10">
        <DateGroup
          title="Akad Nikah"
          end={1.5}
        />

        <DateGroup
          title="Resepsi"
          start={2}
          end={4.5}
        />
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
    <div
      className=" flex flex-col gap-2 text-2xl"
      data-aos="fade-up"
      data-aos-easing="linear"
    >
      <p className="font-bold capitalize text-4xl font-">{title}</p>
      <p className="">
        {DATE.toLocaleString("id", { weekday: "long" })},{" "}
        {DATE.toLocaleString("id", {
          day: "2-digit",
          month: "numeric",
          year: "numeric",
        })
          .split("/")
          .join(".")}
      </p>
      <p className="">
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
