export default function ComplexDashboardLayout({
  children,
  users,
  revenue,
  notification, // ⚠️ singular (important)
}) {
  return (
    <>
      <div>{children}</div>

      <div className="grid grid-cols-3 gap-6 mx-8 my-4">
        {/* Left Section */}
        <div className="col-span-1 flex flex-col gap-4">
          {users}
          {revenue}
        </div>

        {/* Right Section */}
        <div className="col-span-2">{notification}</div>
      </div>
    </>
  );
}
