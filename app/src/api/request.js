import axios from "axios";

export const BASE_API_URL =
  "http://ec2-18-224-39-198.us-east-2.compute.amazonaws.com/api";

export const post = async (endpoint, params, headers=null) => {
  try {
    if (headers) {
         const response = await axios.post(
           `${BASE_API_URL}/${endpoint}`,
           params,
           headers
         );
         return response.data;
    } else {
         const response = await axios.post(
           `${BASE_API_URL}/${endpoint}`,
           params
         );
         return response.data;
    }
   
  } catch (err) {
    console.log("Error:", err);
    return null;
  }
};

export const get = async (endpoint, headers) => {
  try {
    const response = await axios.get(
      `${BASE_API_URL}/${endpoint}`, headers
    )

    return response.data;
  } catch (err) {
    console.log(err)
  }
}
