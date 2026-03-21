import { products } from "@/app/data/products";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) {
    return {
      title: "Product Not Found",
      description: "This product does not exist",
    };
  }
  return {
    title: product.title,
    description: product.description,
  };
}

export default async function ProductDetails({ params }) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return <h1>Product not found</h1>;
  }

  const discountedPrice = Math.round(
    product.price - (product.price * product.discount) / 100,
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT: Images */}
        <div>
          <Image
            src={product.image}
            alt={product.title}
            width={500}
            height={500}
            className="rounded-lg border"
            priority
          />

          {/* Thumbnail images */}
          <div className="flex gap-4 mt-4">
            {product.images.map((img, i) => (
              <Image
                key={i}
                src={img}
                alt="thumb"
                width={100}
                height={100}
                className="rounded border cursor-pointer hover:scale-105 transition"
              />
            ))}
          </div>
        </div>

        {/* RIGHT: Details */}
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{product.title}</h1>

          <p className="text-gray-600">{product.description}</p>

          {/* Rating */}
          <p className="text-yellow-500 font-semibold text-lg">
            ⭐ {product.rating}
          </p>

          {/* Price */}
          <div className="flex items-center gap-4">
            <p className="text-2xl font-bold text-green-600">
              ₹ {discountedPrice}
            </p>

            <p className="line-through text-gray-500">₹ {product.price}</p>

            <span className="text-red-500 font-semibold">
              {product.discount}% OFF
            </span>
          </div>

          {/* Stock */}
          <p
            className={`font-semibold ${
              product.stock > 0 ? "text-green-600" : "text-red-500"
            }`}
          >
            {product.stock > 0
              ? `In Stock (${product.stock} left)`
              : "Out of Stock"}
          </p>

          {/* Category */}
          <p className="text-sm text-gray-500">Category: {product.category}</p>

          {/* Buttons */}
          <div className="flex gap-4 mt-4">
            <button className="bg-yellow-400 px-6 py-2 rounded font-semibold hover:bg-yellow-500 transition">
              Add to Cart
            </button>

            <button className="bg-orange-500 text-white px-6 py-2 rounded font-semibold hover:bg-orange-600 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
