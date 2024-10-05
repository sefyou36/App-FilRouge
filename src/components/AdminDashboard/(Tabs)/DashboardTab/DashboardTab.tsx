import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { ChartData } from "chart.js";
import "./DashboardTab.scss";

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DashboardTab: React.FC = () => {
  // Traffic data for the line chart
  const data: ChartData<"line"> = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Website Traffic",
        data: [3000, 4000, 3500, 5000, 7000, 6500, 8000], // Sample data
        fill: false,
        borderColor: "#007bff",
        tension: 0.1,
      },
    ],
  };

  // Chart options
  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: true,
        text: "Traffic Over Time",
      },
    },
  };

  return (
    <section className="dashboard-tab">
      <div className="dashboard-tab__container">
        <div className="dashboard-tab__container__items">
          <div className="dashboard-tab__container__items__item">
            <span>26K</span>
            <h3>Users</h3>
          </div>
          <div className="dashboard-tab__container__items__item">
            <span>$6.200</span>
            <h3>Income</h3>
          </div>
          <div className="dashboard-tab__container__items__item">
            <span>12</span>
            <h3>Drivers</h3>
          </div>
          <div className="dashboard-tab__container__items__item">
            <span>6</span>
            <h3>Restaurants</h3>
          </div>
        </div>

        <div className="dashboard-tab__container__chart">
          <h2>Traffic</h2>
          {/* Line Chart for Traffic */}
          <Line data={data} options={options} />
        </div>
      </div>
    </section>
  );
};

export default DashboardTab;
