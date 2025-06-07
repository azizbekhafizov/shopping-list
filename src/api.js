import axios from "axios";

export const api = axios.create({
  baseURL: "https://nt-shopping-list.onrender.com/api",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["x-auth-token"] = token;  // Tokenni har so'rovga qo'shamiz
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Misol uchun: Register va login endpointlari
export const register = (userData) => api.post("/users", userData);
export const login = (userData) => api.post("/auth", userData);
