export default function Location() {
  return (
    <section
      className="text-center flex items-center flex-col gap-8 mt-10"
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
        className="lg:max-w-72 max-w-40 md:max-w-48"
        data-aos="fade-up"
        data-aos-easing="linear"
      >
        <a
          href="https://maps.app.goo.gl/xubkdGhLja2ZAGHh7"
          target="_blank"
          className=""
          data-tooltip="Open map"
          data-aos="zoom-in"
        >
          <img
            src="assets/images/open-map.png"
            alt=""
            draggable="false"
          />
        </a>
      </div>
    </section>
  );
}
