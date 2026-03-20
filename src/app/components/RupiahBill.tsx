/**
 * Komponen SVG Uang Rupiah Indonesia
 * Desain berdasarkan tampilan uang kertas rupiah asli
 */

interface RupiahBillProps {
  amount: number;
}

type BillInfo = {
  bg: string;
  accent: string;
  dark: string;
  light: string;
  label: string;
  figure: string;
  backDesign: string;
};

// Data visual masing-masing pecahan rupiah
const billData: Record<number, BillInfo> = {
  100000: {
    bg: "#d44a3a",
    accent: "#b83428",
    dark: "#8c2018",
    light: "#e87060",
    label: "SERATUS RIBU RUPIAH",
    figure: "Ir. Soekarno &\nMoh. Hatta",
    backDesign: "Istana Merdeka",
  },
  50000: {
    bg: "#2355a0",
    accent: "#1a3d7c",
    dark: "#102558",
    light: "#4a75c0",
    label: "LIMA PULUH RIBU RUPIAH",
    figure: "Djuanda\nKartawidjaja",
    backDesign: "Raja Ampat",
  },
  20000: {
    bg: "#2a8a50",
    accent: "#1e6a3c",
    dark: "#124a28",
    light: "#4aaa70",
    label: "DUA PULUH RIBU RUPIAH",
    figure: "Otto Iskandar\nDinata",
    backDesign: "Pura Ulun Danu",
  },
  10000: {
    bg: "#6a3a9a",
    accent: "#502a7c",
    dark: "#361858",
    light: "#8a5aba",
    label: "SEPULUH RIBU RUPIAH",
    figure: "Frans Kaisiepo",
    backDesign: "Danau Sentani",
  },
  5000: {
    bg: "#a05020",
    accent: "#7c3c14",
    dark: "#58280c",
    light: "#c07040",
    label: "LIMA RIBU RUPIAH",
    figure: "Idham Chalid",
    backDesign: "Jam Gadang",
  },
  2000: {
    bg: "#6a8c5a",
    accent: "#506a42",
    dark: "#384c2c",
    light: "#8aac7a",
    label: "DUA RIBU RUPIAH",
    figure: "M. Hoesni\nThamrin",
    backDesign: "Ngarai Sianok",
  },
};

export function RupiahBill({ amount }: RupiahBillProps) {
  const data = billData[amount] ?? billData[100000];
  const formatted = new Intl.NumberFormat("id-ID").format(amount);
  const serialNum = String(Math.floor(Math.random() * 900000 + 100000));

  return (
    <div
      className="relative"
      style={{
        width: 320,
        height: 155,
        filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.35))",
      }}
    >
      <svg
        width="320"
        height="155"
        viewBox="0 0 320 155"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id={`micro-${amount}`}
            x="0" y="0" width="6" height="6"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="0.6" fill={data.accent} opacity="0.15" />
            <circle cx="4" cy="4" r="0.4" fill={data.light} opacity="0.1" />
          </pattern>
          <pattern
            id={`lines-${amount}`}
            x="0" y="0" width="3" height="3"
            patternUnits="userSpaceOnUse"
          >
            <line x1="0" y1="0" x2="3" y2="3" stroke={data.dark} strokeWidth="0.3" opacity="0.12" />
          </pattern>
        </defs>

        {/* Bill body */}
        <rect x="0" y="0" width="320" height="155" rx="8" fill={data.bg} />
        <rect x="0" y="0" width="320" height="155" rx="8" fill={`url(#micro-${amount})`} />
        <rect x="0" y="0" width="320" height="155" rx="8" fill={`url(#lines-${amount})`} />

        {/* Outer borders */}
        <rect x="4" y="4" width="312" height="147" rx="6" fill="none" stroke="white" strokeWidth="1.2" opacity="0.3" />
        <rect x="7" y="7" width="306" height="141" rx="5" fill="none" stroke="white" strokeWidth="0.6" opacity="0.2" />

        {/* Left figure panel */}
        <rect x="0" y="0" width="110" height="155" rx="8" fill={data.accent} />
        <rect x="110" y="0" width="4" height="155" fill={data.dark} opacity="0.3" />

        {/* Garuda silhouette (simplified) */}
        <g transform="translate(55, 40) scale(0.42)">
          <path
            d="M-90-10 C-70-30 -40-40 0-35 C40-40 70-30 90-10 C70 0 40-5 0-5 C-40-5 -70 0 -90-10Z"
            fill="white" opacity="0.18"
          />
          <ellipse cx="0" cy="10" rx="22" ry="30" fill="white" opacity="0.18" />
          <circle cx="0" cy="-28" r="14" fill="white" opacity="0.18" />
          <path d="M 6-22 L 16-18 L 6-15Z" fill="white" opacity="0.25" />
          <path d="M-15 38 C-5 50 5 50 15 38 C5 42 -5 42 -15 38Z" fill="white" opacity="0.18" />
        </g>

        {/* Figure silhouette */}
        <ellipse cx="55" cy="75" rx="24" ry="30" fill="white" opacity="0.08" />
        <ellipse cx="55" cy="60" rx="14" ry="14" fill="white" opacity="0.08" />

        {/* Figure name */}
        {data.figure.split("\n").map((line, i) => (
          <text
            key={i}
            x="55"
            y={125 + i * 11}
            textAnchor="middle"
            fontFamily="serif"
            fontSize="7.5"
            fill="white"
            opacity="0.7"
          >
            {line}
          </text>
        ))}

        {/* BANK INDONESIA header */}
        <text
          x="215" y="26"
          textAnchor="middle"
          fontFamily="serif"
          fontSize="11"
          fontWeight="bold"
          fill="white"
          opacity="0.9"
          letterSpacing="1.5"
        >
          BANK INDONESIA
        </text>
        <line x1="120" y1="31" x2="310" y2="31" stroke="white" strokeWidth="0.8" opacity="0.4" />

        {/* Nominal amount */}
        <text
          x="215" y="80"
          textAnchor="middle"
          fontFamily="Arial, sans-serif"
          fontSize="34"
          fontWeight="900"
          fill="white"
          opacity="0.95"
          letterSpacing="-0.5"
        >
          {formatted}
        </text>

        {/* RUPIAH label */}
        <text
          x="215" y="96"
          textAnchor="middle"
          fontFamily="serif"
          fontSize="11"
          fontWeight="bold"
          fill="white"
          opacity="0.75"
          letterSpacing="4"
        >
          RUPIAH
        </text>

        {/* Full denomination label */}
        <text
          x="215" y="115"
          textAnchor="middle"
          fontFamily="serif"
          fontSize="7.5"
          fill="white"
          opacity="0.6"
          letterSpacing="0.5"
        >
          {data.label}
        </text>

        <line x1="120" y1="122" x2="310" y2="122" stroke="white" strokeWidth="0.6" opacity="0.3" />

        {/* Back design name */}
        <text
          x="215" y="136"
          textAnchor="middle"
          fontFamily="serif"
          fontSize="7"
          fill="white"
          opacity="0.5"
          letterSpacing="0.5"
        >
          {data.backDesign}
        </text>

        {/* Serial number */}
        <text
          x="125" y="148"
          fontFamily="monospace"
          fontSize="6.5"
          fill="white"
          opacity="0.4"
          letterSpacing="1"
        >
          HHD {serialNum}
        </text>

        {/* Security watermark circles */}
        <circle cx="282" cy="55" r="18" fill="none" stroke="white" strokeWidth="0.8" opacity="0.15" />
        <circle cx="282" cy="55" r="12" fill="none" stroke="white" strokeWidth="0.5" opacity="0.12" />

        {/* Corner denomination markers */}
        <text x="118" y="18" fontFamily="monospace" fontSize="8" fill="white" opacity="0.5" fontWeight="bold">
          {amount >= 1000 ? `${amount / 1000}K` : amount}
        </text>
        <text x="302" y="148" textAnchor="end" fontFamily="monospace" fontSize="8" fill="white" opacity="0.5" fontWeight="bold">
          {amount >= 1000 ? `${amount / 1000}K` : amount}
        </text>
      </svg>
    </div>
  );
}
