import { DATE } from "../../lib/constants";

export default function Time() {
  return (
    <section
      className="section-dark"
      id="Waktu"
    >
      <div className="container">
        <div
          className="column is-12 regular-section"
          data-aos="fade-up"
          data-aos-easing="linear"
        >
          <h1 className="title has-text-centered section-title">Waktu</h1>
        </div>
        <div
          className="columns is-multiline"
          data-aos="fade-up"
          data-aos-easing="linear"
        >
          <div className="column is-4 has-vertically-aligned-content">
            <div className="is-larger has-text-centered">
              <div className="waktu tanggal-hari has-text-centered">
                {DATE.toLocaleString("id", { weekday: "long" })}
              </div>
              <div className="waktu tanggal-angka has-text-centered">
                {DATE.toLocaleString("id", { day: "2-digit" })}
              </div>
              <div className="waktu tanggal-bulan has-text-centered">
                {DATE.toLocaleString("id", { month: "long", year: "numeric" })}
              </div>
            </div>
          </div>
          <div className="column is-4 has-vertically-aligned-content">
            <p className="waktu is-larger has-text-centered">
              Akad Nikah:
              {/* <br> */}
              <strong>
                {DATE.toLocaleString("id", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </strong>
            </p>
          </div>

          <div className="column is-4 has-vertically-aligned-content">
            <h1 className="waktu is-larger has-text-centered">
              Resepsi:
              {/* <br> */}
              <strong>
                {DATE.toLocaleString("id", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
                -
                {new Date(DATE.getTime() + 6 * 60 * 60 * 1000).toLocaleString(
                  "id",
                  {
                    hour: "2-digit",
                    minute: "2-digit",
                  }
                )}
              </strong>
            </h1>
          </div>
        </div>
      </div>
      <div className="space40px"></div>

      {/* TODO: Add calendar notification feature */}
      <div
        className="main-content has-text-centered"
        data-aos="fade-up"
        data-aos-easing="linear"
      >
        <a
          href="https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=NGgzdW00NG84dXFwMzcwNXYxbGliNGxzaWggZGFlbmdkb2FuZ0Bt&amp;tmsrc=daengdoang%40gmail.com"
          target="_blank"
          className="button has-tooltip btn-cta"
          data-tooltip="Add to Calendar"
          data-aos="zoom-in"
        >
          <i className="far fa-calendar-plus"></i>
          &nbsp;&nbsp;Google Calendar
        </a>
      </div>
    </section>
  );
}
