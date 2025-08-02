"use client";

interface LoginProps {
  enabled: boolean;
}
export default function LoginToggle({ enabled }: LoginProps) {
  return (
    <div
      className={`mt-8 w-[22rem] rounded-2xl bg-white shadow-lg p-6 flex flex-col gap-4 transition-all duration-700 ${
        enabled
          ? "opacity-100 scale-100 translate-y-0"
          : "opacity-0 scale-90 -translate-y-5 pointer-events-none"
      }`}
    >
      <h2 className="text-xl font-semibold text-gray-800 text-center">
        Welcome back 👋
      </h2>
      <input
        type="email"
        placeholder="Email"
        className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />
      <input
        type="password"
        placeholder="Password"
        className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />
      <button className="mt-2 rounded-md bg-yellow-400 hover:bg-yellow-500 text-white py-2 font-semibold transition">
        Login
      </button>
    </div>
  );
}
