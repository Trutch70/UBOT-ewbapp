import { useCallback, useMemo } from 'react';

const useReceiversProvider = () => {
    const fetchReceivers = useCallback(async (page = 1, limit = 8, filters = null) => {
        let url = process.env.REACT_APP_API_HOST + '/api/receivers?page=' + page + '&limit=' + limit;
        if (filters) {
            for (const [key, value] of Object.entries(filters)) {
                url += `&${key}=${value}`;
            }
        }

        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Something went wrong.');
                }
                return response.json();
            })
            ;
    }, [])

    const fetchReceiver = useCallback(async (id) => {
        return fetch(process.env.REACT_APP_API_HOST + '/api/receivers/' + id)
            .then(response => {
                if (!response.ok) {
                    if (response.status === 404) {
                        throw new Error('NOTFOUND');
                    }
                    throw new Error('Something went wrong.');
                }

                return response.json();
            })
            ;
    }, []);


    return useMemo(() => {
        return {
            fetchReceiver,
            fetchReceivers,
        }
    }, [fetchReceiver, fetchReceivers]);
}

export default useReceiversProvider;
