import Link from "next/link";

export default function F2() {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 m-8 border h-full">
      <h2 className="text-xl font-semibold mb-4">F2 Page</h2>
      <p className="text-gray-600">
        This is the F2 page. You can add your content here.
      </p>
      <Link href="/f4" className="text-lg font-bold text-blue-600 ml-4">
        Go to F4
      </Link>
    </div>
  );
}
