import axios from "axios";

const URL = "https://restcountries.eu/rest/v2/name";

export const fetchCapital = async (country) => {
  const { data } = await axios.request({
    url: country,
    baseURL: URL,
  });

  return data;
};
