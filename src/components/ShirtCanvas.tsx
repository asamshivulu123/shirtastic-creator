
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ShirtCanvasProps {
  color: string;
  text: string;
  textColor: string;
}

export const ShirtCanvas = ({ color, text, textColor }: ShirtCanvasProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full max-w-2xl aspect-square mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-full h-full"
      >
        <div
          className={`w-full h-full rounded-xl shadow-2xl transition-colors duration-300`}
          style={{ backgroundColor: color }}
        >
          {text && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute inset-0 flex items-center justify-center p-4"
            >
              <p
                className="text-4xl font-bold text-center break-words max-w-full"
                style={{ color: textColor }}
              >
                {text}
              </p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};
