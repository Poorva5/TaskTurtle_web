import axios from axios;

const apiGet = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    timeout: 15000,
    headers: {
        "Content-Type": "Application/json",
        "Authorization": `Token ${localStorage.getItem('accessToken')}`
    }
})

