import { BASE_URL } from "./constants";


export const fetchData = (url) => {
  url = `${BASE_URL}${url}`;
  try {
    return fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((data) => {
        return Promise.resolve(data.json());
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  } catch (err) {
    const error = { error: err };
    return Promise.reject(error);
  }
};
