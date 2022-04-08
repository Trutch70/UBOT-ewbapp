export const fetchReceivers = async (page = 1, limit = 8) => {
    return await fetch(process.env.REACT_APP_API_HOST + '/api/receivers?page=' + page + '&limit=' + limit)
        .then(response => response.json())
    ;
}

export const fetchReceiver = async (id) => {
    return await fetch(process.env.REACT_APP_API_HOST + '/api/receivers/' + id)
        .then(response => response.json())
    ;
}
