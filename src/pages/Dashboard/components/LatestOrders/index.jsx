import { Link } from "react-router";
import { ArrowUpLeft } from "lucide-react";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/common/Card";
import Button from "@/components/common/Button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/common/Table";
import TableSkeleton from "@/components/common/Table/TableSkeleton";
import TableEmpty from "@/components/common/Table/TableEmpty";
import { useLatestOrders } from "@/features/orders/hooks/useLatestOrders";
import LatestTableRow from "./LatestTableRow";

const LatestOrders = () => {
    const { orders, loading, error, refetch } = useLatestOrders();

    return (
        <Card className="xl:col-span-2">
            <CardHeader className="items-end">
                <div>
                    <CardTitle>آخرین سفارش‌ها</CardTitle>

                    <CardDescription className="mt-1">
                        ۶ سفارش اخیر ثبت‌شده در سیستم
                    </CardDescription>
                </div>
                <Button as={Link} to="orders" variant="ghost" size="sm">
                    مشاهده همه
                    <ArrowUpLeft size={16} />
                </Button>
            </CardHeader>
            <CardContent>
                {loading && <TableSkeleton columns={6} />}
                {!loading && !error && orders.length === 0 && (
                    <TableEmpty
                        title="سفارشی وجود ندارد"
                        description="هنوز هیچ سفارشی ثبت نشده است"
                    />
                )}
                {!loading && !error && orders.length > 0 && (
                    <Table>
                        <TableHeader>
                            <TableRow className="text-xs">
                                <TableHead>شناسه</TableHead>
                                <TableHead>مشتری</TableHead>
                                <TableHead>فروشنده</TableHead>
                                <TableHead>اقلام</TableHead>
                                <TableHead>مبلغ</TableHead>
                                <TableHead>وضعیت</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {orders.map((order) => (
                                <LatestTableRow key={order.id} order={order} />
                            ))}
                        </TableBody>
                    </Table>
                )}
            </CardContent>
        </Card>
    );
};

export default LatestOrders;
