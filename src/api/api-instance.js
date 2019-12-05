import axios from "axios";

axios.defaults.baseURL = 'http://localhost';
axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const axiosApi = axios.create({});

export const getData = (url) => {
    return axiosApi.get(url);
};

export const postData = (url, data) => {
    return axiosApi.post(url, data);
};

export const putData = (url, id, data) => {
    return axiosApi.put(`${url}${id}`, data);
};

export const deleteData = (url, id) => {
    return axiosApi.delete(`${url}${id}`);
};

export const getFilterData = (url, apiFilter) => {
    return axiosApi.get(`${url}?filter=${JSON.stringify(apiFilter)}`);
};
