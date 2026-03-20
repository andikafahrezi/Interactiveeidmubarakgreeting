import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { X, RefreshCw } from "lucide-react";
import { RupiahBill } from "./RupiahBill";

interface THREnvelopeProps {
  isOpen: boolean;
  onClose: () => void;
}

const thrAmounts = [2000, 5000, 10000, 20000, 50000, 100000, null]; // null = "sudah besar"

// Confetti colors (warm festive)
const CONFETTI_COLORS = [
  "#c49040", "#dc2626", "#f59e0b",
  "#16a34a", "#7c3aed", "#db2777",
  "#ea580c", "#0891b2",
];

export function THREnvelope({ isOpen, onClose }: THREnvelopeProps) {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [amount, setAmount] = useState<number | null | "revealed">("revealed" as any);
  const [hasRevealed, setHasRevealed] = useState(false);
  const [thrResult, setThrResult] = useState<number | null>(null);

  const handleEnvelopeClick = () => {
    if (!hasRevealed && !isEnvelopeOpen) {
      setIsEnvelopeOpen(true);
      setTimeout(() => {
        const randomAmount = thrAmounts[Math.floor(Math.random() * thrAmounts.length)];
        setThrResult(randomAmount);
        setHasRevealed(true);
      }, 900);
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setIsEnvelopeOpen(false);
      setThrResult(null);
      setHasRevealed(false);
    }, 400);
  };

  const handleReset = () => {
    setIsEnvelopeOpen(false);
    setThrResult(null);
    setHasRevealed(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[70]"
            style={{ background: "rgba(30,18,8,0.55)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          {/* Modal container */}
          <motion.div
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[80] w-[92%] max-w-sm"
            initial={{ scale: 0.4, opacity: 0, y: 80 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.4, opacity: 0, y: 80 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
          >
            {/* Card background */}
            <div
              className="relative rounded-3xl shadow-2xl overflow-hidden"
              style={{ background: "#fdf6e8", border: "2px solid #d4b060" }}
            >
              {/* Top decorative strip */}
              <div
                className="h-2 w-full"
                style={{ background: "#c49040" }}
              />

              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-10 p-1.5 rounded-full transition-colors"
                style={{ background: "#f5e8cc", border: "1px solid #c4a040" }}
              >
                <X className="w-4 h-4" style={{ color: "#7a5020" }} />
              </button>

              <div className="p-6 pb-8">
                {/* Title */}
                <h2
                  className="text-center mb-5"
                  style={{ color: "#7a3820", fontSize: 20, fontWeight: 700, fontFamily: "Georgia, serif" }}
                >
                  🎉 Amplop THR Idul Fitri 1446H
                </h2>

                {/* ── AMPLOP THR PORTRAIT ── */}
                <div
                  className="relative flex justify-center items-start"
                  style={{ minHeight: hasRevealed ? "auto" : 320 }}
                >
                  <AnimatePresence mode="wait">
                    {!hasRevealed && (
                      <motion.div
                        key="envelope"
                        className="relative cursor-pointer select-none"
                        onClick={handleEnvelopeClick}
                        style={{ perspective: "1000px" }}
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 0.8, y: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.04, rotate: 1 }}
                          whileTap={{ scale: 0.97 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                          {/* AMPLOP PORTRAIT SVG */}
                          <div style={{ width: 190, height: 290, position: "relative" }}>
                            <svg
                              width="190"
                              height="290"
                              viewBox="0 0 190 290"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <defs>
                                <filter id="thr-shadow">
                                  <feDropShadow dx="3" dy="6" stdDeviation="8" floodColor="#7a1010" floodOpacity="0.4" />
                                </filter>
                                {/* Gold pattern */}
                                <pattern id="gold-pattern" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                                  <polygon points="4,0 8,4 4,8 0,4" fill="none" stroke="#d4a030" strokeWidth="0.5" opacity="0.2" />
                                </pattern>
                              </defs>

                              {/* Main envelope body */}
                              <rect
                                x="0" y="0" width="190" height="290"
                                rx="10" fill="#cc2020"
                                filter="url(#thr-shadow)"
                              />
                              {/* Pattern overlay */}
                              <rect x="0" y="0" width="190" height="290" rx="10" fill="url(#gold-pattern)" />

                              {/* Gold outer border */}
                              <rect x="6" y="6" width="178" height="278" rx="7" fill="none" stroke="#d4a030" strokeWidth="2.5" />
                              {/* Gold inner border */}
                              <rect x="11" y="11" width="168" height="268" rx="5" fill="none" stroke="#d4a030" strokeWidth="1" opacity="0.6" />

                              {/* ── FLAP AREA (top 100px) - animated ── */}
                              {/* The flap will be drawn separately via motion.div */}

                              {/* Center decorative panel */}
                              <rect x="22" y="115" width="146" height="155" rx="4" fill="#b81818" />
                              <rect x="26" y="119" width="138" height="147" rx="3" fill="none" stroke="#d4a030" strokeWidth="1" opacity="0.4" />

                              {/* Crescent moon */}
                              <path
                                d="M 95 140 A 22 22 0 1 1 95 184 A 14 14 0 1 0 95 140 Z"
                                fill="#d4a030"
                                opacity="0.85"
                              />

                              {/* Star */}
                              <g transform="translate(113, 148)">
                                <polygon
                                  points="0,-8 2,-3 7,-3 3,1 5,6 0,3 -5,6 -3,1 -7,-3 -2,-3"
                                  fill="#d4a030"
                                />
                              </g>

                              {/* "THR" text */}
                              <text
                                x="95"
                                y="200"
                                textAnchor="middle"
                                fontFamily="Georgia, serif"
                                fontSize="22"
                                fontWeight="bold"
                                fill="#d4a030"
                                letterSpacing="6"
                              >
                                THR
                              </text>

                              {/* Arabic text: Minal Aidin wal Faizin */}
                              <text
                                x="95"
                                y="220"
                                textAnchor="middle"
                                fontFamily="serif"
                                fontSize="8"
                                fill="#d4a030"
                                opacity="0.8"
                                letterSpacing="0.5"
                              >
                                مِنَ الْعَائِدِينَ وَالْفَائِزِينَ
                              </text>

                              {/* Decorative floral corners */}
                              {/* Top-left corner ornament */}
                              <g transform="translate(20, 105)" opacity="0.6">
                                <circle cx="0" cy="0" r="5" fill="none" stroke="#d4a030" strokeWidth="1" />
                                <line x1="-8" y1="0" x2="8" y2="0" stroke="#d4a030" strokeWidth="0.8" />
                                <line x1="0" y1="-8" x2="0" y2="8" stroke="#d4a030" strokeWidth="0.8" />
                              </g>
                              {/* Top-right corner ornament */}
                              <g transform="translate(170, 105)" opacity="0.6">
                                <circle cx="0" cy="0" r="5" fill="none" stroke="#d4a030" strokeWidth="1" />
                                <line x1="-8" y1="0" x2="8" y2="0" stroke="#d4a030" strokeWidth="0.8" />
                                <line x1="0" y1="-8" x2="0" y2="8" stroke="#d4a030" strokeWidth="0.8" />
                              </g>

                              {/* Bottom ornamental strip */}
                              <rect x="22" y="278" width="146" height="6" rx="3" fill="#d4a030" opacity="0.4" />

                              {/* "Idul Fitri 1446H" bottom */}
                              <text
                                x="95"
                                y="248"
                                textAnchor="middle"
                                fontFamily="serif"
                                fontSize="8"
                                fill="#d4a030"
                                opacity="0.7"
                                letterSpacing="1"
                              >
                                IDUL FITRI 1446 H
                              </text>

                              {/* Decorative diamonds row */}
                              {[0, 1, 2, 3, 4].map((i) => (
                                <polygon
                                  key={i}
                                  points={`${50 + i * 23},260 ${55 + i * 23},266 ${50 + i * 23},272 ${45 + i * 23},266`}
                                  fill="#d4a030"
                                  opacity="0.35"
                                />
                              ))}
                            </svg>

                            {/* ANIMATED FLAP (top portion that opens) */}
                            <motion.div
                              className="absolute top-0 left-0"
                              style={{
                                width: 190,
                                height: 120,
                                transformOrigin: "50% 0%",
                                transformStyle: "preserve-3d",
                              }}
                              animate={{ rotateX: isEnvelopeOpen ? -150 : 0 }}
                              transition={{ type: "spring", stiffness: 90, damping: 18 }}
                            >
                              <svg
                                width="190"
                                height="120"
                                viewBox="0 0 190 120"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                {/* Flap body */}
                                <rect x="0" y="0" width="190" height="115" rx="10" fill="#d42020" />
                                {/* Gold border on flap */}
                                <rect x="6" y="6" width="178" height="105" rx="7" fill="none" stroke="#d4a030" strokeWidth="2" />
                                {/* Flap triangle (V-shape pointing down) */}
                                <polygon
                                  points="6,115 95,65 184,115"
                                  fill="#cc2020"
                                  stroke="#d4a030"
                                  strokeWidth="1.5"
                                />
                                {/* Inner flap decoration */}
                                <polygon
                                  points="14,115 95,72 176,115"
                                  fill="none"
                                  stroke="#d4a030"
                                  strokeWidth="0.8"
                                  opacity="0.5"
                                />
                                {/* Ornament on flap */}
                                <circle cx="95" cy="42" r="18" fill="#d4a030" opacity="0.2" />
                                <circle cx="95" cy="42" r="12" fill="none" stroke="#d4a030" strokeWidth="1.5" opacity="0.6" />
                                <text x="95" y="47" textAnchor="middle" fontFamily="serif" fontSize="14" fill="#d4a030" opacity="0.8">
                                  ☪
                                </text>
                              </svg>
                            </motion.div>
                          </div>
                        </motion.div>

                        {!isEnvelopeOpen && (
                          <motion.p
                            className="text-center text-sm font-medium mt-3"
                            style={{ color: "#8a5020" }}
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            ✨ Klik untuk buka amplop
                          </motion.p>
                        )}
                      </motion.div>
                    )}

                    {/* ── HASIL THR ── */}
                    {hasRevealed && (
                      <motion.div
                        key="result"
                        className="w-full"
                        initial={{ scale: 0.3, opacity: 0, rotate: -15 }}
                        animate={{ scale: 1, opacity: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 220, damping: 18 }}
                      >
                        {thrResult === null ? (
                          /* Pesan "sudah besar" */
                          <div
                            className="rounded-2xl p-6 text-center mx-auto max-w-xs"
                            style={{
                              background: "#f5ead0",
                              border: "2px solid #c4a040",
                            }}
                          >
                            <motion.div
                              className="text-6xl mb-3"
                              animate={{ rotate: [0, -10, 10, -10, 0] }}
                              transition={{ duration: 0.6, delay: 0.2 }}
                            >
                              😅
                            </motion.div>
                            <h3
                              className="mb-2"
                              style={{ color: "#7a3820", fontSize: 18, fontWeight: 700, fontFamily: "Georgia, serif" }}
                            >
                              Kamu sudah besar!
                            </h3>
                            <p style={{ color: "#8a5030", fontSize: 13 }}>
                              THR-nya sudah habis untuk yang lebih kecil ya 😄
                            </p>
                            <motion.p
                              className="mt-3 text-xs"
                              style={{ color: "#9a6040" }}
                              animate={{ opacity: [0.5, 1, 0.5] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              Tapi tetap dapat doa & berkah! 🤲
                            </motion.p>
                          </div>
                        ) : (
                          /* Tampilkan uang rupiah */
                          <div className="flex flex-col items-center gap-4">
                            {/* Confetti burst */}
                            <div className="relative">
                              {[...Array(24)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  className="absolute rounded-sm"
                                  style={{
                                    left: "50%",
                                    top: "50%",
                                    width: i % 2 === 0 ? 8 : 5,
                                    height: i % 2 === 0 ? 5 : 8,
                                    backgroundColor:
                                      CONFETTI_COLORS[i % CONFETTI_COLORS.length],
                                  }}
                                  initial={{ x: 0, y: 0, opacity: 1, rotate: 0, scale: 1 }}
                                  animate={{
                                    x: Math.cos((i / 24) * Math.PI * 2) * (100 + Math.random() * 80),
                                    y: Math.sin((i / 24) * Math.PI * 2) * (100 + Math.random() * 80),
                                    opacity: 0,
                                    rotate: Math.random() * 360,
                                    scale: 0.5,
                                  }}
                                  transition={{ duration: 1.2, ease: "easeOut" }}
                                />
                              ))}

                              {/* Rupiah Bill */}
                              <motion.div
                                animate={{
                                  y: [0, -6, 0],
                                  rotate: [-1, 1, -1],
                                }}
                                transition={{
                                  duration: 3,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                }}
                              >
                                <RupiahBill amount={thrResult} />
                              </motion.div>
                            </div>

                            <motion.p
                              className="text-center font-semibold"
                              style={{ color: "#5a3010", fontSize: 15 }}
                              initial={{ opacity: 0, y: 12 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.8 }}
                            >
                              🎉 Selamat! Rezeki nomplok nih! 🎊
                            </motion.p>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Coba Lagi button */}
                {hasRevealed && (
                  <motion.div
                    className="flex justify-center mt-5"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                  >
                    <button
                      onClick={handleReset}
                      className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all active:scale-95"
                      style={{
                        background: "#c49040",
                        color: "#fff",
                        border: "none",
                        boxShadow: "0 3px 12px rgba(0,0,0,0.2)",
                      }}
                    >
                      <RefreshCw className="w-4 h-4" />
                      Coba Lagi
                    </button>
                  </motion.div>
                )}
              </div>

              {/* Bottom decorative strip */}
              <div className="h-2 w-full" style={{ background: "#c49040" }} />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
