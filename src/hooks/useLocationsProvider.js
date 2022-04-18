import React, { useCallback, useMemo } from 'react';

const useLocationsProvider = () => {
    const fetchLocations = useCallback(async() => {
        return fetch(`${process.env.REACT_APP_API_HOST}/api/locations`)
            .then(response => response.json())
    }, [])

    return useMemo(() => ({
        fetchLocations: fetchLocations,
    }), [fetchLocations]);
};

export default useLocationsProvider;
