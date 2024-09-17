import { motion } from "framer-motion";

const FloatingShape = ({color, size, top, left, delay}) => {
  return (
    <motion.div
      className={`absolute ${size} ${color} rounded-full opacity-20 blur-xl ${top} ${left}`}
      style={{top, left}}
      animate={{
        x: ["0%", "100%", "0%"],
        y: ["0%", "100%", "0%"],
        rotate:[0,360],
      }}
      transition={{
        repeat: Infinity,
        ease: "linear",
        duration: 20,
        delay,
      }}
      aria-hidden="true"
    />
  );
}

export default FloatingShape
