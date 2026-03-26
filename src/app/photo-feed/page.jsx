import Link from "next/link";
import { wonderImages } from "./wonders";
import Image from "next/image";
export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-8">Photo Feed</h1>
      <div className="grid grid-cols-5 gap-8 mx-8 my-4">
        {wonderImages.map((wonder) => {
          return (
            <Link
              key={wonder.id}
              href={`/photo-feed/${wonder.id}`}
              scroll={false}
              className="flex flex-col items-center"
            >
              <Image
                src={wonder.image}
                alt={wonder.title}
                width={300}
                height={300}
                className="object-cover aspect-square w-full"
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
