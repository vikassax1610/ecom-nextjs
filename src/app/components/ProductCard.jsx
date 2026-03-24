import Image from "next/image";
import Link from "next/link";
export default function ProductCard({ product }) {
  return (
    <>
      <div className="bg-cyan/20 border p-4 rounded-lg w-75 flex flex-col">
        <Image
          src={product.image}
          alt={product.title}
          width={250}
          height={250}
          priority
        />
        <Link
          href={`/products/${product.slug}`}
          className="flex items-center justify-between mt-4"
        >
          <h2 className="text-xl font-bold">{product.title}</h2>
          <p className="font-semibold">⭐{product.rating}</p>
        </Link>
        <p className="text-gray-600 truncate">{product.description}</p>
        <p className="text-lg font-semibold mt-2">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </>
  );
}
