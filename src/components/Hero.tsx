import { TimePropsType } from "../lib/types";
import HeroContent from "./HeroContent";
import HeroFoot from "./HeroFoot";
import MobileNav from "./MobileNav";

export default function Hero({ day, hour, min, sec }: TimePropsType) {
  return (
    <>
      <section className="text-white shadow-lg bg-fixed text-xl hero filter bg-primary ">
        {/*  Begin Mobile Nav  */}
        <MobileNav />
        {/*  End Mobile Nav  */}

        {/*  Begin Hero Content */}
        <HeroContent
          day={day}
          hour={hour}
          min={min}
          sec={sec}
        />
        {/* //  End Hero Content */}

        {/* //  Begin Hero Menu  */}
        {/* //  End Hero Menu  */}
      </section>
      <HeroFoot />
    </>
  );
}
