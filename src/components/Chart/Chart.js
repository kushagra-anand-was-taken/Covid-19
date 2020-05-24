import React from "react";
import { useEffect, useState } from "react";
import { fetchDailyData } from "../../api/index";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";
const Chart = ({ data, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const data = await fetchDailyData();

      setDailyData(data);
    };

    fetchApi();
  }, []);

  const barChart = data.confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
            ],
            data: [
              data.confirmed.value,
              data.recovered.value,
              data.deaths.value,
            ],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` },
      }}
    />
  ) : null;

  const lineChart = dailyData[0] ? (
    <Line
      data={{
        labels: dailyData.map(({ reportDate }) => reportDate),
        datasets: [
          {
            data: dailyData.map((data) => data.confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            // backgroundColor: "rgba(99, 239, 246, 0.4)",
            fill: true,
          },
          {
            data: dailyData.map((data) => data.deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return (
    <div className={styles.chart}>
      <div className={`container pb-5`}>{country ? barChart : lineChart}</div>
    </div>
  );
};

export default Chart;
