import axios from 'axios';
import { getToken } from '../utils/token';
// const { REACT_APP_SERVER_BASE_URL } = process.env;
// export const baseUrl = "https://alumini-portal.herokuapp.com/";
// export const baseUrl = 'http://localhost:5000';
export const baseUrl = 'https://real-estate-managment.herokuapp.com/';

const server = axios.create({
    baseURL: baseUrl
});

server.interceptors.request.use(
    (config) => {
        const jwtToken = getToken();
        config.headers = {
            Authorization: `Bearer ${jwtToken}`
        };
        return config;
    },
    (error) => {
        console.log(error);
    }
);

export default server;
