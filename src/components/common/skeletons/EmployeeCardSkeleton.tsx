import SkeletonButton from "@/src/components/common/skeletons/SkeletonButton";
import React from "react";

export default function EmployeeCardSkeleton() {
    return (
        <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            {/* Profile */}
            <div className="flex items-center gap-4">
                {/* Profile Image */}
                <div className="h-14 w-14 shrink-0 animate-pulse rounded-full bg-zinc-200 dark:bg-zinc-800" />

                {/* Name + Category */}
                <div className="flex-1 space-y-2">
                    <div className="h-4 w-32 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
                    <div className="h-3 w-20 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
                </div>
            </div>

            {/* Info */}
            <div className="mt-4 space-y-3">
                {/* Specialization */}
                <div className="flex items-center gap-2">
                    <div className="h-3 w-24 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
                    <div className="h-3 w-32 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
                </div>

                {/* Experience */}
                <div className="flex items-center gap-2">
                    <div className="h-3 w-20 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
                    <div className="h-3 w-16 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
                </div>

                {/* Availability */}
                <div className="flex items-center gap-2">
                    <div className="h-3 w-20 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
                    <div className="h-5 w-20 animate-pulse rounded-full bg-zinc-200 dark:bg-zinc-800" />
                </div>
            </div>

            {/* Actions */}
            <div className="mt-5 flex items-center justify-between gap-3">
                <SkeletonButton />
                <SkeletonButton />
                <SkeletonButton />
            </div>
        </div>
    );
}