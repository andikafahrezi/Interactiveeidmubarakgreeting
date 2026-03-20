import { motion } from "motion/react";

// Fixed positions to avoid random-position rerender issues
const STARS = [
  { left: 8, top: 12, dur: 3.4, delay: 0.0 },
  { left: 22, top: 78, dur: 4.1, delay: 0.5 },
  { left: 38, top: 30, dur: 3.7, delay: 1.1 },
  { left: 55, top: 88, dur: 4.5, delay: 0.3 },
  { left: 68, top: 18, dur: 3.2, delay: 1.5 },
  { left: 80, top: 65, dur: 4.0, delay: 0.8 },
  { left: 92, top: 40, dur: 3.6, delay: 0.2 },
  { left: 15, top: 55, dur: 4.3, delay: 1.8 },
  { left: 45, top: 8, dur: 3.9, delay: 0.6 },
  { left: 72, top: 92, dur: 3.3, delay: 1.2 },
  { left: 88, top: 22, dur: 4.2, delay: 0.9 },
  { left: 32, top: 70, dur: 3.8, delay: 1.6 },
];

const CRESCENTS = [
  { left: 5, top: 35, dur: 5.0, delay: 0.4 },
  { left: 28, top: 15, dur: 4.5, delay: 1.0 },
  { left: 60, top: 75, dur: 5.5, delay: 0.2 },
  { left: 75, top: 48, dur: 4.8, delay: 1.4 },
  { left: 90, top: 80, dur: 5.2, delay: 0.7 },
  { left: 48, top: 52, dur: 4.6, delay: 2.0 },
];

const GEOMETRIC = [
  { left: 10, top: 20, size: 40, rot: 15, dur: 8, delay: 0 },
  { left: 82, top: 60, size: 50, rot: 30, dur: 10, delay: 1 },
  { left: 50, top: 85, size: 35, rot: 45, dur: 9, delay: 0.5 },
  { left: 25, top: 90, size: 28, rot: 20, dur: 7, delay: 2 },
  { left: 88, top: 10, size: 44, rot: 60, dur: 11, delay: 1.5 },
];

export function BackgroundDecoration() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">

      {/* Islamic geometric floating shapes */}
      {GEOMETRIC.map((g, i) => (
        <motion.div
          key={`geo-${i}`}
          className="absolute"
          style={{ left: `${g.left}%`, top: `${g.top}%` }}
          animate={{
            y: [0, -18, 0],
            rotate: [g.rot, g.rot + 10, g.rot],
            opacity: [0.06, 0.13, 0.06],
          }}
          transition={{
            duration: g.dur,
            repeat: Infinity,
            delay: g.delay,
            ease: "easeInOut",
          }}
        >
          <svg width={g.size} height={g.size} viewBox="0 0 60 60" fill="none">
            <path
              d="M30 4 L34 22 L52 18 L40 30 L52 42 L34 38 L30 56 L26 38 L8 42 L20 30 L8 18 L26 22 Z"
              stroke="#8a6030"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <circle cx="30" cy="30" r="8" stroke="#8a6030" strokeWidth="1" />
          </svg>
        </motion.div>
      ))}

      {/* Floating stars */}
      {STARS.map((s, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute"
          style={{ left: `${s.left}%`, top: `${s.top}%` }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.65, 0.2],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: s.dur,
            repeat: Infinity,
            delay: s.delay,
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14">
            <polygon
              points="7,1 8.5,5.5 13,5.5 9.5,8.5 10.5,13 7,10 3.5,13 4.5,8.5 1,5.5 5.5,5.5"
              fill="#c4a040"
              opacity="0.7"
            />
          </svg>
        </motion.div>
      ))}

      {/* Floating crescent moons */}
      {CRESCENTS.map((c, i) => (
        <motion.div
          key={`crescent-${i}`}
          className="absolute"
          style={{ left: `${c.left}%`, top: `${c.top}%` }}
          animate={{
            y: [0, 16, 0],
            x: [0, 8, 0],
            rotate: [0, 12, 0],
            opacity: [0.12, 0.3, 0.12],
          }}
          transition={{
            duration: c.dur,
            repeat: Infinity,
            delay: c.delay,
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M12 2 A10 10 0 1 1 2 12 A7 7 0 1 0 12 2 Z"
              fill="#8a6030"
              opacity="0.5"
            />
          </svg>
        </motion.div>
      ))}

      {/* Corner botanical vines - top left */}
      <div className="absolute top-0 left-0 opacity-10">
        <svg width="180" height="180" viewBox="0 0 180 180">
          <path
            d="M0,0 Q20,40 10,80 Q0,120 30,150 Q60,180 80,160"
            fill="none" stroke="#7a5820" strokeWidth="2.5" strokeLinecap="round"
          />
          <circle cx="10" cy="80" r="6" fill="#7a5820" opacity="0.6" />
          <circle cx="30" cy="150" r="8" fill="#7a5820" opacity="0.5" />
          <circle cx="25" cy="120" r="4" fill="#7a5820" opacity="0.4" />
          <path d="M10 80 Q-10 60 5 40" fill="none" stroke="#7a5820" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M30 150 Q50 140 40 120" fill="none" stroke="#7a5820" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

      {/* Bottom-right vine */}
      <div className="absolute bottom-0 right-0 opacity-10 rotate-180">
        <svg width="180" height="180" viewBox="0 0 180 180">
          <path
            d="M0,0 Q20,40 10,80 Q0,120 30,150 Q60,180 80,160"
            fill="none" stroke="#7a5820" strokeWidth="2.5" strokeLinecap="round"
          />
          <circle cx="10" cy="80" r="6" fill="#7a5820" opacity="0.6" />
          <circle cx="30" cy="150" r="8" fill="#7a5820" opacity="0.5" />
          <path d="M10 80 Q-10 60 5 40" fill="none" stroke="#7a5820" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M30 150 Q50 140 40 120" fill="none" stroke="#7a5820" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

      {/* Top-right vine */}
      <div className="absolute top-0 right-0 opacity-10" style={{ transform: "scaleX(-1)" }}>
        <svg width="160" height="160" viewBox="0 0 160 160">
          <path
            d="M0,0 Q30,30 20,70 Q10,100 40,130"
            fill="none" stroke="#7a5820" strokeWidth="2" strokeLinecap="round"
          />
          <circle cx="20" cy="70" r="5" fill="#7a5820" opacity="0.5" />
          <circle cx="40" cy="130" r="7" fill="#7a5820" opacity="0.4" />
          <path d="M20 70 Q0 55 10 35" fill="none" stroke="#7a5820" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

      {/* Bottom-left vine */}
      <div className="absolute bottom-0 left-0 opacity-10" style={{ transform: "scaleY(-1)" }}>
        <svg width="160" height="160" viewBox="0 0 160 160">
          <path
            d="M0,0 Q30,30 20,70 Q10,100 40,130"
            fill="none" stroke="#7a5820" strokeWidth="2" strokeLinecap="round"
          />
          <circle cx="20" cy="70" r="5" fill="#7a5820" opacity="0.5" />
          <circle cx="40" cy="130" r="7" fill="#7a5820" opacity="0.4" />
        </svg>
      </div>

      {/* Subtle dot pattern background texture */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="bg-dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#5a3c10" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#bg-dots)" />
      </svg>
    </div>
  );
}
