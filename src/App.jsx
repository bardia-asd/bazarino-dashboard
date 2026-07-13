import { RouterProvider } from "react-router";
import { routes } from "./router/route";
import { Toaster } from "./components/common/Toast";

const App = () => {
    return (
        <>
            <RouterProvider router={routes} />
            <Toaster />
        </>
    );
};

export default App;
