import React, { useState } from 'react';
import { Maximize2, X, Tag } from 'lucide-react';
import { GALLERY_PHOTOS } from '../data/cricketData';
import { GalleryPhoto } from '../types';

export function GallerySection() {
  const [filter, setFilter] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  const filteredPhotos = filter === 'all'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter((p) => p.category === filter);

  return (
    <section id="gallery-section" className="py-16 lg:py-24 bg-neutral-950 border-t border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header (matches Screenshot 7) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 text-left">
          <div className="max-w-2xl">
            <div className="text-xs uppercase font-extrabold tracking-widest text-lime-400 font-sports">
              GALLERY
            </div>
            <h2 className="font-sports text-4xl sm:text-5xl font-black uppercase text-white tracking-tight mt-2">
              Inside ACK Indoor Cricket.
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg mt-3">
              A quick look at the nets and practice energy. Venue photos can replace demo imagery later.
            </p>
          </div>

          {/* Filter Tabs (Interactive segmented buttons allowed by frontend-design skill) */}
          <div className="flex items-center gap-1.5 p-1 bg-neutral-900 border border-neutral-800 rounded-xl overflow-x-auto max-w-full">
            {['all', 'nets', 'action', 'coaching', 'gear'].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg capitalize transition-colors cursor-pointer whitespace-nowrap ${
                  filter === cat
                    ? 'bg-lime-500 text-black shadow-sm font-bold'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid (matches Screenshot 7 asymmetric layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, index) => {
            const isFeatured = index === 0;
            return (
              <div
                key={photo.id}
                onClick={() => setSelectedPhoto(photo)}
                className={`group relative rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-xl cursor-pointer hover:border-lime-500/60 transition-all ${
                  isFeatured ? 'md:col-span-2 lg:col-span-1 lg:row-span-2 min-h-[380px]' : 'min-h-[220px]'
                }`}
              >
                {/* SVG Cricket Artwork Container */}
                <div className="w-full h-full min-h-[240px] flex items-center justify-center relative bg-gradient-to-b from-neutral-900 to-neutral-950">
                  {renderPhotoIllustration(photo.svgType)}

                  {/* Dark hover overlay */}
                  <div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="p-3 rounded-full bg-lime-500 text-black shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                      <Maximize2 className="w-5 h-5" />
                    </span>
                  </div>

                  {/* Tag Chip */}
                  <div className="absolute top-3 left-3 bg-neutral-950/80 backdrop-blur-md border border-neutral-700/80 px-2.5 py-1 rounded-lg text-[10px] font-mono text-lime-400 font-bold">
                    {photo.tag}
                  </div>
                </div>

                {/* Caption Bar */}
                <div className="p-4 bg-neutral-900/95 border-t border-neutral-800/80 text-left">
                  <div className="font-sports font-bold text-white text-base group-hover:text-lime-400 transition-colors">
                    {photo.title}
                  </div>
                  <div className="text-xs text-neutral-400 line-clamp-1 mt-0.5">
                    {photo.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-neutral-900 border border-neutral-800 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative">
            <button
              type="button"
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-full h-72 sm:h-96 relative bg-neutral-950 flex items-center justify-center">
              {renderPhotoIllustration(selectedPhoto.svgType)}
            </div>

            <div className="p-6 text-left">
              <div className="text-xs uppercase font-mono font-bold text-lime-400 mb-1">
                {selectedPhoto.tag}
              </div>
              <h3 className="font-sports text-2xl font-bold text-white">
                {selectedPhoto.title}
              </h3>
              <p className="text-sm text-neutral-300 mt-2 leading-relaxed">
                {selectedPhoto.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function renderPhotoIllustration(type: GalleryPhoto['svgType']) {
  switch (type) {
    case 'turf-wide':
      return (
        <svg className="w-full h-full" viewBox="0 0 400 300" fill="none">
          <rect width="400" height="300" fill="#052e16" />
          <polygon points="50,40 350,40 390,280 10,280" fill="#15803d" />
          {/* Turf lines */}
          <line x1="80" y1="240" x2="320" y2="240" stroke="#ffffff" strokeWidth="2.5" />
          {/* Stumps */}
          <rect x="180" y="160" width="40" height="8" rx="2" fill="#eab308" />
          <rect x="186" y="110" width="5" height="50" fill="#facc15" />
          <rect x="198" y="110" width="5" height="50" fill="#facc15" />
          <rect x="210" y="110" width="5" height="50" fill="#facc15" />
          <rect x="184" y="107" width="34" height="3" fill="#fef08a" />
          {/* Net frame */}
          <line x1="50" y1="40" x2="10" y2="280" stroke="#84cc16" strokeWidth="3" opacity="0.6" />
          <line x1="350" y1="40" x2="390" y2="280" stroke="#84cc16" strokeWidth="3" opacity="0.6" />
          <line x1="50" y1="40" x2="350" y2="40" stroke="#84cc16" strokeWidth="3" opacity="0.6" />
        </svg>
      );
    case 'batsman-pull':
      return (
        <svg className="w-full h-full" viewBox="0 0 400 300" fill="none">
          <rect width="400" height="300" fill="#090d16" />
          <circle cx="200" cy="150" r="90" fill="#84cc16" opacity="0.1" />
          {/* Batting action silhouette */}
          <ellipse cx="200" cy="240" rx="60" ry="12" fill="#000" opacity="0.6" />
          {/* Pads */}
          <rect x="175" y="160" width="20" height="70" rx="4" fill="#f8fafc" />
          <rect x="205" y="150" width="20" height="75" rx="4" fill="#f8fafc" />
          {/* Torso */}
          <path d="M 170 110 L 225 105 L 215 160 L 180 160 Z" fill="#ffffff" />
          {/* Helmet */}
          <circle cx="198" cy="85" r="16" fill="#0f172a" stroke="#84cc16" strokeWidth="2" />
          {/* Bat in shot follow-through */}
          <line x1="220" y1="120" x2="150" y2="70" stroke="#84cc16" strokeWidth="8" strokeLinecap="round" />
          <rect x="125" y="45" width="40" height="14" rx="2" fill="#d97706" transform="rotate(-35 125 45)" />
        </svg>
      );
    case 'bowler-stride':
      return (
        <svg className="w-full h-full" viewBox="0 0 400 300" fill="none">
          <rect width="400" height="300" fill="#0a0a0a" />
          <line x1="50" y1="260" x2="350" y2="260" stroke="#16a34a" strokeWidth="8" />
          {/* Bowler release */}
          <circle cx="200" cy="90" r="16" fill="#f8fafc" />
          <path d="M 195 106 L 210 180" stroke="#f8fafc" strokeWidth="16" strokeLinecap="round" />
          <path d="M 205 115 L 235 50" stroke="#f8fafc" strokeWidth="12" strokeLinecap="round" />
          {/* Red ball in hand */}
          <circle cx="238" cy="48" r="11" fill="#dc2626" />
          {/* Legs stride */}
          <path d="M 210 180 L 160 255" stroke="#1e293b" strokeWidth="14" strokeLinecap="round" />
          <path d="M 210 180 L 250 250" stroke="#1e293b" strokeWidth="14" strokeLinecap="round" />
        </svg>
      );
    case 'machine-net':
      return (
        <svg className="w-full h-full" viewBox="0 0 400 300" fill="none">
          <rect width="400" height="300" fill="#0c111d" />
          {/* Bowling Machine on Tripod */}
          <circle cx="200" cy="120" r="45" fill="#1e293b" stroke="#84cc16" strokeWidth="3" />
          <circle cx="185" cy="115" r="18" fill="#334155" />
          <circle cx="215" cy="115" r="18" fill="#334155" />
          {/* Feeder chute */}
          <rect x="194" y="50" width="12" height="40" rx="3" fill="#64748b" />
          <circle cx="200" cy="45" r="10" fill="#facc15" />
          {/* Tripod legs */}
          <line x1="200" y1="165" x2="140" y2="260" stroke="#64748b" strokeWidth="5" />
          <line x1="200" y1="165" x2="200" y2="260" stroke="#64748b" strokeWidth="5" />
          <line x1="200" y1="165" x2="260" y2="260" stroke="#64748b" strokeWidth="5" />
        </svg>
      );
    case 'coaching-drills':
      return (
        <svg className="w-full h-full" viewBox="0 0 400 300" fill="none">
          <rect width="400" height="300" fill="#061e12" />
          {/* Cones on grass */}
          <polygon points="120,240 135,210 150,240" fill="#f97316" />
          <polygon points="180,240 195,210 210,240" fill="#f97316" />
          <polygon points="240,240 255,210 270,240" fill="#f97316" />
          {/* Coach clipboard / silhouette */}
          <circle cx="280" cy="110" r="14" fill="#f1f5f9" />
          <path d="M 280 124 L 280 190" stroke="#f1f5f9" strokeWidth="12" strokeLinecap="round" />
          <rect x="245" y="140" width="22" height="28" rx="2" fill="#84cc16" />
          {/* Junior batsman */}
          <circle cx="150" cy="130" r="12" fill="#f8fafc" />
          <path d="M 150 142 L 150 200" stroke="#3b82f6" strokeWidth="10" strokeLinecap="round" />
          <rect x="142" y="165" width="16" height="45" rx="3" fill="#ffffff" />
        </svg>
      );
    case 'lounge-gear':
    default:
      return (
        <svg className="w-full h-full" viewBox="0 0 400 300" fill="none">
          <rect width="400" height="300" fill="#0f172a" />
          {/* Lockers and kit bags */}
          <rect x="60" y="80" width="50" height="150" rx="4" fill="#1e293b" stroke="#334155" />
          <rect x="120" y="80" width="50" height="150" rx="4" fill="#1e293b" stroke="#334155" />
          <rect x="180" y="80" width="50" height="150" rx="4" fill="#1e293b" stroke="#334155" />
          {/* Kit bag */}
          <rect x="250" y="160" width="90" height="70" rx="8" fill="#166534" />
          <text x="295" y="200" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">ACK</text>
        </svg>
      );
  }
}
