import Image from "next/image";
import { wonderImages } from "../wonders";

export default async function PhotoPage({ params }) {
  const { id } =  await params;

  const photo = wonderImages.find((wonder) => wonder.id === id);

  if (!photo) return <div>Photo Not Found</div>;

  return (
    <div className="mx-auto my-10 bg-black text-white p-4 max-w-2xl flex flex-col items-center">
      <h1 className="text-xl font-bold text-center my-8">{photo.title}</h1>
      <Image
        src={photo.image}
        alt={photo.title}
        width={400}
        height={400}
        className="object-cover aspect-square"
      />
      <p className="text-center mt-4">{photo.description}</p>
    </div>
  );
}
