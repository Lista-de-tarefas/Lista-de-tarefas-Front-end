import { createBrowserRouter } from "react-router-dom";
import { ErrorContextProvider } from "../context/error";

import { App } from "../App";
import { Home } from "../pages/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: (
                    <ErrorContextProvider>
                        <Home />
                    </ErrorContextProvider>
                )
            }
        ]
    }
]);