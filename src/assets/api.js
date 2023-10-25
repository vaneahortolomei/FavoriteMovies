export const getMoviesByTitle = async (query, options = {}) => {
    return await fetch(`${import.meta.env.VITE_REACT_APP_BASE_URL}/?s=${query}&apikey=${import.meta.env.VITE_REACT_APP_API_KEY}`, options)
};

export const getMoviesByiD = async id => {
    return await fetch(`${import.meta.env.VITE_REACT_APP_BASE_URL}/?i=${id}&apikey=${import.meta.env.VITE_REACT_APP_API_KEY}`)
};
