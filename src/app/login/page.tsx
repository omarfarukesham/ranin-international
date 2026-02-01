"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

function Spinner() {
  return (
    <span className="inline-flex items-center">
      <span className="h-4 w-4 rounded-full border-2 border-white/50 border-t-white animate-spin" />
    </span>
  );
}

export default function LoginPage() {
  const router = useRouter();

  // ✅ defaults
  const [username, setUsername] = useState("ghost");
  const [password, setPassword] = useState("abc123");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        "https://bhutan-airlines-server-production.up.railway.app/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        },
      );

      if (!res.ok) {
        throw new Error("Invalid username or password");
      }

      const data = await res.json();
      localStorage.setItem("accessToken", data.accessToken);

      router.push("/dashboard");
    } catch (err: any) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    // ✅ center in middle
    <div className="min-h-screen w-full flex items-center justify-center px-4 bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center">
          Doctor Login
        </h2>
        <p className="text-center text-sm text-gray-500 mt-2">
          Sign in to manage appointments & queue
        </p>

        <form onSubmit={handleLogin} className="space-y-4 mt-6">
          <div>
            <label className="text-sm text-gray-600">Username</label>
            <input
              type="text"
              placeholder="ghost"
              className="w-full mt-1 p-3 border rounded-md focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={loading}
              required
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Password</label>
            <input
              type="password"
              placeholder="abc123"
              className="w-full mt-1 p-3 border rounded-md focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
              required
            />
          </div>

          {error ? (
            <p className="text-red-600 text-sm text-center">{error}</p>
          ) : null}

          <button
            type="submit"
            disabled={loading}
            className={[
              "w-full py-3 rounded-md transition text-white font-semibold flex items-center justify-center gap-2",
              loading
                ? "bg-emerald-600/70 cursor-not-allowed"
                : "bg-emerald-600 hover:bg-emerald-700",
            ].join(" ")}
          >
            {loading ? (
              <>
                <Spinner />
                Logging in...
              </>
            ) : (
              "Login"
            )}
          </button>
        </form>

        <p className="text-center text-xs text-gray-500 mt-5">
          Demo credentials prefilled (ghost / abc123)
        </p>
      </div>
    </div>
  );
}
