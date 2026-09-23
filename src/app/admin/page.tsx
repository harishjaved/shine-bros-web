"use client";

import { useEffect, useState } from "react";
import { Calendar, Clock, Car, Phone, User, MessageSquare, RefreshCcw, Home } from "lucide-react";
import Link from "next/link";

export default function AdminDashboard() {
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/bookings');
      if (!response.ok) throw new Error("Failed to fetch bookings");
      const data = await response.json();
      setBookings(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const formatDate = (isoString: string) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short', day: 'numeric', year: 'numeric',
      hour: 'numeric', minute: 'numeric', hour12: true
    }).format(new Date(isoString));
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6 md:p-10 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-black font-heading tracking-tight text-[var(--color-primary)]">Admin Dashboard</h1>
            <p className="text-gray-500 mt-1">Manage your booking requests</p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={fetchBookings}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-colors font-medium text-sm"
            >
              <RefreshCcw size={16} className={loading ? "animate-spin" : ""} />
              Refresh
            </button>
            <Link 
              href="/"
              className="flex items-center gap-2 px-4 py-2 bg-[var(--color-primary)] text-white rounded-lg shadow-sm hover:bg-red-700 transition-colors font-medium text-sm"
            >
              <Home size={16} />
              View Site
            </Link>
          </div>
        </div>

        {/* Content */}
        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-8 border border-red-200">
            Error loading bookings: {error}
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          {loading && bookings.length === 0 ? (
            <div className="p-10 text-center text-gray-500">Loading bookings...</div>
          ) : bookings.length === 0 ? (
            <div className="p-10 text-center text-gray-500">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar size={24} className="text-gray-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">No Bookings Yet</h3>
              <p>When customers submit the booking form, they will appear here.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase tracking-wider text-gray-500">
                    <th className="p-4 font-bold">Customer</th>
                    <th className="p-4 font-bold">Vehicle</th>
                    <th className="p-4 font-bold">Service</th>
                    <th className="p-4 font-bold">Preferred Date/Time</th>
                    <th className="p-4 font-bold">Submitted</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {bookings.map((booking) => (
                    <tr key={booking.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4">
                        <div className="flex flex-col">
                          <span className="font-bold text-gray-900 flex items-center gap-1">
                            {booking.name}
                          </span>
                          <span className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                            <Phone size={12} /> {booking.phone}
                          </span>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex flex-col">
                          <span className="font-medium text-gray-900">{booking.vehicleModel}</span>
                          <span className="text-xs text-gray-500 bg-gray-100 w-max px-2 py-0.5 rounded mt-1">
                            {booking.vehicleType}
                          </span>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="font-bold text-sm text-[var(--color-primary)]">
                          {booking.service}
                        </span>
                        {booking.message && (
                          <div className="text-xs text-gray-500 mt-2 max-w-[200px] truncate" title={booking.message}>
                            <MessageSquare size={12} className="inline mr-1" />
                            {booking.message}
                          </div>
                        )}
                      </td>
                      <td className="p-4">
                        <div className="flex flex-col text-sm">
                          <span className="flex items-center gap-1 text-gray-900 font-medium">
                            <Calendar size={14} className="text-[var(--color-primary)]" />
                            {booking.date}
                          </span>
                          <span className="flex items-center gap-1 text-gray-500 mt-1">
                            <Clock size={14} />
                            {booking.time}
                          </span>
                        </div>
                      </td>
                      <td className="p-4 text-xs text-gray-400 font-medium">
                        {formatDate(booking.createdAt)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
