import ScrollAnimation from "react-animate-on-scroll";
import Divider from "../Divider";

export default function About() {
  type TimelineDataType = {
    date: number | string;
    text: string;
  };

  const TIMELINE_DATA: Array<TimelineDataType> = [
    {
      date: 2018,
      text: "Mengenal satu sama lain saat masa kuliah di program studi yang sama.",
    },
    {
      date: 2018,
      text: "Kemudian kami berdua sepakat untuk berkomitmen pada sebuah hubungan.",
    },
    {
      date: 2023,
      text: "Pada bulan November, kedua keluarga kami bertemu untuk merencanakan ke jenjang yang lebih serius.",
    },
    {
      date: 2024,
      text: "Hingga diputuskan akan melangsungkan Akad nikah pada 25 Mei 2024.",
    },
  ];

  return (
    <section
      id="tentang-mempelai"
      className="text-center flex flex-col gap-8"
    >
      <ScrollAnimation animateIn="tada">
        <h2 className="capitalize text-6xl font-bold">Our Love story</h2>
      </ScrollAnimation>
      <div className="lg:w-3/4 flex flex-col gap-12 mx-auto">
        {TIMELINE_DATA.map((data, index) => (
          <div
            data-aos="fade-right"
            data-aos-easing="linear"
            className="flex max-md:flex-col"
            key={index}
          >
            <div className="basis-1/6 text-4xl font-semibold shrink-0">
              {data.date}
            </div>
            <div className="text-2xl">{data.text}</div>
          </div>
        ))}
      </div>
      <Divider imageUrl="assets/images/divider-love.png" />
    </section>
  );
}
