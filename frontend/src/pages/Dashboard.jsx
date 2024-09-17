import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore";
import { formatDate } from "../utils/date";

const Dashboard = () => {
  const { user, logout } = useAuthStore();

  const handleLogout = () =>{
    logout();
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full mx-auto mt-10 p-8 bg-gray-900 backdrop-filter backdrop-blur-lg bg-opacity-50 rounded-xl shadow-2xl border border-gray-800"
      >
        <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">
          Dashboard
        </h2>
        <div className="space-y-6">
          <motion.div
            className="p-4 bg-gray-800 rounded-lg border border-gray-700 bg-opacity-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-purple-400 mb-3">
              Profile Information
            </h3>
            <p className="text-gray-300">Name: {user.name}</p>
            <p className="text-gray-300">Email: {user.email}</p>
          </motion.div>
          <motion.div
            className="p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-purple-400 mb-3">
              Account Activity
            </h3>
            <p className="text-gray-300">
              <span className="font-bold">Joined: </span>
              {new Date(user.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className="text-gray-300">
              <span className="font-bold">Last Login: </span>

              {formatDate(user.lastLogin)}
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogout}
            className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white 
				font-bold rounded-lg shadow-lg hover:from-purple-600 hover:to-purple-700
				 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Logout
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
