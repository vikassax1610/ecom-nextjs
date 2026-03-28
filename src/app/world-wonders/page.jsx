import { sevenWonders } from "./sevenWonders";
import Image from "next/image";
import Link from "next/link";
export default function WorldWonder() {
  return (
    <>
      <div className="bg-pink-900 h-full w-full">
        <h1 className=" text-center text-slate-100 text-4xl py-4 font-bold">
          7 wonders of the world{" "}
        </h1>
        <div className="grid grid-cols-4 gap-8 py-8 mx-20">
          {sevenWonders.map((wonder) => {
            return (
              <Link
                href={`/world-wonders/${wonder.id}`}
                key={wonder.id}
                className=" rounded-lg shadow-2xl"
              >
                <Image
                  src={wonder.image}
                  alt={wonder.title}
                  width={400}
                  height={300}
                  className="object-cover rounded-2xl aspect-square"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
