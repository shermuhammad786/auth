import axios from "axios";
export const useFetch = async (url,method) => {
    try {
        const response = await axios[method](url);
        return response
    } catch (error) {
        console.log(error.message)
    }
}