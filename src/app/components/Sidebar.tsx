// components/Sidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/dashboard/appointments", label: "Appointments" },
  { href: "/dashboard/queue", label: "Waiting Queue" },
  { href: "/dashboard/staff", label: "Staff" },
  { href: "/dashboard/services", label: "Services" },
  { href: "/dashboard/activity-logs", label: "Activity Logs" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white border-r min-h-screen p-4">
      <div className="text-lg font-bold mb-6">Smart Queue Manager</div>

      <nav className="space-y-1">
        {nav.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={[
                "block px-3 py-2 rounded",
                active ? "bg-gray-100 font-semibold" : "hover:bg-gray-50",
              ].join(" ")}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
