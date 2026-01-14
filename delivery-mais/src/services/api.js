import axios from "axios";

const api = axios.create({
  baseURL: 'http://192.168.0.100:8082'
});

api.interceptors.request.use(req => {

    const token = localStorage.getItem('sessionToken');

    if (token) {
        req.headers.Authorization = `Bearer ${JSON.parse(token)}`;
    }

    return req;
},
(err) => {
    console.log(err);
});





api.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response && error.response.status === 401 ) {
        localStorage.removeItem('sessionToken');
        document.location = '/login';
    }
    return Promise.reject(error);
});



export default api;