import React, { useState } from 'react';
import { MapPin, Navigation, Shield, Award, Zap, Compass, CheckCircle2 } from 'lucide-react';

/**
 * High-impact hero composite graphic:
 * Batsman executing explosive shot, bowler in action, cricket ball seam, neon green stadium flare
 */
export function HeroCricketGraphic() {
  return (
    <div className="relative w-full aspect-[4/3] lg:aspect-[16/13] max-w-xl mx-auto rounded-3xl overflow-hidden border border-neutral-800 bg-gradient-to-b from-neutral-900 via-neutral-950 to-black shadow-2xl shadow-lime-950/20 group">
      {/* Background Stadium Floodlights & Turf Grid */}
      <div className="absolute inset-0 turf-grid-bg opacity-30" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Stylized Cricket Arena SVG Artwork */}
      <svg
        className="absolute inset-0 w-full h-full object-cover"
        viewBox="0 0 800 650"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="turfGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#14532d" />
            <stop offset="40%" stopColor="#15803d" />
            <stop offset="100%" stopColor="#22c55e" />
          </linearGradient>
          <linearGradient id="neonBeam" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#84cc16" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="ballGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#bef264" />
            <stop offset="70%" stopColor="#65a30d" />
            <stop offset="100%" stopColor="#3f6212" />
          </radialGradient>
          <linearGradient id="batWood" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="50%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#78350f" />
          </linearGradient>
          <pattern id="netMesh" width="12" height="12" patternUnits="userSpaceOnUse">
            <path d="M 0 0 L 12 12 M 12 0 L 0 12" stroke="rgba(132, 204, 22, 0.25)" strokeWidth="1" />
          </pattern>
        </defs>

        {/* Indoor Net Cage Frame in perspective */}
        <polygon points="100,60 700,60 780,600 20,600" fill="url(#netMesh)" />
        <line x1="100" y1="60" x2="20" y2="600" stroke="#84cc16" strokeWidth="3" opacity="0.6" />
        <line x1="700" y1="60" x2="780" y2="600" stroke="#84cc16" strokeWidth="3" opacity="0.6" />
        <line x1="100" y1="60" x2="700" y2="600" stroke="#84cc16" strokeWidth="1.5" opacity="0.3" />
        <line x1="700" y1="60" x2="100" y2="600" stroke="#84cc16" strokeWidth="1.5" opacity="0.3" />

        {/* Central Turf Pitch */}
        <polygon points="260,220 540,220 620,600 180,600" fill="url(#turfGrad)" opacity="0.85" />
        {/* Pitch Crease Lines */}
        <line x1="220" y1="480" x2="580" y2="480" stroke="#ffffff" strokeWidth="3.5" opacity="0.9" />
        <line x1="270" y1="260" x2="530" y2="260" stroke="#ffffff" strokeWidth="2.5" opacity="0.8" />
        <line x1="300" y1="480" x2="300" y2="560" stroke="#ffffff" strokeWidth="2.5" opacity="0.8" />
        <line x1="500" y1="480" x2="500" y2="560" stroke="#ffffff" strokeWidth="2.5" opacity="0.8" />

        {/* Yellow Spring Stumps in Foreground */}
        <g transform="translate(380, 420)">
          {/* Base */}
          <rect x="-35" y="65" width="70" height="12" rx="4" fill="#eab308" />
          {/* Stumps */}
          <rect x="-24" y="-2" width="7" height="68" rx="2" fill="#facc15" stroke="#ca8a04" strokeWidth="1" />
          <rect x="-4" y="-2" width="7" height="68" rx="2" fill="#facc15" stroke="#ca8a04" strokeWidth="1" />
          <rect x="16" y="-2" width="7" height="68" rx="2" fill="#facc15" stroke="#ca8a04" strokeWidth="1" />
          {/* Bails */}
          <rect x="-26" y="-6" width="24" height="4" rx="1.5" fill="#fef08a" />
          <rect x="-2" y="-6" width="24" height="4" rx="1.5" fill="#fef08a" />
        </g>

        {/* Speed Arc Trajectory (Green Lightning Arc) */}
        <path
          d="M 680,120 Q 520,180 400,430"
          stroke="url(#neonBeam)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray="8 6"
        />

        {/* Fast Bowler Silhouette (Top Right Delivery Stride) */}
        <g transform="translate(560, 90) scale(0.9)" opacity="0.95">
          {/* Energy aura */}
          <circle cx="90" cy="90" r="100" fill="#84cc16" opacity="0.1" />
          {/* Head & Cap */}
          <circle cx="105" cy="55" r="18" fill="#e2e8f0" />
          <path d="M 95 45 Q 120 40 132 50" stroke="#84cc16" strokeWidth="4" />
          {/* Torso in delivery rotation */}
          <path d="M 98 72 L 80 140 L 115 135 L 118 72 Z" fill="#ffffff" />
          {/* High Bowling Arm extended */}
          <path d="M 115 80 L 155 20" stroke="#f1f5f9" strokeWidth="14" strokeLinecap="round" />
          {/* Hand holding cricket ball */}
          <circle cx="158" cy="18" r="12" fill="url(#ballGlow)" />
          {/* Non bowling arm */}
          <path d="M 85 85 L 55 120" stroke="#f1f5f9" strokeWidth="12" strokeLinecap="round" />
          {/* Bowling legs stride */}
          <path d="M 85 140 L 45 220" stroke="#1e293b" strokeWidth="16" strokeLinecap="round" />
          <path d="M 115 135 L 140 215" stroke="#1e293b" strokeWidth="16" strokeLinecap="round" />
          {/* Bowling boots */}
          <rect x="30" y="215" width="28" height="10" rx="3" fill="#84cc16" />
          <rect x="135" y="210" width="28" height="10" rx="3" fill="#ffffff" />
        </g>

        {/* Batsman Silhouette (Bottom Left / Center Dominant Action) */}
        <g transform="translate(190, 190) scale(1.15)">
          {/* Batsman Shadow on Turf */}
          <ellipse cx="140" cy="270" rx="75" ry="18" fill="#052e16" opacity="0.7" />
          {/* Batting Pads (White Test pads) */}
          <rect x="110" y="160" width="22" height="90" rx="6" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
          <rect x="140" y="150" width="22" height="95" rx="6" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
          {/* Straps on pads */}
          <line x1="110" y1="185" x2="132" y2="185" stroke="#84cc16" strokeWidth="2" />
          <line x1="110" y1="215" x2="132" y2="215" stroke="#84cc16" strokeWidth="2" />
          <line x1="140" y1="180" x2="162" y2="180" stroke="#84cc16" strokeWidth="2" />
          <line x1="140" y1="210" x2="162" y2="210" stroke="#84cc16" strokeWidth="2" />
          {/* Torso & Jersey (ACK Sports Green & White) */}
          <path d="M 105 100 L 165 95 L 155 160 L 115 160 Z" fill="#ffffff" />
          <path d="M 115 98 L 135 158" stroke="#84cc16" strokeWidth="6" />
          {/* Helmet & Visor */}
          <ellipse cx="130" cy="72" rx="19" ry="20" fill="#0f172a" />
          <rect x="120" y="70" width="26" height="14" rx="2" fill="none" stroke="#94a3b8" strokeWidth="2.5" />
          <path d="M 125 58 Q 148 58 148 68" stroke="#84cc16" strokeWidth="3" />
          {/* Leading Arms playing Pull / Drive */}
          <path d="M 115 105 L 85 115 L 70 85" stroke="#f8fafc" strokeWidth="13" strokeLinecap="round" />
          <path d="M 155 102 L 115 105" stroke="#f8fafc" strokeWidth="12" strokeLinecap="round" />
          {/* Batting Gloves */}
          <circle cx="70" cy="85" r="9" fill="#84cc16" stroke="#ffffff" strokeWidth="2" />
          <circle cx="80" cy="92" r="9" fill="#84cc16" stroke="#ffffff" strokeWidth="2" />
          {/* Cricket Bat (Willow with green grip) */}
          <g transform="translate(68, 80) rotate(-42)">
            {/* Handle */}
            <rect x="-4" y="-30" width="8" height="30" rx="3" fill="#84cc16" />
            <line x1="-4" y1="-20" x2="4" y2="-20" stroke="#ffffff" strokeWidth="1" />
            <line x1="-4" y1="-10" x2="4" y2="-10" stroke="#ffffff" strokeWidth="1" />
            {/* Blade */}
            <path d="M -9 0 L 9 0 L 7 90 Q 0 98 -7 90 Z" fill="url(#batWood)" stroke="#92400e" strokeWidth="1.5" />
            {/* Colored Bat Sticker */}
            <rect x="-6" y="10" width="12" height="32" fill="#0f172a" rx="1" />
            <text x="0" y="28" fill="#84cc16" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">ACK</text>
          </g>
        </g>

        {/* Dynamic Glowing Cricket Ball with Seam */}
        <g transform="translate(420, 290)">
          <circle cx="0" cy="0" r="16" fill="url(#ballGlow)" filter="drop-shadow(0 0 12px #84cc16)" />
          {/* Ball Seam stitches */}
          <path d="M -14 0 Q 0 -6 14 0" stroke="#ffffff" strokeWidth="2" strokeDasharray="2 1.5" />
          <path d="M -14 0 Q 0 6 14 0" stroke="#ffffff" strokeWidth="2" strokeDasharray="2 1.5" />
        </g>
      </svg>

      {/* Floating Modern HUD Badges */}
      <div className="absolute top-4 left-4 bg-neutral-900/90 backdrop-blur-md border border-neutral-700/80 px-3.5 py-1.5 rounded-xl flex items-center gap-2 shadow-lg">
        <span className="w-2.5 h-2.5 rounded-full bg-lime-400 animate-pulse" />
        <span className="text-xs font-semibold tracking-wider text-lime-400 font-sports">HOKANDARA NETS ACTIVE</span>
      </div>

      <div className="absolute bottom-4 right-4 bg-neutral-900/95 backdrop-blur-md border border-neutral-700/80 px-4 py-2 rounded-xl text-right shadow-xl">
        <div className="text-[10px] uppercase font-bold tracking-widest text-neutral-400">PITCH SPEC</div>
        <div className="text-sm font-extrabold text-white flex items-center gap-1.5">
          <Zap className="w-4 h-4 text-lime-400 fill-lime-400" />
          22-Yard Pro Turf
        </div>
      </div>
    </div>
  );
}

/**
 * Indoor Turf Pitch Preview Graphic (matches Screenshot 2 & 7)
 * High-definition astroturf, tournament safety netting, yellow target stumps, cricket bat on pitch
 */
export function TurfPitchPreview() {
  return (
    <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-950 shadow-2xl group">
      {/* Background Turf & Netting perspective */}
      <svg
        className="w-full h-full object-cover"
        viewBox="0 0 700 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="astroGreen" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#15803d" />
            <stop offset="60%" stopColor="#16a34a" />
            <stop offset="100%" stopColor="#22c55e" />
          </linearGradient>
          <linearGradient id="skyLighting" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>
          <pattern id="turfPattern" width="16" height="16" patternUnits="userSpaceOnUse">
            <rect width="16" height="16" fill="#16a34a" />
            <path d="M0 0 L16 16 M16 0 L0 16" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          </pattern>
          <pattern id="netMesh2" width="10" height="10" patternUnits="userSpaceOnUse">
            <rect width="10" height="10" fill="none" />
            <path d="M 0 5 L 10 5 M 5 0 L 5 10" stroke="rgba(132, 204, 22, 0.4)" strokeWidth="0.8" />
          </pattern>
        </defs>

        {/* High Ceiling Sports Facility Lighting */}
        <rect width="700" height="200" fill="url(#skyLighting)" />
        {/* Overhead LED Floodlight bars */}
        <rect x="120" y="25" width="120" height="8" rx="2" fill="#ffffff" opacity="0.9" filter="drop-shadow(0 0 8px #ffffff)" />
        <rect x="300" y="25" width="120" height="8" rx="2" fill="#ffffff" opacity="0.9" filter="drop-shadow(0 0 8px #ffffff)" />
        <rect x="480" y="25" width="120" height="8" rx="2" fill="#ffffff" opacity="0.9" filter="drop-shadow(0 0 8px #ffffff)" />

        {/* Green Cage Enclosure */}
        <polygon points="80,70 620,70 690,480 10,480" fill="url(#netMesh2)" />
        {/* Steel Net Posts */}
        <line x1="80" y1="70" x2="10" y2="480" stroke="#84cc16" strokeWidth="4" />
        <line x1="620" y1="70" x2="690" y2="480" stroke="#84cc16" strokeWidth="4" />
        <line x1="80" y1="70" x2="620" y2="70" stroke="#84cc16" strokeWidth="4" />
        {/* Cross Bracing */}
        <line x1="80" y1="180" x2="620" y2="180" stroke="#84cc16" strokeWidth="2" opacity="0.6" />
        <line x1="80" y1="300" x2="620" y2="300" stroke="#84cc16" strokeWidth="2" opacity="0.6" />

        {/* Pitch Turf Floor */}
        <polygon points="180,180 520,180 640,520 60,520" fill="url(#astroGreen)" />
        <polygon points="180,180 520,180 640,520 60,520" fill="url(#turfPattern)" opacity="0.4" />

        {/* White Crease Markings */}
        <line x1="120" y1="440" x2="580" y2="440" stroke="#ffffff" strokeWidth="4" />
        <line x1="200" y1="210" x2="500" y2="210" stroke="#ffffff" strokeWidth="3" />
        <line x1="190" y1="440" x2="190" y2="520" stroke="#ffffff" strokeWidth="3" />
        <line x1="510" y1="440" x2="510" y2="520" stroke="#ffffff" strokeWidth="3" />

        {/* Regulation Yellow Spring Stumps in Foreground */}
        <g transform="translate(350, 360)">
          {/* Base plate */}
          <rect x="-42" y="74" width="84" height="14" rx="4" fill="#eab308" stroke="#a16207" strokeWidth="1.5" />
          <circle cx="-30" cy="81" r="3" fill="#713f12" />
          <circle cx="30" cy="81" r="3" fill="#713f12" />
          {/* 3 Stumps */}
          <rect x="-28" y="-6" width="8" height="82" rx="2" fill="#facc15" stroke="#ca8a04" strokeWidth="1" />
          <rect x="-4" y="-6" width="8" height="82" rx="2" fill="#facc15" stroke="#ca8a04" strokeWidth="1" />
          <rect x="20" y="-6" width="8" height="82" rx="2" fill="#facc15" stroke="#ca8a04" strokeWidth="1" />
          {/* 2 Bails */}
          <rect x="-31" y="-11" width="28" height="5" rx="2" fill="#fef08a" stroke="#ca8a04" strokeWidth="0.8" />
          <rect x="-3" y="-11" width="28" height="5" rx="2" fill="#fef08a" stroke="#ca8a04" strokeWidth="0.8" />
        </g>

        {/* Cricket Bat resting on pitch beside stumps */}
        <g transform="translate(420, 420) rotate(55)">
          {/* Rubber grip */}
          <rect x="-4" y="-35" width="8" height="35" rx="3" fill="#84cc16" />
          {/* Blade */}
          <path d="M -8 0 L 8 0 L 6 95 Q 0 102 -6 95 Z" fill="#d97706" stroke="#92400e" strokeWidth="1.5" />
          {/* Branding */}
          <rect x="-5" y="15" width="10" height="35" rx="1" fill="#0f172a" />
          <text x="0" y="36" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">ACK</text>
        </g>

        {/* Cricket Ball on the grass */}
        <circle cx="280" cy="450" r="14" fill="#dc2626" stroke="#991b1b" strokeWidth="1" />
        <path d="M 268 450 Q 280 445 292 450" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="1.5 1" />
      </svg>

      {/* Location Tag in the lower left corner (as in Screenshot 2) */}
      <div className="absolute bottom-4 left-4 bg-neutral-900/90 backdrop-blur-md border border-neutral-700/80 px-3.5 py-2 rounded-xl flex items-center gap-2.5 shadow-xl">
        <MapPin className="w-4 h-4 text-lime-400 shrink-0" />
        <div className="text-left">
          <div className="text-xs font-bold text-white tracking-wide">ACK Indoor Cricket</div>
          <div className="text-[11px] text-neutral-400">Hokandara, Western Province</div>
        </div>
      </div>
    </div>
  );
}

/**
 * Interactive Cricket Radar Map Component (matches Screenshot 4)
 * Concentric circles, radar sweep animation, pulsing venue ping, driving routes from nearby hubs
 */
export function CricketRadarMap() {
  const [selectedHub, setSelectedHub] = useState<string>('athurugiriya');

  const HUBS = [
    { id: 'athurugiriya', name: 'Athurugiriya Interchange', dist: '2.1 km', time: '4 mins' },
    { id: 'malabe', name: 'Malabe Junction', dist: '3.4 km', time: '6 mins' },
    { id: 'thalawathugoda', name: 'Thalawathugoda', dist: '4.2 km', time: '8 mins' },
    { id: 'pannipitiya', name: 'Pannipitiya Station', dist: '3.8 km', time: '7 mins' },
    { id: 'colombo', name: 'Colombo / Rajagiriya', dist: '11.5 km', time: '18 mins' },
  ];

  return (
    <div className="w-full rounded-3xl bg-neutral-950 border border-neutral-800 p-6 shadow-2xl relative overflow-hidden">
      {/* Radar Grid & Animation Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-lime-400 animate-ping" />
          <span className="text-xs uppercase tracking-widest font-extrabold text-lime-400 font-sports">
            HOKANDARA RADAR LOCATOR
          </span>
        </div>
        <div className="text-xs text-neutral-400 font-mono">
          GPS: 6.8782° N, 79.9678° E
        </div>
      </div>

      {/* Radar Canvas SVG */}
      <div className="relative w-full aspect-[16/10] max-h-80 mx-auto rounded-2xl bg-neutral-900/90 border border-neutral-800/80 overflow-hidden flex items-center justify-center">
        {/* Subtle coordinate grid lines */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-lime-950/20 via-neutral-950/60 to-black" />

        <svg className="w-full h-full" viewBox="0 0 500 320" fill="none">
          {/* Concentric distance rings */}
          <circle cx="250" cy="160" r="40" stroke="#84cc16" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="3 3" />
          <circle cx="250" cy="160" r="85" stroke="#84cc16" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 4" />
          <circle cx="250" cy="160" r="130" stroke="#84cc16" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="5 5" />

          {/* Crosshairs */}
          <line x1="250" y1="20" x2="250" y2="300" stroke="#84cc16" strokeWidth="1" strokeOpacity="0.2" />
          <line x1="20" y1="160" x2="480" y2="160" stroke="#84cc16" strokeWidth="1" strokeOpacity="0.2" />

          {/* Distance labels */}
          <text x="255" y="125" fill="#a3e635" fontSize="9" opacity="0.6" fontFamily="monospace">1 KM</text>
          <text x="255" y="80" fill="#a3e635" fontSize="9" opacity="0.6" fontFamily="monospace">3 KM</text>
          <text x="255" y="35" fill="#a3e635" fontSize="9" opacity="0.6" fontFamily="monospace">5 KM</text>

          {/* Nearby Hub Markers */}
          {/* Malabe (North-East) */}
          <g transform="translate(340, 90)">
            <circle cx="0" cy="0" r="4" fill="#64748b" />
            <text x="8" y="4" fill="#94a3b8" fontSize="10" fontFamily="sans-serif">Malabe</text>
          </g>
          {/* Athurugiriya Interchange (East) */}
          <g transform="translate(380, 160)">
            <circle cx="0" cy="0" r="4" fill="#64748b" />
            <text x="8" y="4" fill="#94a3b8" fontSize="10" fontFamily="sans-serif">Athurugiriya Exit</text>
          </g>
          {/* Thalawathugoda (West) */}
          <g transform="translate(130, 150)">
            <circle cx="0" cy="0" r="4" fill="#64748b" />
            <text x="-80" y="4" fill="#94a3b8" fontSize="10" fontFamily="sans-serif">Thalawathugoda</text>
          </g>
          {/* Pannipitiya (South) */}
          <g transform="translate(240, 260)">
            <circle cx="0" cy="0" r="4" fill="#64748b" />
            <text x="8" y="4" fill="#94a3b8" fontSize="10" fontFamily="sans-serif">Pannipitiya</text>
          </g>

          {/* Highway trace */}
          <path
            d="M 100,50 Q 220,110 380,160 Q 440,190 480,240"
            stroke="#334155"
            strokeWidth="3"
            strokeDasharray="6 4"
            fill="none"
          />

          {/* Selected Route line from hub to ACK */}
          <path
            d="M 250,160 L 380,160"
            stroke="#84cc16"
            strokeWidth="2.5"
            strokeDasharray="4 2"
            fill="none"
          />

          {/* Central Target: ACK Indoor Cricket Hokandara */}
          <g transform="translate(250, 160)">
            {/* Pulsing ring */}
            <circle cx="0" cy="0" r="24" fill="#84cc16" opacity="0.25">
              <animate attributeName="r" values="10;32;10" dur="2.4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.4;0.05;0.4" dur="2.4s" repeatCount="indefinite" />
            </circle>
            {/* Center Pin */}
            <circle cx="0" cy="0" r="9" fill="#84cc16" stroke="#ffffff" strokeWidth="2.5" filter="drop-shadow(0 0 8px #84cc16)" />
          </g>
        </svg>

        {/* Overlay Venue Box inside Radar (matches Screenshot 4) */}
        <div className="absolute bottom-3 left-3 bg-neutral-900/90 backdrop-blur-md border border-neutral-700/80 p-3 rounded-xl max-w-xs shadow-xl text-left">
          <div className="text-xs font-bold text-white flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-lime-400" />
            ACK Indoor Cricket
          </div>
          <div className="text-[11px] text-neutral-400 mt-0.5">
            Hokandara Junction, Sri Lanka
          </div>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Indoor+Cricket+Hokandara+Sri+Lanka"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[11px] font-semibold text-lime-400 hover:text-lime-300 mt-1.5 transition-colors"
          >
            Open in Maps
            <Navigation className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Quick Travel Distance Chips */}
      <div className="mt-4">
        <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold mb-2">
          Estimated driving times to ACK Hokandara:
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
          {HUBS.map((hub) => {
            const isSelected = selectedHub === hub.id;
            return (
              <button
                key={hub.id}
                type="button"
                onClick={() => setSelectedHub(hub.id)}
                className={`p-2 rounded-xl text-left transition-all border ${
                  isSelected
                    ? 'bg-lime-950/40 border-lime-500 text-white shadow-sm shadow-lime-900/30'
                    : 'bg-neutral-900/60 border-neutral-800 text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900'
                }`}
              >
                <div className="text-[11px] font-medium truncate">{hub.name}</div>
                <div className="text-xs font-bold text-lime-400 mt-0.5">
                  {hub.time} <span className="text-[10px] text-neutral-400 font-normal">({hub.dist})</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
