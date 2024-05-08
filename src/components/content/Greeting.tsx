import {
  MEMPELAI_PRIA_lengkap,
  MEMPELAI_WANITA_lengkap,
} from "../../lib/constants";

export default function Greeting() {
  return (
    <section className="flex flex-col gap-8 justify-center my-12 items-center text-justify">
      <div
        data-aos="fade-up"
        data-aos-easing="linear"
      >
        <img
          src="images/bismillah.png"
          className="h-14"
          alt="Bismillahirrahmaanirrahiim"
        />
      </div>

      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        className="text-center"
      >
        <p>Assalamu'alaikum Warahmatullahi Wabarakatuh. </p>
        <p>Dengan memohon rahmat dan ridha Allah swt, </p>
        <p>
          kami bermaksud mengundang Bapak/Ibu/Saudara/Saudari pada acara
          pernikahan kami
        </p>
      </div>

      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        className="flex flex-col justify-center gap-2 items-center"
      >
        <div className="nama-lengkap">{MEMPELAI_PRIA_lengkap}</div>
        <div className="ampersand">&</div>
        <div className="nama-lengkap">{MEMPELAI_WANITA_lengkap}</div>
      </div>
      <span className="space40px"></span>
      <div
        data-aos="fade-up"
        data-aos-easing="linear"
      >
        <img
          src="image/divider-leaves.png"
          className="divider has-text-centered"
          alt="~~~"
        />
      </div>
    </section>
  );
}
