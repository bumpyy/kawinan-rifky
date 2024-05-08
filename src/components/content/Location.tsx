import { LOCATION } from "../../lib/constants";

export default function Location() {
  return (
    <section
      className="section-darker"
      id="lokasi"
    >
      <div className="container">
        <div
          className="column is-12 regular-section"
          data-aos="fade-up"
          data-aos-easing="linear"
        >
          <h1 className="title has-text-centered section-title">Lokasi</h1>
          <p className="tempat is-larger has-text-centered">{LOCATION}</p>
        </div>
        <div
          className="section-map"
          data-aos="fade-up"
          data-aos-easing="linear"
        >
          {/* TODO: Place map here */}
        </div>
        <div className="space40px"></div>
        <div
          className="has-text-centered"
          data-aos="fade-up"
          data-aos-easing="linear"
        >
          <a
            href="https://maps.google.com/maps?ll=-6.246855,106.971346&z=16&t=m&hl=en&gl=ID&mapclient=embed&daddr=RM.%20Pondok%20Kenanga%20Jl.%20Kenanga%20Raya%20No.9%20RT.001%2FRW.006A%2C%20Jakasampurna%20Bekasi%20Barat%2C%20Bekasi%20City%2C%20West%20Java%2017145@-6.2468549,106.9713456"
            className="button btn-cta"
            target="_blank"
            data-aos="zoom-in"
          >
            <i className="far fa-directions"></i>
            &nbsp;&nbsp;Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
