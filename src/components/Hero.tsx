import HeroContent from "./HeroContent";
import HeroFoot from "./HeroFoot";
import MobileNav from "./MobileNav";

export default function Hero() {
  return (
    <>
      <section className="text-white shadow-lg bg-fixed text-xl hero filter bg-primary ">
        {/*  Begin Mobile Nav  */}
        <MobileNav />
        {/*  End Mobile Nav  */}

        {/*  Begin Hero Content */}
        <HeroContent />
        {/* //  End Hero Content */}

        {/* //  Begin Hero Menu  */}
        {/* //  End Hero Menu  */}
      </section>
      <HeroFoot />
    </>
  );
}
