import { RouterProvider } from "react-router";
import { routes } from "./router/route";

const App = () => {
    return <RouterProvider router={routes} />;
};

export default App;
