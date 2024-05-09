import {
  MEMPELAI_PRIA_lengkap,
  MEMPELAI_WANITA_lengkap,
} from "../../lib/constants";
import Divider from "../Divider";

export default function Greeting() {
  return (
    <section className="flex text-center flex-col gap-12 justify-center mt-20 mb-12 items-center ">
      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        className="text-6xl"
      >
        وَمِنْ كُلِّ شَيْءٍ خَلَقْنَا زَوْجَيْنِ لَعَلَّكُمْ تَذَكَّرُونَ
      </div>

      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        className="text-center text-2xl font-garamond md:w-3/4 lg:w-1/2 flex-col flex items-center"
      >
        Artinya: “Dan segala sesuatu Kami Ciptakan Berpasang-pasangan supaya
        kamu mengingat kebesaran Allah.”
        <span>QS Az - Zariyat: 49</span>
      </div>

      <Divider />
      <div className="text-center font-garamond flex flex-col gap-8">
        <div className="grid md:grid-cols-3 grid-cols-1"></div>
        <p className="font-niconne text-3xl">The Wedding Of</p>

        <div className="flex flex-col gap-2">
          <h3 className="text-4xl font-bold ">{MEMPELAI_PRIA_lengkap}</h3>
          <div className="text-2xl">
            <p>Putra Pertama dari</p>
            <p>Bapak Iwan Fajar Mulyawan & Ibu Neneng Ika</p>
          </div>
        </div>

        <h3 className="text-4xl font-bold ">&</h3>

        <div className="flex flex-col gap-2">
          <h3 className="text-4xl font-bold ">{MEMPELAI_WANITA_lengkap}</h3>
          <div>
            <p>Putri Pertama dari</p>
            <p>Bapak Irwan Ramelan & Ibu Rini Susanti</p>
          </div>
        </div>
      </div>

      <Divider />
    </section>
  );
}
