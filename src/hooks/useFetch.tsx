import { useEffect, useState } from "react";

export function useFetch<T>(url: string, method: string, body: object): T | undefined {
    const [data, setData] = useState();

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(url, {
                method: method,
                body: JSON.stringify(body)
            });
            const data = await response.json();
            setData(data);
        }
        fetchData();
    }, [url, method])

    return data;
}