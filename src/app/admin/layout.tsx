import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard | Shine Bros",
  description: "Manage your car detailing bookings",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-900">
      {children}
    </div>
  );
}
