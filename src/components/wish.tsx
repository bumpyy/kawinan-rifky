import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { yupResolver } from "@hookform/resolvers/yup";
import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { object, string } from "yup";

type wishType = {
  id: number;
  created_at: string;
  name: string;
  wish: string;
};
const supabaseUrl = "https://lqtezptjxusfdaelnmpi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxxdGV6cHRqeHVzZmRhZWxubXBpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUyNjI4MTAsImV4cCI6MjAzMDgzODgxMH0.qOkB4QkB7uhUgIhDa4npapi1gfWvFs7C59pvcn2VP5Y";

const supabase = createClient(supabaseUrl, supabaseKey);

function Comment({ wish }: { wish: wishType }) {
  return (
    <div className="bg-white text-left w-full p-4 rounded-lg shadow-md animate-fade">
      <div>
        <h3 className="font-bold">{wish.name}</h3>
        <p className="text-gray-700 text-sm mb-2">
          {new Date(Date.parse(wish.created_at)).toLocaleDateString("id", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>
      <p className="text-gray-700">{wish.wish}</p>
    </div>
  );
}

export default function Wish() {
  const [wish, setWish] = useState<wishType[] | null>([]);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    getWish();
  }, []);

  async function getWish() {
    const { data } = await supabase
      .from("wish")
      .select()
      .order("id", { ascending: false });

    setWish(data);
  }

  const schema = object({
    name: string().required("Nama perlu diisi"),
    wish: string()
      .required("Ucapan perlu diisi")
      .max(255, "Ucapan tidak boleh lebih dari 255 huruf"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: { name: string; wish: string }) => {
    const { error } = await supabase
      .from("wish")
      .insert({ name: data.name, wish: data.wish });

    if (!error) {
      reset();
      getWish();
      setSubmitted(true);
    }
  };

  return (
    <section className="md:w-1/2 py-8 flex flex-col gap-4 mx-auto w-full text-center">
      <h2 className="text-7xl font-bold">Make a Wish</h2>
      <p className="">
        Suatu kehormatan dan kebahagiaan bagi kami, apabila Bapak/Ibu berkenan
        hadir dan memberikan restu kepada kami.
      </p>
      <form
        className="mt-2 flex flex-col md:mx-8 gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <input
            placeholder="Nama"
            type="text"
            {...register("name")}
            className="w-full bg-primary rounded-3xl placeholder:text-black placeholder:focus:text-primary px-4 py-1"
            id="name"
          />
          <p className="text-left ml-4 text-red-500 text-lg">
            {errors.name?.message}
          </p>
        </div>

        <div className="w-full">
          <textarea
            {...register("wish")}
            id="email"
            className="w-full bg-primary rounded-3xl placeholder:text-black placeholder:focus:text-primary px-4 py-2"
            placeholder="Ucapan"
            rows={4}
          ></textarea>{" "}
          <p className="text-left ml-4 text-red-500 text-lg">
            {errors.wish?.message}
          </p>
        </div>

        <button
          className="bg-primary rounded-xl ml-auto px-4 py-2 w-fit"
          type="submit"
        >
          Submit
        </button>
      </form>

      <div className="max-h-[40rem] overflow-y-auto p-4 flex flex-col gap-4">
        {wish?.map((data) => (
          <Comment
            key={data.id}
            wish={data}
          />
        ))}
      </div>
      <div>
        <AlertDialog
          open={submitted}
          onOpenChange={setSubmitted}
        >
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Ucapan Terkirim</AlertDialogTitle>
              <AlertDialogDescription>
                Terimakasih sudah mengirim ucapanmu ☺.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction className="text-lg">Ok</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </section>
  );
}
