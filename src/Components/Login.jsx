import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog } from '@fortawesome/free-solid-svg-icons';
import { login } from "../api";  

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await login(formData); 
      const token = response.data.token;
      if (token) {
        localStorage.setItem("token", token); 
        navigate("/dashboard");
      } else {
        setMessage("❌ Token olinmadi");
      }
    } catch (error) {
      setMessage("❌ Login xatosi: " + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-600">
      <div className="flex w-[900px] rounded-2xl shadow-lg overflow-hidden">
        <div className="w-1/2 bg-gray-900 text-white p-10 flex flex-col justify-center items-center">
          <FontAwesomeIcon icon={faBlog} className="text-white text-8xl mb-6" />
          <p className="text-sm text-gray-300">Welcome back to</p>
          <h1 className="text-5xl font-semibold mt-2">Shopping List</h1>
        </div>

        <div className="w-1/2 bg-white p-10">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">Sign In</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-1 font-medium">Username</label>
              <input
                type="text"
                name="username"
                placeholder="Enter your username"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-full font-semibold transition duration-200"
            >
              Login
            </button>
          </form>
          {message && <p className="text-center text-red-600 mt-4">{message}</p>}
          <p className="mt-6 text-sm text-center">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline font-medium">
              Create One
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
