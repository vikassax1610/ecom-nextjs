import Link from "next/link";

export default function Archived() {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 border h-full">
      <h2 className="text-xl font-semibold mb-4">Archived Notifications</h2>

      <ul className="space-y-3">
        <li className="p-3 bg-gray-100 rounded-lg">📦 Order archived</li>
        <li className="p-3 bg-gray-100 rounded-lg">👤 Old user removed</li>
        <li className="p-3 bg-gray-100 rounded-lg">
          🔒 Security alert resolved
        </li>
      </ul>

      <div className="mt-8">
        <Link
          href="/complex-dashboard"
          className="text-blue-500 hover:underline"
        >
          Back to notifications
        </Link>
      </div>
    </div>
  );
}
