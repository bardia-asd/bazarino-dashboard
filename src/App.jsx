import { Link } from "react-router";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "./components/common/Pagination";

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
                    <TableRow>
                        <TableCell>#1001</TableCell>
                        <TableCell>علی رضایی</TableCell>
                        <TableCell>تکمیل شده</TableCell>
                        <TableCell className="text-right">
                            ۱,۲۵۰,۰۰۰ تومان
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>#1002</TableCell>
                        <TableCell>سارا احمدی</TableCell>
                        <TableCell>در حال پردازش</TableCell>
                        <TableCell className="text-right">
                            ۸۹۰,۰۰۰ تومان
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>#1003</TableCell>
                        <TableCell>محمد کریمی</TableCell>
                        <TableCell>لغو شده</TableCell>
                        <TableCell className="text-right">
                            ۵۴۰,۰۰۰ تومان
                        </TableCell>
                    </TableRow>
                </TableBody>

                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={3}>مجموع</TableCell>

                        <TableCell className="text-right">
                            ۲,۶۸۰,۰۰۰ تومان
                        </TableCell>
                    </TableRow>
                </TableFooter>
            </Table>

            <Pagination className="mt-6">
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious as={Link} href="#" />
                    </PaginationItem>

                    <PaginationItem>
                        <PaginationLink as={Link} href="#">
                            1
                        </PaginationLink>
                    </PaginationItem>

                    <PaginationItem>
                        <PaginationLink as={Link} href="#" isActive>
                            2
                        </PaginationLink>
                    </PaginationItem>

                    <PaginationItem>
                        <PaginationLink as={Link} href="#">
                            3
                        </PaginationLink>
                    </PaginationItem>

                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>

                    <PaginationItem>
                        <PaginationLink as={Link} href="#">
                            10
                        </PaginationLink>
                    </PaginationItem>

                    <PaginationItem>
                        <PaginationNext as={Link} href="#" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
};

export default App;
