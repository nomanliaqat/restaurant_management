import axios from "axios";

const handleError = (error) => {
  if (error.response.status === 401) {
    // const a = document.createElement("a");
    // a.href = "/logout";
    // a.click();
  }
  if (error.response.status >= 400 && error.response.status < 500) {
    if (typeof error.response.data.message === "object") {
      throw new Error(Object.values(error.response.data.message)[0]);
    } else if (Array.isArray(error.response.data.message)) {
      throw new Error(error.response.data.message[0]);
    } else if (typeof error.response.data.message === "string") {
      throw new Error(error.response.data.message);
    }
  }
  throw new Error("Something went wrong!");
};

export const postRequest = (url, formData) =>
  axios
    .post(url, formData)
    .then((response) => response.data)
    .catch((error) => handleError(error));

export const putRequest = (url, formData) =>
  axios
    .put(url, formData)
    .then((response) => response.data)
    .catch((error) => handleError(error));

export const patchRequest = (url, formData) =>
  axios
    .patch(url, formData)
    .then((response) => response.data)
    .catch((error) => handleError(error));

export const getRequest = (url,params) =>
  axios
    .get(url,{params})
    .then((response) => response.data)
    .catch((error) => handleError(error));

export const deleteRequest = (url, data) =>
  axios
    .delete(url, { data })
    .then((response) => response.data)
    .catch((error) => handleError(error));

export const recoverRequest = (url, data) =>
    axios
      .post(url, { data })
      .then((response) => response.data)
      .catch((error) => handleError(error));
  
