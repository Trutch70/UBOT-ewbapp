import { useCallback, useEffect, useRef, useState } from 'react';

const useInfiniteScroll = (apiCallFunction, pageSize, initialPage, offset = 0, instantInit = false) => {
    const scrollElementRef = useRef();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(initialPage);
    const [reachedLimit, setReachedLimit] = useState(false);

    const scrollListener = useCallback(() => {
        if (!scrollElementRef.current || loading) {
            return;
        }
        if (window.scrollY >= (scrollElementRef.current.offsetTop + scrollElementRef.current.offsetHeight - window.innerHeight - offset)) {
            setLoading(true);
            apiCallFunction(currentPage, pageSize)
                .then(data => {
                    setData(prevState => {
                        return [...prevState, ...data];
                    });
                    if (data.length < pageSize) {
                        setReachedLimit(true);
                        window.removeEventListener('scroll', scrollListener);
                    }
                    setCurrentPage(prevState => prevState + 1);
                    setLoading(false);
                })
            ;
        }
    }, [loading, currentPage, scrollElementRef.current]);

    useEffect(() => {
        if (instantInit) {
            setLoading(true);
            apiCallFunction(initialPage, pageSize)
                .then(data => {
                    setData(data);
                    if (data.length < pageSize) {
                        setReachedLimit(true);
                    }
                    window.scrollTo(0, window.scrollY - 1);
                    setCurrentPage(prevState => prevState + 1);
                    setLoading(false);
                })
            ;
        }
    }, []);

    useEffect(() => {
        if (!reachedLimit) {
            window.addEventListener('scroll', scrollListener);

            return () => {
                window.removeEventListener('scroll', scrollListener);
            }
        }
    }, [scrollListener, reachedLimit]);

    return {
        scrollElementRef,
        data,
        loading,
    };
};

export default useInfiniteScroll;
