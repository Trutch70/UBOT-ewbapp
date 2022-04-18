import React, { useCallback, useMemo } from 'react';

const useIndustriesProvider = () => {
    const fetchIndustries = useCallback(async() => {
        return fetch(`${process.env.REACT_APP_API_HOST}/api/industries`)
            .then(response => response.json())
    }, [])

    return useMemo(() => ({
        fetchIndustries,
    }), [fetchIndustries]);
};

export default useIndustriesProvider;
