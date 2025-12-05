import axios from "axios";

// Configure axios base URL from environment variable
// For local development, default to localhost:3000
// For production, use VITE_API_BASE_URL from environment
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3000",
});

export default apiClient;
