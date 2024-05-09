export default function Location() {
  return (
    <section
      className="text-center flex items-center flex-col gap-4 mt-10"
      id="lokasi"
    >
      <div className="container flex flex-col gap-2">
        <p className="font-semibold text-4xl capitalize">Seetitik Kopi</p>
        <p className="">
          Jl. Setu Baru No.1, Sukmajaya, Kec. Sukmajaya, Kota Depok, Jawa Barat
          16412
        </p>
      </div>

      <div
        className=""
        data-aos="fade-up"
        data-aos-easing="linear"
      >
        <a
          href="#"
          target="_blank"
          className=""
          data-tooltip="Open map"
          data-aos="zoom-in"
        >
          <i className=""></i>
          Open Map
        </a>
      </div>
    </section>
  );
}
