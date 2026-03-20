import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { X } from "lucide-react";
import { THREnvelope } from "./THREnvelope";

interface GreetingCardProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GreetingCard({ isOpen, onClose }: GreetingCardProps) {
  const [showTHR, setShowTHR] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40"
            style={{ background: "rgba(40, 25, 8, 0.50)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Card */}
          <motion.div
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[92%] max-w-md"
            initial={{ scale: 0.2, rotate: -8, opacity: 0, y: 60 }}
            animate={{ scale: 1, rotate: 0, opacity: 1, y: 0 }}
            exit={{ scale: 0.2, rotate: 8, opacity: 0, y: -60 }}
            transition={{ type: "spring", stiffness: 180, damping: 22 }}
          >
            {/* Card body */}
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{
                background: "#fdf6e8",
                border: "3px solid #c4a040",
                boxShadow: "0 24px 64px rgba(60,35,10,0.3), 0 4px 16px rgba(60,35,10,0.15)",
              }}
            >

              {/* ── TOP DECORATIVE HEADER BAND ── */}
              <div
                className="relative flex items-center justify-center py-5 overflow-hidden"
                style={{ background: "#c49040" }}
              >
                {/* Hand-drawn style wavy border at bottom */}
                <svg
                  className="absolute bottom-0 left-0 w-full"
                  height="12"
                  viewBox="0 0 400 12"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,6 C20,0 40,12 60,6 C80,0 100,12 120,6 C140,0 160,12 180,6 C200,0 220,12 240,6 C260,0 280,12 300,6 C320,0 340,12 360,6 C380,0 400,12 400,6 L400,12 L0,12 Z"
                    fill="#fdf6e8"
                  />
                </svg>

                {/* Mosque illustration - hand drawn style */}
                <svg width="140" height="90" viewBox="0 0 140 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Main dome */}
                  <path
                    d="M70 12 C56 12 46 24 46 38 L94 38 C94 24 84 12 70 12 Z"
                    fill="#fdf6e8"
                    stroke="#fdf6e8"
                    strokeWidth="0"
                    opacity="0.95"
                  />
                  {/* Dome top ornament */}
                  <line x1="70" y1="4" x2="70" y2="12" stroke="#fdf6e8" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx="70" cy="4" r="3" fill="#fdf6e8" />

                  {/* Left small dome */}
                  <path d="M36 30 C30 30 26 35 26 41 L46 41 C46 35 42 30 36 30 Z" fill="#fdf6e8" opacity="0.85" />
                  <line x1="36" y1="24" x2="36" y2="30" stroke="#fdf6e8" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="36" cy="24" r="2.5" fill="#fdf6e8" />

                  {/* Right small dome */}
                  <path d="M104 30 C98 30 94 35 94 41 L114 41 C114 35 110 30 104 30 Z" fill="#fdf6e8" opacity="0.85" />
                  <line x1="104" y1="24" x2="104" y2="30" stroke="#fdf6e8" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="104" cy="24" r="2.5" fill="#fdf6e8" />

                  {/* Main building body */}
                  <rect x="38" y="41" width="64" height="40" rx="2" fill="#fdf6e8" opacity="0.9" />
                  {/* Side wings */}
                  <rect x="20" y="44" width="24" height="37" rx="2" fill="#fdf6e8" opacity="0.8" />
                  <rect x="96" y="44" width="24" height="37" rx="2" fill="#fdf6e8" opacity="0.8" />

                  {/* Center door arch */}
                  <path
                    d="M60 82 L60 65 Q70 59 80 65 L80 82 Z"
                    fill="#c49040"
                  />

                  {/* Windows - main */}
                  <path d="M50 58 Q55 54 60 58 L60 68 L50 68 Z" fill="#c49040" opacity="0.6" />
                  <path d="M80 58 Q85 54 90 58 L90 68 L80 68 Z" fill="#c49040" opacity="0.6" />

                  {/* Left minaret */}
                  <rect x="10" y="30" width="8" height="52" rx="2" fill="#fdf6e8" opacity="0.9" />
                  <path d="M10 30 Q14 22 18 30 Z" fill="#fdf6e8" opacity="0.95" />
                  <circle cx="14" cy="22" r="2" fill="#fdf6e8" />

                  {/* Right minaret */}
                  <rect x="122" y="30" width="8" height="52" rx="2" fill="#fdf6e8" opacity="0.9" />
                  <path d="M122 30 Q126 22 130 30 Z" fill="#fdf6e8" opacity="0.95" />
                  <circle cx="126" cy="22" r="2" fill="#fdf6e8" />

                  {/* Ground line */}
                  <line x1="5" y1="82" x2="135" y2="82" stroke="#fdf6e8" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
                </svg>
              </div>

              {/* ── CARD CONTENT ── */}
              <div className="relative px-7 pt-5 pb-6">

                {/* Corner decorations (hand-drawn dots) */}
                <div className="absolute top-3 left-4 flex gap-1">
                  {[6, 4, 3].map((s, i) => (
                    <div
                      key={i}
                      className="rounded-full"
                      style={{ width: s, height: s, background: "#c4a040", opacity: 0.4 }}
                    />
                  ))}
                </div>
                <div className="absolute top-3 right-10 flex gap-1">
                  {[3, 4, 6].map((s, i) => (
                    <div
                      key={i}
                      className="rounded-full"
                      style={{ width: s, height: s, background: "#c4a040", opacity: 0.4 }}
                    />
                  ))}
                </div>

                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-1.5 rounded-full transition-all active:scale-90"
                  style={{ background: "#f5e8cc", border: "1px solid #c4a040" }}
                >
                  <X className="w-4 h-4" style={{ color: "#7a5020" }} />
                </button>

                <div className="text-center space-y-4">
                  {/* Arabic greeting */}
                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <p
                      className="text-xl leading-loose"
                      style={{ color: "#7a5020", fontFamily: "serif" }}
                    >
                      تَقَبَّلَ اللهُ مِنَّا وَمِنْكُمْ
                    </p>
                    <p
                      className="text-xs italic mt-1"
                      style={{ color: "#9a7040" }}
                    >
                      Taqabbalallahu minna wa minkum
                    </p>
                  </motion.div>

                  {/* Divider - hand drawn style */}
                  <motion.svg
                    width="100%"
                    height="16"
                    viewBox="0 0 300 16"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.35, duration: 0.5 }}
                    style={{ overflow: "visible" }}
                  >
                    <path
                      d="M20,8 Q75,2 150,8 Q225,14 280,8"
                      fill="none"
                      stroke="#c4a040"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <circle cx="150" cy="8" r="3" fill="#c4a040" opacity="0.6" />
                    <circle cx="20" cy="8" r="2" fill="#c4a040" opacity="0.4" />
                    <circle cx="280" cy="8" r="2" fill="#c4a040" opacity="0.4" />
                  </motion.svg>

                  {/* Main greeting */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, type: "spring" }}
                    className="space-y-1"
                  >
                    <h1
                      style={{
                        color: "#5a3010",
                        fontSize: 30,
                        fontWeight: 800,
                        fontFamily: "Georgia, serif",
                        letterSpacing: 1,
                      }}
                    >
                      Eid Mubarak
                    </h1>
                    <p style={{ color: "#7a5020", fontSize: 15 }}>
                      Minal Aidin wal Faizin
                    </p>
                  </motion.div>

                  {/* Message */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55 }}
                  >
                    <p
                      className="leading-relaxed"
                      style={{ color: "#6a4818", fontSize: 13.5 }}
                    >
                      Semoga amal ibadah kita diterima Allah SWT,
                      <br />
                      dan kita kembali fitri di hari yang mulia ini. 🌙
                    </p>
                    <p
                      className="mt-2 text-sm"
                      style={{ color: "#8a6030" }}
                    >
                      Mohon maaf lahir & batin 🙏
                    </p>
                  </motion.div>

                  {/* Signature */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="pt-1"
                  >
                    {/* Hand-drawn underline decoration */}
                    <svg width="160" height="6" viewBox="0 0 160 6" className="mx-auto mb-1">
                      <path
                        d="M10,3 Q40,0 80,3 Q120,6 150,3"
                        fill="none"
                        stroke="#c4a040"
                        strokeWidth="1"
                        strokeLinecap="round"
                        opacity="0.5"
                      />
                    </svg>
                    <p
                      style={{
                        color: "#5a3010",
                        fontSize: 15,
                        fontFamily: "Georgia, serif",
                        fontStyle: "italic",
                        fontWeight: 600,
                      }}
                    >
                      — Andika Fahrezi —
                    </p>
                  </motion.div>

                  {/* Bottom divider */}
                  <motion.svg
                    width="100%"
                    height="16"
                    viewBox="0 0 300 16"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  >
                    <path
                      d="M20,8 Q75,14 150,8 Q225,2 280,8"
                      fill="none"
                      stroke="#c4a040"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <circle cx="150" cy="8" r="3" fill="#c4a040" opacity="0.6" />
                  </motion.svg>

                  {/* THR Button */}
                  <motion.button
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0, type: "spring" }}
                    onClick={() => setShowTHR(true)}
                    className="relative overflow-hidden px-8 py-3 rounded-full text-white font-semibold text-sm transition-all active:scale-95"
                    style={{
                      background: "#c49040",
                      boxShadow: "0 4px 14px rgba(160,100,0,0.35)",
                      border: "none",
                    }}
                    whileHover={{ scale: 1.06, boxShadow: "0 6px 20px rgba(160,100,0,0.45)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Shimmer sweep (interactive, not gradient-based) */}
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: "rgba(255,255,255,0.18)",
                        clipPath: "polygon(0 0, 30% 0, 50% 100%, 20% 100%)",
                      }}
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                    />
                    <span className="relative flex items-center gap-2">
                      💰 Mau THR?
                    </span>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* THR Component */}
          <THREnvelope isOpen={showTHR} onClose={() => setShowTHR(false)} />
        </>
      )}
    </AnimatePresence>
  );
}
