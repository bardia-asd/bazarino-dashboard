import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "./components/common/Avatar";

const App = () => {
    return (
        <div className="p-5">
            <div className="flex items-center gap-4">
                <Avatar>
                    <AvatarImage
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop"
                        alt="کاربر"
                    />
                    <AvatarFallback delayMs={600}>BR</AvatarFallback>
                </Avatar>

                <div>
                    <p className="font-medium">بردیا اسدی</p>
                    <p className="text-sm text-muted-foreground">
                        bardia@example.com
                    </p>
                </div>
            </div>
        </div>
    );
};

export default App;
