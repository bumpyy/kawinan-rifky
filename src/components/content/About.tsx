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
    <section className="container text-center flex flex-col gap-8">
      <h2 className="capitalize text-4xl">Our Love story</h2>

      <div className="lg:w-3/4 flex flex-col gap-12 mx-auto">
        {TIMELINE_DATA.map((data) => (
          <div className="flex">
            <div className="basis-1/5 text-xl font-semibold shrink-0">
              {data.date}
            </div>
            <div className="text-lg">{data.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
