import axios from "axios";

const url = "https://covid19.mathdro.id/api";

const fetchData = async (country) => {
  let changeableUrl = url;

  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }

  const {
    data: { confirmed, recovered, deaths, lastUpdate },
  } = await axios.get(changeableUrl);

  const modifiedData = {
    confirmed,
    recovered,
    deaths,
    lastUpdate,
  };
  return modifiedData;
};

export const fetchDailyData = async () => {
  // const { data } = await axios.get(`${url}/daily`);

  // // console.log(data);

  // const modifiedData = data.map((qwe) => ({
  //   confirmed: qwe.confirmed.total,
  //   deaths: qwe.deaths.total,
  //   date: qwe.reportDate,
  // }));
  // console.log(modifiedData);
  // return modifiedData;

  const { data } = await axios.get(`${url}/daily`);
  // console.log(data);

  return data.map(({ confirmed, deaths, reportDate }) => ({
    confirmed: confirmed.total,
    deaths: deaths.total,
    reportDate,
  }));
};

export const fetchCountries = async () => {
  const {
    data: { countries },
  } = await axios.get(`${url}/countries`);
  return countries.map((country) => country.name);
};

export default fetchData;
