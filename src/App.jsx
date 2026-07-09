import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./components/common/Card";
import Button from "./components/common/Button";

const App = () => {
    return (
        <div className="min-h-screen font-vazirmatn text-foreground bg-background">
            <div className="p-5">
                <Card className="p-4 max-w-lg">
                    <CardHeader>
                        <div>
                            <CardTitle>Dashboard Overview</CardTitle>
                            <CardDescription>
                                Summary of your account.
                            </CardDescription>
                        </div>
                        <CardAction>
                            <Button size="sm">Add Product</Button>
                        </CardAction>
                    </CardHeader>

                    <CardContent>
                        <p className="text-sm text-muted-foreground">
                            This is the main content of the card.
                        </p>
                    </CardContent>

                    <CardFooter>
                        <Button variant="outline">Cancel</Button>
                        <Button>Save</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
};

export default App;
