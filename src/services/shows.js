import httpClient from "./httpClient";
import axios from "axios";

const CancelToken = axios.CancelToken;
const source = CancelToken.source();
const cancelTokens = {
  getSchedule: null,
  getAllShows: null
};

const END_POINT = "/schedule";

const getSchedule = async (country, date) => {
  const url = `${END_POINT}?country=${country}&date=${date}`;

  if (cancelTokens.getSchedule !== null) {
    cancelTokens.getSchedule.cancel();
  }

  try {
    const result = httpClient.get(url);
    cancelTokens.getSchedule = source;
    const response = await result;
    return response.data;
  } catch (err) {
    return `Error ${err.response.data.status}: ${err.response.data.message}`;
  }
};

export { getSchedule };
