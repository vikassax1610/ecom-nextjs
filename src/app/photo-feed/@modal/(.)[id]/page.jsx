import Image from "next/image";
import { wonderImages } from "../../wonders";

export default async function PhotoModal({ params }) {
  const { id } = await params;

  const photo = wonderImages.find((wonder) => wonder.id === id);

  if (!photo) return <div>Photo Not Found</div>;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-black text-white p-4 max-w-2xl flex flex-col items-center">
        <Image
          src={photo.image}
          alt={photo.title}
          width={400}
          height={400}
          className="object-cover aspect-square"
        />
        <h1 className="text-xl font-bold text-center my-4">{photo.title}</h1>
        <p className="text-center">{photo.description}</p>
      </div>
    </div>
  );
}
