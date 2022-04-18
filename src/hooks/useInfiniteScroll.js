import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

const useInfiniteScroll = (apiCallFunction, pageSize, initialPage, offset = 0, instantInit = false, additionalFunctionParams = null) => {
    const scrollElementRef = useRef();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(initialPage);
    const [reachedLimit, setReachedLimit] = useState(false);

    useEffect(() => {
        setCurrentPage(initialPage);
    }, [initialPage, additionalFunctionParams, pageSize]);

    const scrollListener = useCallback(() => {
        if (!scrollElementRef.current || loading) {
            return;
        }
        if (window.scrollY >= (scrollElementRef.current.offsetTop + scrollElementRef.current.offsetHeight - window.innerHeight - offset)) {
            setLoading(true);
            if (!additionalFunctionParams) {
                additionalFunctionParams = [];
            }
            apiCallFunction(currentPage, pageSize, additionalFunctionParams)
                .then(data => {
                    setData(prevState => {
                        return [...prevState, ...data];
                    });
                    if (data.length < pageSize) {
                        setReachedLimit(true);
                    } else {
                        setReachedLimit(false);
                    }
                    setCurrentPage(prevState => prevState + 1);
                    setLoading(false);
                })
            ;
        }
    }, [loading, currentPage, apiCallFunction, offset, pageSize, additionalFunctionParams]);

    useEffect(() => {
        if (instantInit) {
            if (!additionalFunctionParams) {
                additionalFunctionParams = [];
            }
            setLoading(true);
            apiCallFunction(initialPage, pageSize, additionalFunctionParams)
                .then(data => {
                    setData(data);
                    if (data.length < pageSize) {
                        setReachedLimit(true);
                    } else {
                        setReachedLimit(false);
                    }
                    window.scrollTo(0, window.scrollY - 1);
                    setCurrentPage(prevState => prevState + 1);
                    setLoading(false);
                })
            ;
        }
    }, [apiCallFunction, initialPage, instantInit, pageSize, additionalFunctionParams]);

    useEffect(() => {
        if (reachedLimit) {
            return () => {};
        }
        window.addEventListener('scroll', scrollListener);

        return () => {
            window.removeEventListener('scroll', scrollListener);
        }
    }, [scrollListener, reachedLimit]);

    return useMemo(() => {
        return {
            scrollElementRef,
            data,
            loading,
        }
    }, [data, loading]);
};

export default useInfiniteScroll;
