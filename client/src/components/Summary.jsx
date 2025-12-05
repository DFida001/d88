import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Summary = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("No token found in localStorage");
          window.location.href = "/login";
          return;
        }
        const response = await axios.get("/api/summary-chart", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(response.data);
      } catch (error) {
        console.error("Error fetching chart data", error);
        if (error.response?.status === 403 || error.response?.status === 401) {
          console.error("Token expired or invalid. Redirecting to login...");
          localStorage.removeItem("token");
          window.location.href = "/login";
        }
      }
    };
    fetchData();
  }, []);

  return (
    <div className="page-content">
      <h1>Summary</h1>
      <section aria-labelledby="chart-summary">
        <h2 id="chart-summary">
          UNC Charlotte Sustainability: Operational Reductions (%)
        </h2>
        <div style={{ width: "100%", height: 400 }}>
          <ResponsiveContainer>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#00703C" name="Percent Reduction" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p>
          This chart displays UNC Charlotte's significant operational
          improvements that contributed to earning the first-ever STARS Gold
          rating. The campus has achieved a 47% reduction in source energy
          consumption, 68% reduction in water usage per unit floor area, and 37%
          reduction in greenhouse gas emissions per campus user compared to
          earlier benchmarks.
        </p>
        <p style={{ fontSize: "0.9em", color: "#666", marginTop: "1em" }}>
          <strong>Source:</strong>{" "}
          <a
            href="https://inside.charlotte.edu/2025/12/04/unc-charlotte-earns-first-stars-gold-rating-for-sustainability-achievements/"
            target="_blank"
            rel="noopener noreferrer"
          >
            UNC Charlotte earns first STARS Gold rating for sustainability
            achievements
          </a>{" "}
          (December 4, 2025)
        </p>
      </section>
    </div>
  );
};

export default Summary;
