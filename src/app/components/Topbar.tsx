// components/Topbar.tsx
"use client";

import { useRouter } from "next/navigation";
// import { clearToken } from "../../../lib/auth";
// import { clearToken } from "@/lib/auth";

export default function Topbar() {
  const router = useRouter();

  const logout = () => {
    // clearToken();
    router.push("/login");
  };

  return (
    <header className="h-14 bg-white border-b flex items-center justify-between px-6">
      <div className="text-sm text-gray-600">
        Smart Appointment & Queue Manager
      </div>

      <button
        onClick={logout}
        className="px-3 py-1.5 rounded bg-black text-white text-sm hover:opacity-90"
      >
        Logout
      </button>
    </header>
  );
}
