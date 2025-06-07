import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "./api";

const App = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchData = async () => {
      try {
        const res = await api.get("/auth", {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUserData(res.data);
      } catch (error) {
        console.error(error);
        navigate("/login"); 
      }
    };
    fetchData();
  }, [navigate]);

  if (!userData) return <p>Loading...</p>;

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-3xl font-bold">Welcome, {userData.name}!</h1>
    </div>
  );
};

export default App;
