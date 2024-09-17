import { useState } from "react";
import { motion } from "framer-motion";
import { MailIcon, UserIcon, LockIcon, Loader } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import Input from "../components/Input";
import PasswordStrengthMeter from "../components/PasswordStrengthMeter";
import { useAuthStore } from "../store/authStore";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { signup, error, isLoading } = useAuthStore();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password, name);
      navigate("/verify-email");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden"
    >
      <div className="p-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-500 text-transparent text-center mb-6 bg-clip-text">
          Create Account
        </h2>
        <form onSubmit={handleSignUp}>
          <Input
            icon={UserIcon}
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            icon={MailIcon}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            icon={LockIcon}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && (
            <p className="text-red-500 text-center font-semibold mt-2">
              {error}
            </p>
          )}

          <PasswordStrengthMeter password={password} />
          <motion.button
            type="submit"
            className="mt-5 w-full font-bold bg-gradient-to-r from-purple-500 to-purple-600 text-white py-3 px-4 hover:from-purple-600 hover:to-pink-700 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader className="animate-spin mx-auto" size={24} />
            ) : (
              "Sign Up"
            )}
          </motion.button>
        </form>
      </div>
      <div className="flex justify-center items-center px-8 py-4 bg-gray-800 bg-opacity-50 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden">
        <p className="text-gray-400 text-sm">
          Already have an account?{" "}
          <Link to={"/login"} className="text-purple-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default SignUp;
