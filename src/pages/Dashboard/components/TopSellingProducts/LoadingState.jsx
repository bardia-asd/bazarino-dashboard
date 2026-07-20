import Skeleton from "@/components/common/Skeleton";

/**
 * Loading state component for list items.
 *
 * Displays skeleton placeholders while
 * product/order data is being fetched.
 */
const LoadingState = () => {
    return (
        <div className="space-y-3">
            {/* Render multiple skeleton rows */}
            {Array.from({ length: 5 }).map((_, index) => (
                <div
                    key={index}
                    className="flex items-center justify-between gap-3 px-2.5 py-2">
                    {/* Item information skeleton */}
                    <div className="flex items-center gap-3">
                        {/* Avatar/icon placeholder */}
                        <Skeleton className="size-10 rounded-lg" />

                        {/* Title and description placeholders */}
                        <div className="space-y-2">
                            <Skeleton className="h-3 w-32" />
                            <Skeleton className="h-2.5 w-24" />
                        </div>
                    </div>

                    {/* Value/price placeholder */}
                    <Skeleton className="h-4 w-20" />
                </div>
            ))}
        </div>
    );
};

export default LoadingState;
