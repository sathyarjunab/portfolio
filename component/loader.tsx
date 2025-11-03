"use client";
import { motion } from "framer-motion";

export default function Loader({ percentage }: { percentage: number }) {
  return (
    <div className="flex w-screen h-screen bg-[#fbf3d5dd] z-50">
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img
          src="/Spin.gif"
          alt="Loading animation"
          className="object-contain"
        />
      </div>
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: [1, 1.15, 1], opacity: [1, 0.9, 1] }}
        transition={{ duration: 1.2, repeat: Infinity }}
        className="text-black text-7xl font-extrabold tracking-wider fixed right-2 bottom-0"
      >
        {percentage}
        <span className="text-4xl text-gray-700">%</span>
      </motion.div>
    </div>
  );
}
