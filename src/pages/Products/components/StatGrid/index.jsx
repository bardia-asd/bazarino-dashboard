import { productStats } from "@/data/productStats";
import StatCard from "./StatCard";

/**
 * Product statistics grid.
 *
 * Renders a responsive grid of statistic cards
 * using the product metrics data.
 */
const StatGrid = () => {
    return (
        <section>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {/* Product statistic cards */}
                {productStats.map((stat) => (
                    <StatCard
                        key={stat.label}
                        value={stat.value}
                        label={stat.label}
                        color={stat.color}
                    />
                ))}
            </div>
        </section>
    );
};


export default StatGrid;
