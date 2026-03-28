import { sevenWonders } from "../sevenWonders";
import Image from "next/image";
export default async function WondersPage({ params }) {
  const { id } = await params;
  const wonders = sevenWonders.find((p) => p.id == id);
  if (!wonders) {
    return (
      <h2 className="text-5xl text-center text-red-500">wonder not found</h2>
    );
  }
  return (
    <>
      <div className=" p-8 bg-red-500  flex h-full w-full flex-col items-center gap-4">
        <Image
          src={wonders.image}
          alt={wonders.title}
          width={600}
          height={600}
          className="rounded-xl aspect-video"
        />
        <h1 className="text-2xl text-white font-bold">{wonders.title}</h1>
        <p className="text-lg text-white/70">{wonders.description}</p>
        <p className="text-lg text-white/80 px-4 py-1 rounded-2xl bg-blue-500 inline">
          📍: {wonders.location}
        </p>
      </div>
    </>
  );
}
