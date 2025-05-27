import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://www.cheapshark.com/api/1.0',
});

export const getDeals = async () => {
    const response = await api.get('/deals');
    return response.data;
};

export const getStores = async () => {
    const response = await api.get('/stores');
    return response.data;
};

export const getGameDetails = async (gameID: string) => {
    const response = await api.get(`/games?id=${gameID}`);
    return response.data;
};
