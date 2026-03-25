export default function ComplexDashboardLayout({
  children,
  users,
  revenue,
  notification,
  login,
}) {
  const isLoggedIn = true; // Simulate user authentication status
  return isLoggedIn ? (
    <>
      <div>{children}</div>

      <div className="grid grid-cols-3 gap-6 mx-8 my-4">
        {/* Left Section */}
        <div className="col-span-1 flex flex-col gap-4">
          {users}
          {revenue}
        </div>

        {/* Right Section */}
        <div className="col-span-2 ">{notification}</div>
      </div>
    </>
  ) : (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white shadow-md rounded-2xl p-6 border w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">
          Please log in to view the dashboard
        </h2>
        {login}
      </div>
    </div>
  );
}
