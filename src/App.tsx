import { useEffect, useState } from "react";
import Content from "./components/Content";
import Hero from "./components/Hero";
import Preload from "./components/Preload";

function App() {
  const [rDay, setrDay] = useState(0); //countdown 2 hours.
  const [rHour, setrHour] = useState(0); //countdown 2 hours.
  const [rMin, setrMin] = useState(0);
  const [rSec, setrSec] = useState(0);
  const [open, setOpen] = useState(false);
  const getTimeUntil = (deadline: string) => {
    const time = Date.parse(deadline) - Date.parse(new Date().toUTCString());

    if (time < 0) {
      setrDay(0);
      setrHour(0);
      setrMin(0);
      setrSec(0);
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));

      setrDay(days);
      setrHour(hours);
      setrMin(minutes);
      setrSec(seconds);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      getTimeUntil("05/25/2024 15:00:00");
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      {open ? (
        <>
          <Hero
            day={rDay}
            hour={rHour}
            min={rMin}
            sec={rSec}
          />
          <Content
            day={rDay}
            hour={rHour}
            min={rMin}
            sec={rSec}
          />
        </>
      ) : (
        <Preload openHandler={setOpen} />
      )}
    </>
  );
}

export default App;
