import ScrollAnimation from "react-animate-on-scroll";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "sonner";

export default function Rsvp() {
  return (
    <section
      id="share-love"
      className="flex flex-col gap-4 text-center"
    >
      <div className="flex flex-col items-center gap-8 my-8 text-xl">
        <div>
          <ScrollAnimation animateIn="tada">
            <h2 className="text-6xl font-semibold capitalize">Share Love</h2>
          </ScrollAnimation>
          <div className="flex flex-col items-center justify-center mt-2 text-xs font-semibold text-center sm:text-xl">
            <p
              className=" md:w-1/2 lg:w-4/5 sm:w-4/5"
              data-aos="fade-up"
              data-aos-easing="linear"
            >
              Doa & restu anda di pernikahan kami tentunya sangat berarti. Namun
              jika anda ingin memberi lebih, kami dengan senang hati menerimanya
              dan akan semakin melengkapi kebahagiaan kami.
            </p>
          </div>
        </div>
        <div
          className="lg:max-w-40 max-w-20 md:max-w-24"
          data-aos="fade-up"
          data-aos-easing="linear"
        >
          <img
            src="assets/icons/gift.png"
            alt=""
            draggable="false"
          />
        </div>
        <div
          className="flex flex-col items-center"
          data-aos="fade-up"
          data-aos-easing="linear"
        >
          <p className="font-semibold text2">BCA - 6395468069</p>
          <p className="font-semibold">Syafira Nurhanifa Fauziah</p>

          <CopyToClipboard
            text={"6395468069"}
            onCopy={() => {
              toast("Syafira Nurhanifa Fauziah tersalin");
            }}
          >
            <div className="flex items-center gap-2 text-xl cursor-pointer">
              <img
                src="assets/icons/copy.png"
                alt=""
                className="w-4 md:w-6"
                draggable="false"
              />
              <span>Salin Nomor</span>
            </div>
          </CopyToClipboard>
        </div>

        <div
          className="flex flex-col items-center"
          data-aos="fade-up"
          data-aos-easing="linear"
        >
          <p className="font-semibold">BCA - 6395468077</p>
          <p className="font-semibold">Muhammad Rifky Andreawan</p>

          <CopyToClipboard
            text={"6395468077"}
            onCopy={() => {
              toast("Muhammad Rifky Andreawan tersalin");
            }}
          >
            <div className="flex items-center gap-2 text-xl cursor-pointer">
              <img
                src="assets/icons/copy.png"
                alt=""
                className="w-4 md:w-6"
                draggable="false"
              />
              <span>Salin Nomor</span>
            </div>
          </CopyToClipboard>
        </div>
      </div>

      <div className="flex flex-col items-center gap-8 my-8">
        <ScrollAnimation animateIn="tada">
          <h2 className="text-6xl font-semibold capitalize">Send Gift</h2>
        </ScrollAnimation>
        <div
          className="lg:max-w-40 max-w-20 md:max-w-24"
          data-aos="fade-up"
          data-aos-easing="linear"
        >
          <img
            src="assets/icons/house.png"
            alt=""
            draggable="false"
          />
        </div>

        <div
          className="flex flex-col items-center justify-center mb-4 text-xs font-semibold text-center font-boldflex sm:text-xl"
          data-aos="fade-up"
          data-aos-easing="linear"
        >
          <p className="md:w-1/2 lg:w-4/5 sm:w-4/5">
            Jl. Sindangkarsa No.199 rt03/010 (Gg. Haji Jamal) Kel. Sukamaju
            Baru, Kota Depok, Tapos, Jawa Barat, 16455
          </p>
          <p className="mt-2">Nama Penerima: Syafira / Fira</p>
        </div>
      </div>
    </section>
  );
}
