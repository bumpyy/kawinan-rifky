import { wishes } from "@/constant/wish";
import { TWishType } from "@/lib/type";
import ScrollAnimation from "react-animate-on-scroll";

export default function Wish() {
  return (
    <section className="flex flex-col w-full gap-4 py-8 mx-auto text-center md:w-1/2">
      <ScrollAnimation animateIn="tada">
        <h2 className="font-bold text-7xl">Make a Wish</h2>
      </ScrollAnimation>
      <p
        className="text-xl"
        data-aos="fade-up"
        data-aos-easing="linear"
      >
        Suatu kehormatan dan kebahagiaan bagi kami, apabila Bapak/Ibu berkenan
        hadir dan memberikan restu kepada kami.
      </p>
      {/* <form
        data-aos="fade-up"
        data-aos-easing="linear"
        className="flex flex-col gap-4 mt-2 md:mx-8"
      >
        <div>
          <input
            placeholder="Nama"
            type="text"
            className="w-full px-4 py-1 bg-primary rounded-3xl placeholder:text-black placeholder:focus:text-primary"
            id="name"
          />
        </div>

        <div className="w-full">
          <textarea
            id="email"
            className="w-full px-4 py-2 bg-primary rounded-3xl placeholder:text-black placeholder:focus:text-primary"
            placeholder="Ucapan"
            rows={4}
          ></textarea>{" "}
          <p className="ml-4 text-lg text-left text-red-500"></p>
        </div>

        <button
          className="px-4 py-2 ml-auto bg-primary rounded-xl w-fit"
          type="submit"
        >
          Submit
        </button>
      </form> */}

      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        className="max-h-[40rem] overflow-y-auto p-4 flex flex-col gap-4"
      >
        {wishes.map((wish) => (
          <Comment
            key={wish.id}
            wish={wish}
          />
        ))}
      </div>
    </section>
  );
}

function Comment({ wish }: { wish: TWishType }) {
  return (
    <div className="w-full p-4 text-left bg-white rounded-lg shadow-md animate-fade">
      <div>
        <h3 className="font-bold">{wish.name}</h3>
        <p className="mb-2 text-sm text-gray-700">
          {new Date(Date.parse(wish.created_at)).toLocaleDateString("id", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>
      <p className="text-gray-700">{wish.wish}</p>
    </div>
  );
}
