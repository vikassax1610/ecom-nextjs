import Image from "next/image";
import { sevenWonders } from "../../sevenWonders";
export default async function ModalPage({ params }) {
  const { id } = await params;
  const wonders = sevenWonders.find((sw) => sw.id == id);

  return (
    <>
      <div className=" p-4 z-50 fixed inset-0 bg-black/70  flex flex-col items-center gap-4">
        <h1 className="text-2xl text-white font-bold">{wonders.title}</h1>
        <Image
          src={wonders.image}
          alt={wonders.title}
          width={400}
          height={400}
          className="rounded-xl aspect-square"
        />
        <p className="text-lg text-white/70">{wonders.description}</p>
        <p className="text-lg text-white/80 px-4 py-1 rounded-2xl bg-blue-500 inline">
          📍: {wonders.location}
        </p>
      </div>
    </>
  );
}
