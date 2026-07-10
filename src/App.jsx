import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "./components/common/Drawer";
import Button from "./components/common/Button";

const App = () => {
    return (
        <div className="p-5">
            <Drawer direction="left" shouldScaleBackground={false}>
                <DrawerTrigger asChild>
                    <Button>باز کردن منو</Button>
                </DrawerTrigger>

                <DrawerContent className=' max-w-sm sm:max-w-md border-r'>
                    <DrawerHeader>
                        <DrawerTitle>منوی اصلی</DrawerTitle>

                        <DrawerDescription>
                            از این بخش می‌توانید به صفحات مختلف برنامه دسترسی
                            داشته باشید.
                        </DrawerDescription>
                    </DrawerHeader>

                    <nav className="mt-6 flex flex-col gap-2">
                        <Button variant="ghost" className="justify-start">
                            داشبورد
                        </Button>

                        <Button variant="ghost" className="justify-start">
                            محصولات
                        </Button>

                        <Button variant="ghost" className="justify-start">
                            سفارش‌ها
                        </Button>

                        <Button variant="ghost" className="justify-start">
                            کاربران
                        </Button>
                    </nav>

                    <DrawerFooter>
                        <DrawerClose asChild>
                            <Button variant="outline">بستن</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    );
};

export default App;
