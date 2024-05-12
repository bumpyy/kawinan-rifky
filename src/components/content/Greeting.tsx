import {
  MEMPELAI_PRIA_lengkap,
  MEMPELAI_WANITA_lengkap,
} from "../../lib/constants";
import Divider from "../Divider";

export default function Greeting() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center gap-4 my-12 text-center lg:gap-12 "
    >
      <div data-aos="fade-down">
        <p className="text-lg font-gaegu sm:text-6xl">
          وَمِنْ كُلِّ شَيْءٍ خَلَقْنَا زَوْجَيْنِ لَعَلَّكُمْ تَذَكَّرُونَ
        </p>
        <div className="flex flex-col items-center justify-center text-xs text-center sm:text-xl font-garamond">
          <p className="md:w-3/4 ">
            Artinya: “Dan segala sesuatu Kami Ciptakan Berpasang-pasangan supaya
            kamu mengingat kebesaran Allah.”
            <span>QS Az - Zariyat: 49</span>
          </p>
        </div>
      </div>

      <Divider />
      <div className="flex flex-col gap-8 text-center font-garamond">
        {/* Gallery */}
        <div className="container grid grid-cols-1 gap-2 align-middle md:grid-cols-3 justify-items-center">
          {[
            "md:rotate-1 lg:translate-x-1",
            "md:-rotate-2 lg:-translate-y-3",
            "md:rotate-2 lg:-translate-x-3 lg:-translate-y-1",
          ].map((rotation, i) => (
            <div
              className="lg:z-10 lg:hover:z-20"
              data-aos="fade-up"
              key={i}
            >
              <img
                className={`${rotation} max-w-72 w-full lg:hover:scale-150 lg:duration-500 lg:hover:translate-y-0 lg:hover:translate-x-0  shadow-none lg:hover:shadow-xl lg:transition lg:hover:z-30 lg:hover:rotate-0`}
                src={`assets/images/polaroid-${i}.jpg`}
                alt=""
              />
            </div>
          ))}
        </div>
        <p
          className="z-0 text-3xl font-niconne"
          data-aos="fade-up"
        >
          The Wedding Of
        </p>

        <div className="flex flex-col gap-2">
          <h3
            className="text-3xl font-bold sm:text-4xl"
            data-aos="fade-up"
          >
            {MEMPELAI_PRIA_lengkap}
          </h3>
          <div
            className="text-base text-lg text-left sm:text-lg md:text-xl"
            data-aos="fade-up"
          >
            <p>Putra Pertama dari Bapak</p>
            <p>Iwan Fajar Mulyawan & Ibu Neneng Ika</p>
          </div>
        </div>

        <h3
          className="text-3xl font-bold sm:text-4xl"
          data-aos="fade-up"
        >
          &
        </h3>

        <div className="flex flex-col gap-2">
          <h3
            className="text-3xl font-bold sm:text-4xl"
            data-aos="fade-up"
          >
            {MEMPELAI_WANITA_lengkap}
          </h3>
          <div
            className="text-base text-lg text-left sm:text-lg md:text-xl"
            data-aos="fade-up"
          >
            <p>Putri Pertama dari</p>
            <p> Bapak Irwan Ramelan & Ibu Rini Susanti</p>
          </div>
        </div>
      </div>

      <Divider />
    </section>
  );
}
