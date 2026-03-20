import { motion } from "motion/react";

interface EnvelopeProps {
  isOpen: boolean;
  onClick: () => void;
}

export function Envelope({ isOpen, onClick }: EnvelopeProps) {
  return (
    <div className="relative cursor-pointer select-none" onClick={onClick}>
      <motion.div
        className="relative"
        whileHover={!isOpen ? { scale: 1.04, rotate: -1 } : {}}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Folder container - 3D perspective */}
        <div style={{ perspective: "1200px" }} className="relative">

          {/* ── FOLDER BACK / BODY (always visible) ── */}
          <div className="relative" style={{ width: 340, height: 240 }}>
            <svg
              width="340"
              height="240"
              viewBox="0 0 340 240"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Drop shadow filter */}
              <defs>
                <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="4" dy="6" stdDeviation="8" floodColor="#7a5c2a" floodOpacity="0.3" />
                </filter>
                {/* Paper grain texture */}
                <pattern id="grain" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
                  <rect width="4" height="4" fill="none" />
                  <circle cx="1" cy="1" r="0.4" fill="#a07830" opacity="0.2" />
                  <circle cx="3" cy="3" r="0.3" fill="#906820" opacity="0.15" />
                </pattern>
              </defs>

              {/* === BACK FOLDER BODY === */}
              {/* Main folder rectangle */}
              <rect
                x="0" y="40" width="340" height="200"
                rx="5" ry="5"
                fill="#c49040"
                filter="url(#shadow)"
              />
              {/* Grain overlay */}
              <rect x="0" y="40" width="340" height="200" rx="5" fill="url(#grain)" />
              {/* Bottom edge - slightly darker */}
              <rect x="0" y="218" width="340" height="22" rx="5" fill="#b07830" opacity="0.4" />
              {/* Right edge shadow */}
              <rect x="316" y="40" width="24" height="200" rx="5" fill="#906820" opacity="0.3" />

              {/* === TAB (folder tab, top-left) === */}
              <path
                d="M 12 40 L 12 18 Q 12 10 20 10 L 130 10 Q 138 10 138 18 L 138 40 Z"
                fill="#b88030"
              />
              {/* Tab grain */}
              <path
                d="M 12 40 L 12 18 Q 12 10 20 10 L 130 10 Q 138 10 138 18 L 138 40 Z"
                fill="url(#grain)"
                opacity="0.5"
              />
              {/* Tab top highlight */}
              <path
                d="M 14 18 Q 14 12 22 12 L 128 12 Q 136 12 136 18"
                fill="none"
                stroke="#d4a858"
                strokeWidth="1.2"
                opacity="0.5"
              />

              {/* === INSIDE BODY (pocket area) === */}
              <rect
                x="10" y="50" width="320" height="180"
                rx="4" ry="4"
                fill="#d4a84e"
              />
              <rect x="10" y="50" width="320" height="180" rx="4" fill="url(#grain)" opacity="0.6" />

              {/* === WHITE LABEL AREA === */}
              <rect
                x="40" y="75" width="200" height="110"
                rx="3" ry="3"
                fill="#f5eed8"
                stroke="#b8883c"
                strokeWidth="1.5"
              />
              {/* Label lines */}
              <line x1="55" y1="108" x2="225" y2="108" stroke="#c4a060" strokeWidth="1" opacity="0.5" />
              <line x1="55" y1="128" x2="225" y2="128" stroke="#c4a060" strokeWidth="1" opacity="0.5" />
              <line x1="55" y1="148" x2="180" y2="148" stroke="#c4a060" strokeWidth="1" opacity="0.5" />
              {/* Label title line (bold) */}
              <line x1="55" y1="95" x2="225" y2="95" stroke="#c4a060" strokeWidth="1.5" opacity="0.4" />

              {/* "SURAT" stamp text on label */}
              <text x="75" y="92" fontFamily="serif" fontSize="11" fill="#8a6030" opacity="0.6" letterSpacing="4">
                S U R A T
              </text>

              {/* === STRING CLOSURE (tali) === */}
              {/* Top button/eyelet */}
              <circle cx="270" cy="108" r="10" fill="#8a6030" stroke="#6a4820" strokeWidth="2" />
              <circle cx="270" cy="108" r="5" fill="none" stroke="#d4a848" strokeWidth="1.5" />
              <circle cx="270" cy="108" r="2" fill="#5a3820" />

              {/* Bottom button/eyelet */}
              <circle cx="270" cy="168" r="10" fill="#8a6030" stroke="#6a4820" strokeWidth="2" />
              <circle cx="270" cy="168" r="5" fill="none" stroke="#d4a848" strokeWidth="1.5" />
              <circle cx="270" cy="168" r="2" fill="#5a3820" />

              {/* String wrapped around in figure-8 */}
              <motion.path
                d={
                  isOpen
                    ? "M 270 118 L 270 158"
                    : "M 270 118 C 285 128 285 138 270 148 C 255 158 255 148 270 148 C 285 148 270 158 270 158"
                }
                fill="none"
                stroke="#5a3818"
                strokeWidth="2"
                strokeLinecap="round"
                animate={{
                  d: isOpen
                    ? "M 270 118 L 270 158"
                    : "M 270 118 C 285 128 285 138 270 148 C 255 158 255 148 270 148 C 285 148 270 158 270 158",
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />

              {/* === FOLD LINE (center horizontal) === */}
              <line x1="0" y1="140" x2="340" y2="140" stroke="#a07830" strokeWidth="0.8" opacity="0.25" strokeDasharray="6 4" />

              {/* === BOTTOM ACCORDION EDGES === */}
              <rect x="0" y="228" width="340" height="8" rx="4" fill="#9a7228" opacity="0.5" />
              <rect x="3" y="226" width="334" height="4" rx="2" fill="#c49040" opacity="0.6" />
            </svg>

            {/* ── FRONT COVER FLAP (animated opening) ── */}
            <motion.div
              className="absolute top-0 left-0"
              style={{
                width: 340,
                height: 240,
                transformOrigin: "50% 0%",
                transformStyle: "preserve-3d",
              }}
              animate={{ rotateX: isOpen ? -160 : 0 }}
              transition={{ type: "spring", stiffness: 80, damping: 18, duration: 0.8 }}
            >
              <svg
                width="340"
                height="240"
                viewBox="0 0 340 240"
                xmlns="http://www.w3.org/2000/svg"
                style={{ display: "block" }}
              >
                <defs>
                  <pattern id="grain2" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="0.4" fill="#a07830" opacity="0.2" />
                    <circle cx="3" cy="3" r="0.3" fill="#906820" opacity="0.15" />
                  </pattern>
                </defs>

                {/* Main front cover body */}
                <rect x="0" y="40" width="340" height="200" rx="5" fill="#be943c" />
                <rect x="0" y="40" width="340" height="200" rx="5" fill="url(#grain2)" />

                {/* Tab (front cover continuation) */}
                <path
                  d="M 12 40 L 12 18 Q 12 10 20 10 L 130 10 Q 138 10 138 18 L 138 40 Z"
                  fill="#a87830"
                />

                {/* Front cover inner panel (slightly lighter) */}
                <rect x="10" y="50" width="320" height="180" rx="4" fill="#cc9e42" />
                <rect x="10" y="50" width="320" height="180" rx="4" fill="url(#grain2)" opacity="0.5" />

                {/* Horizontal fold crease */}
                <line x1="0" y1="140" x2="340" y2="140" stroke="#9a7228" strokeWidth="1" opacity="0.4" />

                {/* Top-right corner decoration (screw/rivet) */}
                <circle cx="310" cy="65" r="5" fill="#8a6030" stroke="#6a4820" strokeWidth="1.5" />
                <circle cx="310" cy="65" r="2" fill="#c4902a" />

                {/* Bottom-right corner decoration */}
                <circle cx="310" cy="215" r="5" fill="#8a6030" stroke="#6a4820" strokeWidth="1.5" />
                <circle cx="310" cy="215" r="2" fill="#c4902a" />

                {/* Embossed "MAP" text center */}
                <text
                  x="170" y="135"
                  textAnchor="middle"
                  fontFamily="Georgia, serif"
                  fontSize="28"
                  fill="#a07828"
                  opacity="0.25"
                  letterSpacing="8"
                >
                  MAP
                </text>

                {/* Bottom spine */}
                <rect x="0" y="228" width="340" height="8" rx="4" fill="#8a6228" opacity="0.5" />
              </svg>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* "Klik untuk membuka" hint */}
      {!isOpen && (
        <motion.div
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm font-medium"
          style={{ color: "#7a5c28" }}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          ✉ Klik untuk membuka map
        </motion.div>
      )}
    </div>
  );
}
