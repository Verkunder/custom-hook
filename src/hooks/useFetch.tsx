import { useEffect, useState } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

const useFetch = (options: AxiosRequestConfig) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const abortController = new AbortController();
                const signal = abortController.signal;
                const res = await axios({ ...options, signal });
                const json = await res.data;
                setResponse(json);
            } catch (error) {
                setError(error);
            }
        };
        fetchData();
    }, []);

    return { response, error };
};

export default useFetch;
