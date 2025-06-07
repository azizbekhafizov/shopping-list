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
      config.headers["x-auth-token"] = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const login = (userData) => api.post("/users/login", userData);

export const getMi = () => api.get("/users/me");

export const register = (userData) => api.post("/users", userData);
export const handelDelete = () => api.delete('/users');
export const searchUsers = (query = "") => api.get(`/users/search?q=${encodeURIComponent(query)}`);

export const getMyGroups = () => api.get("/groups");
export const CreateGroup = (userData) => api.post("/groups", userData);
export const DeleteGroup = (groupId) => api.delete(`/groups/${groupId}`);
export const AddMember = (groupId) => api.post(`/groups/${groupId}/members`);
export const RemoveMember = (groupId, memberId) => api.delete(`/groups/${groupId}/members/${memberId}`);
export const JoinToGroup = (groupId, userData) => api.post(`/groups/${groupId}/join`, userData);
export const LeaveFromGroup = (groupId, userData) => api.post(`/groups/${groupId}/leave`, userData);
export const SearchGroup = (query = "") => api.get(`/groups/search?q=${encodeURIComponent(query)}`);
