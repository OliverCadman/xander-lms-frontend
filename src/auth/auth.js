import axios from "axios";

const BASE_API_URL =
  "http://ec2-18-224-39-198.us-east-2.compute.amazonaws.com/api";

export const authenticate = async (endpoint, params) => {
    try {
        const response = await axios.post(`${BASE_API_URL}/${endpoint}`, params);
        return response.data;
    } catch (err) {
        console.log('Error:', err)
    }
}