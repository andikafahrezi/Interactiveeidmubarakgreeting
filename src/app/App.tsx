import { useState } from "react";
import { Envelope } from "./components/Envelope";
import { GreetingCard } from "./components/GreetingCard";
import { BackgroundDecoration } from "./components/BackgroundDecoration";
import { motion } from "motion/react";

export default function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [showCard, setShowCard] = useState(false);

  const handleEnvelopeClick = () => {
    if (!isEnvelopeOpen) {
      setIsEnvelopeOpen(true);
      setTimeout(() => {
        setShowCard(true);
      }, 900);
    }
  };

  const handleCloseCard = () => {
    setShowCard(false);
    setIsEnvelopeOpen(false);
  };

  return (
    <div
      className="size-full flex items-center justify-center relative overflow-hidden"
      style={{ background: "#f0e8d0" }}
    >
      <BackgroundDecoration />

      <div className="relative z-10 flex flex-col items-center gap-10 px-4 py-8">
        {/* ── Title ── */}
        <motion.div
          className="text-center space-y-2"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Decorative top element */}
          <motion.div
            className="flex items-center justify-center gap-3 mb-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <svg width="40" height="12" viewBox="0 0 40 12">
              <path
                d="M2,6 Q10,2 20,6 Q30,10 38,6"
                fill="none"
                stroke="#9a7030"
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.5"
              />
            </svg>
            {/* Crescent & star */}
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M12 2 A9 9 0 1 1 3 11 A6 6 0 1 0 12 2 Z"
                fill="#9a7030"
                opacity="0.7"
              />
              <polygon
                points="18,5 19.2,8.8 23,8.8 20,11 21.2,15 18,13 14.8,15 16,11 13,8.8 16.8,8.8"
                fill="#9a7030"
                opacity="0.7"
              />
            </svg>
            <svg width="40" height="12" viewBox="0 0 40 12">
              <path
                d="M2,6 Q10,10 20,6 Q30,2 38,6"
                fill="none"
                stroke="#9a7030"
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.5"
              />
            </svg>
          </motion.div>

          {/* Main title */}
          <motion.h1
            style={{
              color: "#4a3010",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 800,
              fontFamily: "Georgia, serif",
              letterSpacing: 2,
            }}
            animate={{
              color: ["#4a3010", "#6a4820", "#4a3010"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Eid Mubarak
          </motion.h1>

          <motion.p
            style={{
              color: "#7a5828",
              fontSize: 18,
              fontFamily: "serif",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            1447 H · مبارك عليكم الشهر
          </motion.p>

          {/* Bottom wavy line */}
          <motion.svg
            width="200"
            height="10"
            viewBox="0 0 200 10"
            className="mx-auto"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <path
              d="M5,5 Q25,1 50,5 Q75,9 100,5 Q125,1 150,5 Q175,9 195,5"
              fill="none"
              stroke="#9a7030"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.5"
            />
          </motion.svg>
        </motion.div>

        {/* ── Manila Folder / Map ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            delay: 0.4,
            type: "spring",
            stiffness: 180,
            damping: 22,
          }}
        >
          <Envelope
            isOpen={isEnvelopeOpen}
            onClick={handleEnvelopeClick}
          />
        </motion.div>

        {/* Instruction text (fades away when card opens) */}
        {!showCard && !isEnvelopeOpen && (
          <motion.div
            className="text-center max-w-sm px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 1.2 }}
          >
            <p
              className="text-sm leading-relaxed"
              style={{ color: "#7a5828", opacity: 0.75 }}
            >
              Ada pesan spesial untukmu di dalam map ini 💌
            </p>
          </motion.div>
        )}
      </div>

      {/* Greeting Card Modal */}
      <GreetingCard
        isOpen={showCard}
        onClose={handleCloseCard}
      />
    </div>
  );
}