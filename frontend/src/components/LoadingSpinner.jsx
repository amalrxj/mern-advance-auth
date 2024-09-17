import { motion } from "framer-motion";
import FloatingShape from "./FloatingShape";

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      <FloatingShape
        color="bg-purple-300"
        size="w-64 h-64"
        top="-5%"
        left="10%"
        delay={0}
      />
      <FloatingShape
        color="bg-lime-50"
        size="w-48 h-48"
        top="70%"
        left="80%"
        delay={5}
      />
      <FloatingShape
        color="bg-purple-200"
        size="w-32 h-32"
        top="40%"
        left="-10%"
        delay={2}
      />
        <motion.div
        className="w-16 h-16 border-4 border-t-4 border-t-purple-500 border-purple-200 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity , ease: "linear"}}
        />
    </div>
  );
};

export default LoadingSpinner;

