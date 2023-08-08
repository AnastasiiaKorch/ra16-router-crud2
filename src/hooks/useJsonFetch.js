import { useEffect, useState } from 'react';

export default function useJsonFetch(url, deps = null) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const data = await response.json();
                setData(data);
                setError(null);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [url, deps]);


    return [data, loading, error];
}