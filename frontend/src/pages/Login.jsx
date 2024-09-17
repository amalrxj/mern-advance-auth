import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Loader } from "lucide-react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import { useAuthStore } from "../store/authStore";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const { login, isLoading, error } = useAuthStore();

  const handleLogin = async(e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden"
    >
      <div className="p-8">
        <h2 className="text-3xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-500">
          Welcome Back
        </h2>

        <form onSubmit={handleLogin}>
          <Input
            icon={Mail}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            icon={Lock}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex items-center mb-6">
            <Link
              to="/forgot-password"
              className="text-sm text-purple-400 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
          {error && <p className="text-red-500 font-semibold mb-2 ">{error}</p>}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold rounded-lg shadow-lg
            hover:from-purple-500 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition duration-200 "
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? <Loader className="animate-spin w-6 h-6 mx-auto" />: "Log In"}
          </motion.button>
        </form>
      </div>
      <div className="px-8 py-4 bg-gray-800 bg-opacity-50 flex justify-center">
        <p className="text-gray-400 text-sm">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="text-purple-400 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </motion.div>
    //
  );
};

export default Login;
