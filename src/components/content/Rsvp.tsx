import { MEMPELAI_PRIA, MEMPELAI_WANITA } from "../../lib/constants";
export default function Rsvp() {
  return (
    <section
      className="section-dark contact"
      id="rsvp"
    >
      <div className="container">
        <div className="columns is-multiline">
          <div className="column is-12 prolog">
            <h1
              className="title has-text-centered section-title"
              data-aos="fade-up"
              data-aos-easing="linear"
            >
              Konfirmasi Kehadiran
            </h1>
          </div>
          <div
            className="column is-12 prolog has-text-centered"
            data-aos="fade-up"
            data-aos-easing="linear"
          >
            <p className="h2 subtitle">
              Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
              Bapak/Ibu/Saudara/Saudari berkenan hadir memberikan doa restu.
              Jika bisa hadir kami tunggu konfirmasinya, Informasi: Di meja
              penerima tamu akan kami sediakan hand sanitizer dan pemeriksaan
              suhu tubuh. Jika tidak memungkinkan untuk hadir di pernikahan
              kami,tidak mengapa, semoga bisa berjumpa di lain kesempatan Stay
              safe & jaga kesehatan ya :)
            </p>

            <a
              href={`https://api.whatsapp.com/send?phone=628xxxxxxxxxx&text=Halo%20${MEMPELAI_PRIA},%20saya%20akan%20datang%20di%20acara%20pernikahan&source=&data=`}
              className="button btn-whatsapp"
              target="_blank"
              data-aos="zoom-in"
            >
              <i className="fab fa-whatsapp"></i>
              &nbsp;&nbsp; Kabari {MEMPELAI_PRIA}
            </a>

            <a
              href={`https://api.whatsapp.com/send?phone=628xxxxxxxxxx&text=Halo%20${MEMPELAI_WANITA},%20saya%20akan%20datang%20di%20acara%20pernikahan&source=&data=`}
              className="button btn-whatsapp"
              target="_blank"
              data-aos="zoom-in"
            >
              <i className="fab fa-whatsapp"></i>
              &nbsp;&nbsp;Kabari {MEMPELAI_WANITA}
            </a>

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
            <div className="space40px"></div>
            <p
              className="h2 subtitle"
              data-aos="fade-up"
              data-aos-easing="linear"
            >
              <span>Kami yang berbahagia,</span>
              {/* <br> */}
              <a
                className="instagram"
                href="https://instagram.com/cewe"
                target="_blank"
              >
                <i className="fab fa-instagram"></i> <span>@si cewe</span>
              </a>
              <a
                className="instagram"
                href="https://instagram.com/laki"
                target="_blank"
              >
                <i className="fab fa-instagram"></i> <span>@si laki</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
