import Features from "../../components/featured/Features";
import Chart from "../../components/chart/Chart";
import WidgetSmall from "../../components/widgetsmall/WidgetSmall";
import WidgetLarge from "../../components/widgetlarge/WidgetLarge";
import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import "./Home.css";

const Home = () => {
  const MONTH = useMemo(
    () => [
      "January",
      "Febraury",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    []
  );

  const [data, setData] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get("/users/stats", {
          headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accesToken,
          },
        });
        const stats = res.data.sort(function (a, b) {
          return a._id - b._id;
        });
        stats.map((item) =>
          setData((prev) => [
            ...prev,
            { name: MONTH[item._id - 1], "New User": item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [MONTH]);
  console.log(data);

  return (
    <div className="home">
      <Features />
      <Chart data={data} dataKey="New User" title="User Analytics" grid />
      <div className="widgets">
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  );
};

export default Home;
