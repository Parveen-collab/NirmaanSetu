export default function AuthPageSkeleton() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-4 dark:bg-black">
      <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-md dark:bg-zinc-900">
        
        {/* Title */}
        <div className="mb-2 flex justify-center">
          <div className="h-8 w-48 animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-700" />
        </div>

        {/* Description */}
        <div className="mb-6 flex flex-col items-center gap-2">
          <div className="h-4 w-64 animate-pulse rounded bg-zinc-200 dark:bg-zinc-700" />
          <div className="h-4 w-48 animate-pulse rounded bg-zinc-200 dark:bg-zinc-700" />
        </div>

        {/* Country Select */}
        <div className="mb-4">
          <div className="mb-2 h-4 w-28 animate-pulse rounded bg-zinc-200 dark:bg-zinc-700" />

          <div className="h-10 w-full animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-700" />
        </div>

        {/* Phone Input */}
        <div>
          <div className="mb-2 h-4 w-24 animate-pulse rounded bg-zinc-200 dark:bg-zinc-700" />

          <div className="h-10 w-full animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-700" />
        </div>

        {/* Button */}
        <div className="mt-4 flex justify-center">
          <div className="h-10 w-28 animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-700" />
        </div>

      </div>
    </div>
  );
}