import Link from "next/link";

export default function F1() {
  return (
    <div className="bg-white shadow-md rounded-2xl m-8 p-6 border h-full">
      <h2 className="text-xl font-semibold mb-4">F1 Page</h2>
      <p className="text-gray-600">
        This is the F1 page. You can add your content here.
      </p>
      <div className=" mt-4 flex items-center gap-8">
        <Link href={"/f1/f2"} className="text-lg font-bold text-blue-600">
          Go to F2
        </Link>
        <Link href={"/f3"} className="text-lg font-bold text-blue-600 ml-4">
          F3
        </Link>
      </div>
    </div>
  );
}
