import axios from "axios"

const axiosClient = axios.create({
    baseURL: 'https://backend-gamelink.onrender.com'
})

export default axiosClient;