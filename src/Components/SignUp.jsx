import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog } from '@fortawesome/free-solid-svg-icons';

const API_URL = 'https://nt-shopping-list.onrender.com/api';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: ''
  });

  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API_URL}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        setMessage('✅ Ro‘yxatdan o‘tish muvaffaqiyatli! Endi tizimga kiring.');
        setTimeout(() => {
          navigate('/login');
        }, 1500);
      } else {
        setMessage(data.message || '❌ Ro‘yxatdan o‘tishda xatolik yuz berdi.');
      }
    } catch (error) {
      setMessage('❌ Server bilan bog‘lanishda xatolik yuz berdi.');
      console.error("Server xatosi:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#6c757d] ">
      <div className="flex w-[1312px] h-[496px] rounded-3xl shadow-xl overflow-hidden bg-white">
        <div className="w-1/2 bg-[#212529] text-white flex flex-col justify-center items-center">
          <FontAwesomeIcon icon={faBlog} className=" text-blue-600 text-9xl" />
          <p className="text-[18px] text-gray-300 mt-12">Welcome back to</p>
          <h1 className="text-[80px] font-light mt-7">Shopping List</h1>
        </div>

        <div className="w-1/2 p-12">
          <h2 className="text-3xl font-bold text-center text-blue-700">Register</h2>
          <form onSubmit={handleSubmit} className="space-y-7">
            <div>
              <label className="block mb-1 font-medium">Name</label>
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
                name="username"
                placeholder="Enter your username"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-full font-semibold transition duration-200"
            >
              Sign Up
            </button>
          </form>
          {message && (
            <p
              className={`text-center mt-6 font-semibold ${message.startsWith('✅') ? 'text-green-600' : 'text-red-600'
                }`}
            >
              {message}
            </p>
          )}
          <p className="mt-4 text-gray-600 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 underline font-medium">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
