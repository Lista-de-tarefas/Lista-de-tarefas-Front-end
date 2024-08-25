import { createContext, useState } from "react";

interface interfaceErrorContext {
    error: boolean;
    setError: React.Dispatch<React.SetStateAction<boolean>>;
    validation: boolean;
    setValidation: React.Dispatch<React.SetStateAction<boolean>>;
    deleteTaskValidation: boolean;
    setDeleteTaskValidation: React.Dispatch<React.SetStateAction<boolean>>;
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
}

export const Context = createContext<interfaceErrorContext | undefined>(undefined);

export function ContextProvider({ children }: { children: React.ReactNode }) {
    const [error, setError] = useState<boolean>(false);
    const [validation, setValidation] = useState<boolean>(false);
    const [deleteTaskValidation, setDeleteTaskValidation] = useState<boolean>(false);
    const [count, setCount] = useState<number>(0);

    return (
        <Context.Provider value={{
            error,
            setError,
            validation,
            setValidation,
            count,
            setCount,
            deleteTaskValidation,
            setDeleteTaskValidation
        }}>
            {children}
        </Context.Provider>
    )
}