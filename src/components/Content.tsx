import About from "./content/About";
import Greeting from "./content/Greeting";
import Location from "./content/Location";
import Rsvp from "./content/Rsvp";
import Time from "./content/Time";

export default function Content() {
  return (
    <div className="container">
      {/* <!-- Begin regular-section--> */}
      <Greeting />
      {/* <!-- End regular-section--> */}

      {/* <!-- Begin Waktu Section --> */}
      <Time />
      {/* <!-- End Waktu Content --> */}

      {/* <!-- Begin Lokasi Section --> */}
      <Location />
      {/* <!-- End Lokasi Content --> */}

      {/* <!-- Begin Tentang Sherly and Daeng --> */}
      <About />
      {/* <!-- End Tentang Sherly dan Daeng --> */}

      {/* <!-- Begin RSVP Content --> */}
      <Rsvp />
      {/* <!-- End RSVP Content --> */}
    </div>
  );
}
