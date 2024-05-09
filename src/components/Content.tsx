import { TimePropsType } from "../lib/types";
import Divider from "./Divider";
import About from "./content/About";
import Greeting from "./content/Greeting";
import Location from "./content/Location";
import Rsvp from "./content/Rsvp";
import Time from "./content/Time";

export default function Content({ day, hour, min, sec }: TimePropsType) {
  return (
    <div className="">
      {/* <!-- Begin regular-section--> */}
      <Greeting />
      {/* <!-- End regular-section--> */}

      {/* <!-- Begin Waktu Section --> */}
      <Time
        day={day}
        hour={hour}
        min={min}
        sec={sec}
      />
      {/* <!-- End Waktu Content --> */}

      {/* <!-- Begin Lokasi Section --> */}
      <Location />
      {/* <!-- End Lokasi Content --> */}
      <Divider />
      {/* <!-- Begin Tentang Rifky and Fira --> */}
      <About />
      <div className="w-full">
        <img
          draggable="false"
          className="w-full object-cover"
          src="assets/images/about-bg.jpg"
          alt=""
        />
      </div>
      {/* <!-- End Tentang Rifky dan Fira --> */}
      <Divider />
      {/* <!-- Begin RSVP Content --> */}
      <Rsvp />
      {/* <!-- End RSVP Content --> */}
    </div>
  );
}
