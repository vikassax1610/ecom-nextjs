import Link from "next/link";

export default function Home() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Welcome to Ecom Store</h1>
      <p className="text-lg text-gray-700">
        Discover our wide range of products and enjoy seamless shopping
        experience.
      </p>
      <div className="mt-8">
        <Link
          href="/products"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
}
