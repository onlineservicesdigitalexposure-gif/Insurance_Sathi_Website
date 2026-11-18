"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-900 font-sans p-6">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-lg border border-slate-200 p-8 text-center">
          <h2 className="text-2xl font-extrabold text-[#0F2E8A] mb-3">
            Something{" "}
            <span className="bg-gradient-to-r from-[#FF6B00] via-[#16A34A] to-[#0284C7] bg-clip-text text-transparent">
              went wrong
            </span>
          </h2>
          <p className="text-sm text-slate-600 mb-6">
            An unexpected error occurred. Please try refreshing or return to the homepage.
          </p>
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex items-center justify-center rounded-xl bg-blue-700 px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-blue-800 transition-colors cursor-pointer"
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
