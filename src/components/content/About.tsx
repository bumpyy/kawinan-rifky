import { MEMPELAI_PRIA, MEMPELAI_WANITA } from "../../lib/constants";

export default function About() {
  return (
    <section
      className="section-light regular-section is-fullheight"
      id="tentang-sherly-daeng"
    >
      <div className="container">
        <div className="columns is-multiline">
          <div className="column has-text-centered is-12 prolog">
            <h1
              className="title has-text-centered section-title"
              data-aos="fade-up"
              data-aos-easing="linear"
            >
              Tentang {MEMPELAI_PRIA} dan {MEMPELAI_WANITA}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
