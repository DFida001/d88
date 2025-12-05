import axios from "axios";

// Configure axios base URL from environment variable
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "",
});

export default apiClient;
