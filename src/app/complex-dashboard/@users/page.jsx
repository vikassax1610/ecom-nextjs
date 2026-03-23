export default function UserAnalytics() {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 border">
      <h2 className="text-xl font-semibold mb-4">User Analytics</h2>

      <div className="space-y-2">
        <p>
          Total Users: <span className="font-bold">12,450</span>
        </p>
        <p>
          Active Users: <span className="font-bold text-green-600">8,320</span>
        </p>
        <p>
          New Signups: <span className="font-bold text-blue-600">540</span>
        </p>
      </div>
    </div>
  );
}
