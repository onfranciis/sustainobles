import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gray-50 text-gray-800">
      <h1 className="text-9xl font-extrabold text-[#217621] tracking-widest">
        404
      </h1>

      <div className="mt-8 text-center">
        <h3 className="text-2xl md:text-3xl font-bold">
          Sorry, we couldn&apos;t find that page.
        </h3>
        <p className="mt-4 text-gray-500 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block px-6 py-3 bg-[#217621] text-white font-semibold rounded-lg hover:bg-[#1d451d] transition-colors duration-200"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
