import {getMoviesByTitle} from "../../src/assets/api.js";
import React, {useState, useEffect, useRef} from "react";

export default function useMovieData(query, setMoviesData){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const abortController = useRef(new AbortController());

    useEffect(() => {
        const fetchMoviesData = async () => {
            const response = await getMoviesByTitle(query, { signal: abortController.current.signal });

            if (!response.ok) throw new Error('Failed to fetch data');

            try {
                const data = await response.json();
                setData(data.Search);
                if (data && data.Search) {
                    setMoviesData(data.Search);
                }
            } catch (e) {
                if (e.name !== 'AbortError') {
                    console.error(e.message);
                }
            } finally {
                setLoading(false);
            }

            if (!query.length) {
                setData([]);
                setMoviesData([]);
            }
        };

        abortController.current.abort();
        abortController.current = new AbortController();
        fetchMoviesData();

        return () => {
            abortController.current.abort();
        };
    }, [query, setMoviesData]);

    return { data, loading };
}
