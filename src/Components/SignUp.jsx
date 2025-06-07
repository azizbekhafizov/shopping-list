import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

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
      const res = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok && data.success) {
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-green-700 via-green-600 to-green-500">
      <div className="flex w-[900px] rounded-3xl shadow-xl overflow-hidden bg-white">
        {/* Chap tomoni */}
        <div className="w-1/2 bg-green-800 text-white p-12 flex flex-col justify-center items-center">
          <FontAwesomeIcon icon={faUserPlus} className="text-white text-9xl mb-6" />
          <p className="text-lg font-light tracking-wider">Create your account at</p>
          <h1 className="text-6xl font-extrabold mt-2">Shopping List</h1>
        </div>

        {/* O'ng tomoni */}
        <div className="w-1/2 p-12">
          <h2 className="text-4xl font-extrabold text-center mb-10 text-green-700">Sign Up</h2>
          <form onSubmit={handleSubmit} className="space-y-7">
            <div>
              <label className="block mb-2 font-semibold text-gray-700">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                name="name"
                className="w-full border border-gray-300 px-5 py-3 rounded-lg focus:outline-none focus:ring-4 focus:ring-green-400 transition"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold text-gray-700">Username</label>
              <input
                type="text"
                placeholder="eshmatjon123"
                name="username"
                className="w-full border border-gray-300 px-5 py-3 rounded-lg focus:outline-none focus:ring-4 focus:ring-green-400 transition"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Your password"
                name="password"
                className="w-full border border-gray-300 px-5 py-3 rounded-lg focus:outline-none focus:ring-4 focus:ring-green-400 transition"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full font-bold text-lg transition duration-300"
            >
              Sign Up
            </button>
          </form>
          {message && (
            <p
              className={`text-center mt-6 font-semibold ${
                message.startsWith('✅') ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {message}
            </p>
          )}
          <p className="mt-8 text-center text-gray-600 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-green-700 hover:underline font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
