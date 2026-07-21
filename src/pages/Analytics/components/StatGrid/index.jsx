import { analyticsStats } from "@/data/analyticsStatData";
import StatCard from "./StatCard";

/**
 * Statistics grid.
 *
 * Renders a responsive grid of statistic cards
 * using the provided analytics data.
 */
const StatGrid = () => {
    return (
        <section>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {/* Statistic cards */}
                {analyticsStats.map((stat) => (
                    <StatCard
                        key={stat.label}
                        value={stat.value}
                        unit={stat.unit}
                        label={stat.label}
                        delta={stat.delta}
                    />
                ))}
            </div>
        </section>
    );
};

export default StatGrid;
