import { apiUrlBase } from "@/utils/api";
import axios from "axios"

const axiosClient = axios.create({
    baseURL: `${apiUrlBase}`
})

export default axiosClient;