"use client";
import { useRouter } from "next/navigation";
export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    alert("✅ order has been placed");
    router.push("/products");
  };
  return (
    <div className="flex flex-col items-center justify-center gap-4 h-full">
      <h1 className="text-4xl text-pink-500 font-bold">✅order placed</h1>
      <button
        onClick={handleClick}
        className="bg-blue-500 rounded-xl text-white px-8 py-2 text-2xl"
      >
        place order
      </button>
    </div>
  );
}
