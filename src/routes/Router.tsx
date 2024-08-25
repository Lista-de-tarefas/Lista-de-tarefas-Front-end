import { createBrowserRouter } from "react-router-dom";
import { ContextProvider } from "../context/context";

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
                    <ContextProvider>
                        <Home />
                    </ContextProvider>
                )
            }
        ]
    }
]);