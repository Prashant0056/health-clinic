export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50 dark:bg-gray-900">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white mb-8">
        Project is starting
      </h1>

      {/* Progress Section */}
      <div className="w-full max-w-lg bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
        <h2 className="text-xl font-medium text-gray-800 dark:text-gray-100 mb-4">
          Project Setup Progress
        </h2>
        <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-4 mb-4">
          <div
            className="bg-blue-600 h-4 rounded-full"
            style={{ width: '10%' }} // You can dynamically adjust progress percentage here
          />
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          10% complete. Continue setting up your project.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mt-8">
        <a
          href="#"
          className="px-6 py-2 text-sm bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          Continue Setup
        </a>
        <a
          href="#"
          className="px-6 py-2 text-sm border border-gray-300 dark:border-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}
