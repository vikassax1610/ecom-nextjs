import Image from "next/image";
import Link from "next/link";
export default function PhotoCard({ wonderImages }) {
  return (
    <div className="grid grid-cols-5 gap-8 mx-8 my-4">
      {wonderImages.map((wonder) => {
        return (
          <div key={wonder.id} className="flex flex-col items-center">
            <Image
              src={wonder.image}
              alt={wonder.title}
              width={300}
              height={300}
            />
          </div>
        );
      })}
    </div>
  );
}
