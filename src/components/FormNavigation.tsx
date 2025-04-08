"use client";

export default function FormNavigation({
  isFirstStep,
  isLastStep,
  onPrevClick,
  isSubmitting = false,
}: {
  isFirstStep: boolean;
  isLastStep: boolean;
  onPrevClick: () => void;
  isSubmitting?: boolean;
}) {
  return (
    <div className="flex justify-between pt-4">
      {!isFirstStep && (
        <button
          type="button"
          onClick={onPrevClick}
          disabled={isSubmitting}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 disabled:opacity-50"
        >
          Previous
        </button>
      )}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`px-4 py-2 ml-auto ${
          isLastStep
            ? "bg-green-600 hover:bg-green-700 focus:ring-green-500"
            : "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500"
        } text-white rounded-md focus:outline-none focus:ring-2 disabled:opacity-50`}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            {isLastStep ? "Submitting..." : "Loading..."}
          </span>
        ) : isLastStep ? (
          "Submit"
        ) : (
          "Next"
        )}
      </button>
    </div>
  );
}