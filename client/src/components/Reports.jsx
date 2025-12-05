import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Reports = () => {
  const [data, setData] = useState([]);
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("No token found in localStorage");
          return;
        }
        const response = await axios.get("/api/reports-chart", {
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
      <h1>Reports</h1>
      <section aria-labelledby="chart-reports">
        <h2 id="chart-reports">
          UNC Charlotte Academic & Research Sustainability Engagement (%)
        </h2>
        <div style={{ width: "100%", height: 400 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <p>
          This chart highlights UNC Charlotte's exceptional performance in
          academic and research sustainability engagement. The university
          demonstrates strong commitment with 90% of academic departments
          offering sustainability courses, 97% of research departments having at
          least one sustainability researcher, 92% of electronics purchases
          meeting sustainable certifications, and 37% of active researchers
          contributing to sustainability scholarship.
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

export default Reports;
