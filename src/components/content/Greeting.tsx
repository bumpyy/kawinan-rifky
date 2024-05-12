import {
  MEMPELAI_PRIA_lengkap,
  MEMPELAI_WANITA_lengkap,
} from "../../lib/constants";
import Divider from "../Divider";

export default function Greeting() {
  return (
    <section
      id="home"
      className="flex text-center flex-col gap-6 lg:gap-12 justify-center my-12 items-center "
    >
      <div
        className="text-6xl"
        data-aos="fade-down"
      >
        وَمِنْ كُلِّ شَيْءٍ خَلَقْنَا زَوْجَيْنِ لَعَلَّكُمْ تَذَكَّرُونَ
      </div>

      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        className="text-center text-xl font-garamond md:w-3/4 lg:w-1/2 flex-col flex items-center"
      >
        Artinya: “Dan segala sesuatu Kami Ciptakan Berpasang-pasangan supaya
        kamu mengingat kebesaran Allah.”
        <span>QS Az - Zariyat: 49</span>
      </div>

      <Divider />
      <div className="text-center font-garamond flex flex-col gap-8">
        {/* Gallery */}
        <div className="grid md:grid-cols-3 align-middle justify-items-center container gap-2 grid-cols-1">
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
          className="font-niconne z-0 text-3xl"
          data-aos="fade-up"
        >
          The Wedding Of
        </p>

        <div className="flex flex-col gap-2">
          <h3
            className="text-4xl font-bold "
            data-aos="fade-up"
          >
            {MEMPELAI_PRIA_lengkap}
          </h3>
          <div
            className="text-xl text-left"
            data-aos="fade-up"
          >
            <p>Putra Pertama dari Bapak</p>
            <p>Iwan Fajar Mulyawan & Ibu Neneng Ika</p>
          </div>
        </div>

        <h3
          className="text-4xl font-bold "
          data-aos="fade-up"
        >
          &
        </h3>

        <div className="flex flex-col gap-2">
          <h3
            className="text-4xl font-bold "
            data-aos="fade-up"
          >
            {MEMPELAI_WANITA_lengkap}
          </h3>
          <div
            className="text-xl text-left"
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
