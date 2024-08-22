import { createContext, useState } from "react";

interface interfaceErrorContext {
    error: boolean;
    setError: React.Dispatch<React.SetStateAction<boolean>>
}

export const ErrorContext = createContext<interfaceErrorContext | undefined>(undefined);

export function ErrorContextProvider({ children }: { children: React.ReactNode }) {
    const [error, setError] = useState<boolean>(false);

    return (
        <ErrorContext.Provider value={{ error, setError }}>
            {children}
        </ErrorContext.Provider>
    )
}