import Link from "next/link";

export default function Notifications() {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 border h-full">
      <h2 className="text-xl font-semibold mb-4">Notifications</h2>

      <ul className="space-y-3">
        <li className="p-3 bg-gray-100 rounded-lg">🎉 New user registered</li>
        <li className="p-3 bg-gray-100 rounded-lg">
          💰 Payment received ₹5,000
        </li>
        <li className="p-3 bg-gray-100 rounded-lg">⚠️ Server load is high</li>
        <li className="p-3 bg-gray-100 rounded-lg">✅ New order completed</li>
      </ul>

      <div className="mt-8">
        <Link
          href="/complex-dashboard/archived"
          className="text-blue-500 hover:underline"
        >
          View archived notifications
        </Link>
      </div>
    </div>
  );
}
