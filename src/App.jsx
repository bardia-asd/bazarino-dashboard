import Skeleton from "./components/common/Skeleton";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "./components/common/Table";

const App = () => {
    return (
        <div className="p-5">
            <Table>
                <TableCaption>لیست سفارش‌های اخیر</TableCaption>

                <TableHeader>
                    <TableRow>
                        <TableHead>شماره سفارش</TableHead>
                        <TableHead>مشتری</TableHead>
                        <TableHead>وضعیت</TableHead>
                        <TableHead className="text-right">مبلغ</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <TableRow key={index}>
                            <TableCell>
                                <Skeleton className="h-4 w-20" />
                            </TableCell>

                            <TableCell>
                                <Skeleton className="h-4 w-32" />
                            </TableCell>

                            <TableCell>
                                <Skeleton className="h-4 w-24" />
                            </TableCell>

                            <TableCell className="text-right">
                                <Skeleton className="ml-auto h-4 w-24" />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>

                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={3}>
                            <Skeleton className="h-4 w-16" />
                        </TableCell>

                        <TableCell className="text-right">
                            <Skeleton className="ml-auto h-4 w-28" />
                        </TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    );
};

export default App;
