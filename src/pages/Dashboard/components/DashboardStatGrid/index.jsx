import { kpiData } from "@/data/kpiData";

import KPICard from "./KPICard";

const DashboardStatGrid = () => {
    return (
        <section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-4">
                {kpiData.map((item) => (
                    <KPICard key={item.title} {...item} />
                ))}
            </div>
        </section>
    );
};

export default DashboardStatGrid;
