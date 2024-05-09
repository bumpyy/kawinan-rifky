import { CopyToClipboard } from "react-copy-to-clipboard";

export default function Rsvp() {
  return (
    <section className="text-center flex-col flex gap-4">
      <div className="my-8 flex flex-col gap-8 items-center">
        <h2 className="text-6xl capitalize">Share Love</h2>
        <p className="font-semibold md:w-1/2 lg:w-2/5 sm:w-4/5">
          Doa & restu anda di pernikahan kami tentunya sangat berarti. Namun
          jika anda ingin memberi lebih, kami dengan senang hati menerimanya dan
          akan semakin melengkapi kebahagiaan kami.
        </p>
        <div className="lg:max-w-48 max-w-20 md:max-w-24">
          <img
            src="assets/icons/gift.png"
            alt=""
            draggable="false"
          />
        </div>
        <div className="flex flex-col items-center">
          <p className="font-semibold text2">BCA - 6395468069</p>
          <p className="font-semibold">Syafira Nurhanifa Fauziah</p>

          <CopyToClipboard text={"6395468069"}>
            <div className="flex items-center gap-2 text-xl">
              <img
                src="assets/icons/copy.png"
                alt=""
                className="w-4 md:w-6"
              />
              <span>Salin Nomor</span>
            </div>
          </CopyToClipboard>
        </div>

        <div className="flex flex-col items-center">
          <p className="font-semibold">BCA - 6395468077</p>
          <p className="font-semibold">Muhammad Rifky Andreawan</p>

          <CopyToClipboard text={"6395468077"}>
            <div className="flex items-center gap-2 text-xl">
              <img
                src="assets/icons/copy.png"
                alt=""
                className="w-4 md:w-6"
              />
              <span>Salin Nomor</span>
            </div>
          </CopyToClipboard>
        </div>
      </div>

      <div className="my-8 flex flex-col gap-8 items-center">
        <h2 className="text-6xl capitalize">Send Gift</h2>
        <div className="lg:max-w-48 max-w-20 md:max-w-24">
          <img
            src="assets/icons/house.png"
            alt=""
            draggable="false"
          />
        </div>

        <div className="md:w-1/2 lg:w-2/5 sm:w-4/5 font-bold ">
          <p className="mb-4">
            Jl. Sindangkarsa No.199 rt03/010 (Gg. Haji Jamal) Kel. Sukamaju
            Baru, Kota Depok, Tapos, Jawa Barat, 16455
          </p>
          <p>Nama Penerima: Syafira / Fira</p>
        </div>
      </div>
    </section>
  );
}
