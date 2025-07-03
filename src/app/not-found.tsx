import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-md w-full mx-auto text-center px-6">
        <div className="mb-8">
          <div className="text-6 font-bold text-grey mb-2">404</div>
          <div className="w-24 h-1 bg-blue mx-auto mb-6"></div>
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Page Not Found
        </h1>

        <p className="text-gray-600 mb-8 leading-relaxed">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It
          might have been moved, deleted, or you entered the wrong URL.
        </p>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Return to Home
          </Link>

          <div className="text-sm text-gray-500">
            <p>Or try going back to the previous page</p>
          </div>
        </div>
      </div>
    </div>
  );
}
