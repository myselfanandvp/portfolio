import { motion } from "framer-motion";

function PageTransition({ children }) {
  return (
    <div
      className="relative w-full min-h-screen bg-transparent overflow-hidden"
      style={{
        perspective: "1200px",
      }}
    >
      {/* Background shadow overlay */}
      <motion.div
        className="fixed inset-0  bg-black/10 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* 3D Page Wrapper */}
      <motion.div
        className="w-full min-h-screen z-10 bg-transparent shadow-2xl"
        style={{
          transformStyle: "preserve-3d",
          transformOrigin: "center center",
          backfaceVisibility: "hidden",
          willChange: "transform, opacity",
        }}
        initial={{
          opacity: 0,
          rotateY: 90,
          scale: 0.9,
          filter: "brightness(0.7)",
        }}
        animate={{
          opacity: 1,
          rotateY: 0,
          scale: 1,
          filter: "brightness(1)",
          transition: {
            duration: 0.6,
            ease: [0.25, 1, 0.5, 1],
          },
        }}
        exit={{
          opacity: 0,
          rotateY: -90,
          scale: 0.9,
          filter: "brightness(0.7)",
          transition: {
            duration: 0.5,
            ease: [0.5, 0, 0.75, 0],
          },
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default PageTransition;
