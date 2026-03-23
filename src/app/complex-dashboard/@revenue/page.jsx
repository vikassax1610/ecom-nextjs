export default function RevenueMetrics() {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 border">
      <h2 className="text-xl font-semibold mb-4">Revenue Metrics</h2>

      <div className="space-y-2">
        <p>Total Revenue: <span className="font-bold">₹2,45,000</span></p>
        <p>Monthly Revenue: <span className="font-bold text-green-600">₹45,000</span></p>
        <p>Growth: <span className="font-bold text-blue-600">+12%</span></p>
      </div>
    </div>
  );
}