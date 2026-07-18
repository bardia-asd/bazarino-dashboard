/**
 * Custom legend component for pie charts.
 *
 * Provides a customized legend layout with:
 * - Sorting items by value (largest first)
 * - Color indicators matching chart segments
 * - Persian number formatting
 * - Percentage display
 *
 * Designed to be used with Recharts PieChart Legend component.
 */
const PieCustomLegend = ({ payload }) => {
    // Sort legend items from highest value to lowest value.
    const sortedItems = [...payload].sort(
        (a, b) => b.payload.value - a.payload.value,
    );

    return (
        <div className="flex flex-col gap-2">
            {sortedItems.map((item) => (
                <div
                    key={item.value}
                    className="flex items-center justify-between gap-2 text-xs">
                    {/* Pie segment color indicator */}
                    <span
                        className="inline-block size-2.5 rounded-full"
                        style={{
                            backgroundColor: item.color,
                        }}
                    />

                    {/* Category label */}
                    <span className="flex-1 text-muted-foreground truncate">
                        {item.value}
                    </span>

                    {/* Category percentage value */}
                    <span className="font-medium">
                        {formatNumberFa(item.payload.value)}%
                    </span>
                </div>
            ))}
        </div>
    );
};

export default PieCustomLegend;
