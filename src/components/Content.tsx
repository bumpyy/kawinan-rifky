import ScrollAnimation from "react-animate-on-scroll";
import { TimePropsType } from "../lib/types";
import Divider from "./Divider";
import About from "./content/About";
import EndSection from "./content/EndSection";
import Greeting from "./content/Greeting";
import Location from "./content/Location";
import Rsvp from "./content/Rsvp";
import Time from "./content/Time";
import Wish from "./wish";

export default function Content({ day, hour, min, sec }: TimePropsType) {
  return (
    <div className="relative z-10 overflow-x-hidden bg-secondary">
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
      <ScrollAnimation animateIn="fadeIn">
        <div className="w-full">
          <img
            draggable="false"
            className="object-cover w-full"
            src="assets/images/about-bg.jpg"
            alt=""
          />
        </div>
      </ScrollAnimation>
      {/* <!-- End Tentang Rifky dan Fira --> */}
      <Divider />
      {/* <!-- Begin RSVP Content --> */}
      <Rsvp />
      {/* <!-- End RSVP Content --> */}
      <Divider />
      <Wish />

      <EndSection />
    </div>
  );
}
