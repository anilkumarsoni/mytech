import { BASE_URL } from "./constants";


export const httpService = async (url, method = 'GET', body = {}) => {
  url = `${BASE_URL}${url}`;
  try {
    try {
      let options = {
        method,
        headers: {
          "Content-Type": "application/json",
        },
      }
      body = JSON.stringify(body);
      if(body !== '{}') {
        options = { ...options, body } 
      }
      console.log(options)
      const data = await fetch(url, options);
      return await Promise.resolve(data.json());
    } catch (err) {
      return await Promise.reject(err);
    }
  } catch (err) {
    const error = { error: err };
    return Promise.reject(error);
  }
};
