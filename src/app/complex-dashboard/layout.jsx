import UserAnalytics from "./@users/page";
import RevenueMetrics from "./@revenue/page";
import Notifications from "./@notification/page";
export default function ComplexDashboardLayout({
  children,
  users,
  revenue,
  notifications,
}) {
  return (
    <>
      <div className="">{children}</div>
      <div className="grid grid-cols-3 gap-6 mx-8 my-4">
        {/* Left Section (2 stacked cards) */}
        <div className="col-span-1 flex flex-col gap-4">
          <UserAnalytics />
          <RevenueMetrics />
        </div>

        {/* Right Section (takes more space) */}
        <div className="col-span-2">
          <Notifications />
        </div>
      </div>
    </>
  );
}
