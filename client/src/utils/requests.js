import axios from 'axios';

const baseHeaders = {
    'Content-Type': 'application/json; charset=utf-8'
};

const axiosCustom = axios.create({
    headers: baseHeaders,
    responseType: 'json',
    timeout: 30000,
});


// TODO: Add middleware interceptors on request if needed
axiosCustom.interceptors.response.use(response => {
    return response.data;
});

const request = axiosCustom.request;
const get = axiosCustom.get;

export {
     request, get
}
