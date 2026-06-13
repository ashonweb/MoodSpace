import { useEffect } from 'react';
import { X, MapPin, Clock, Sun, Bookmark } from 'lucide-react';

function StatPill({ children, className = '' }) {
  return (
    <div className={`flex items-center gap-1.5 px-3 py-1.5 bg-[#f7f6f3] rounded-full text-[12px] text-[#6b7280] ${className}`}>
      {children}
    </div>
  );
}

function formatDetailValue(v) {
  if (typeof v === 'boolean') return v ? 'Yes' : 'No';
  if (Array.isArray(v)) return v.join(', ');
  return String(v);
}

export default function LocationModal({ location, moods, onClose }) {
  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!location) return null;

  const imgSrc = location.image
    ? `${process.env.PUBLIC_URL}/temple_backgrounds/${location.image}`
    : null;

  const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${location.coordinates.lat},${location.coordinates.lng}`;

  const detailEntries = location.details ? Object.entries(location.details) : [];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-end sm:items-center justify-center"
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white w-full max-w-[580px] max-h-[92vh] overflow-y-auto rounded-t-[20px] sm:rounded-2xl animate-scaleIn">

        {/* Photo header */}
        <div className="relative h-[240px] overflow-hidden bg-[#d1d5db] flex-shrink-0">
          {imgSrc && (
            <img
              src={imgSrc}
              alt={location.name}
              className="w-full h-full object-cover"
              onError={e => { e.target.style.display = 'none'; }}
            />
          )}
          <div className="absolute bottom-0 left-0 right-0 px-5 pb-4 pt-8 bg-gradient-to-t from-black/75 to-transparent">
            <p className="text-[10px] font-bold text-white/70 uppercase tracking-[0.6px] mb-1">
              {location.type} · {location.district}
            </p>
            <h2 className="text-[22px] font-extrabold text-white tracking-tight leading-tight">
              {location.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 bg-black/40 rounded-full flex items-center justify-center text-white hover:bg-black/65 transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Body */}
        <div className="px-5 pt-4 pb-2">
          {/* Stats row */}
          <div className="flex flex-wrap gap-2 mb-3.5">
            <StatPill>
              <MapPin size={11} className="opacity-60" />
              <b className="text-[#1a1a1a]">{location.distance_km} km</b>
              <span>&nbsp;from Bangalore</span>
            </StatPill>
            <StatPill>
              <Clock size={11} className="opacity-60" />
              <b className="text-[#1a1a1a]">{location.drive_display}</b>
              <span>&nbsp;drive</span>
            </StatPill>
            <StatPill>
              <Sun size={11} className="opacity-60" />
              <b className="text-[#1a1a1a]">{location.best_time}</b>
            </StatPill>
            <StatPill className="!bg-[#f0fdf4] !text-[#15803d]">
              <b>{location.duration}</b>
            </StatPill>
          </div>

          {/* Mood tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {location.moods.map(id => {
              const mood = moods.find(m => m.id === id);
              return (
                <span key={id} className="px-2.5 py-1 bg-[#fff3ee] text-[#c2410c] text-[11px] font-semibold rounded">
                  {mood?.name || id}
                </span>
              );
            })}
          </div>

          {/* About */}
          <p className="text-[9px] font-extrabold uppercase tracking-[1px] text-[#9ca3af] mb-1.5">About</p>
          <p className="text-[14px] text-[#6b7280] leading-[1.7]">{location.about}</p>

          {/* Details grid */}
          {detailEntries.length > 0 && (
            <>
              <p className="text-[9px] font-extrabold uppercase tracking-[1px] text-[#9ca3af] mt-4 mb-2">Details</p>
              <div className="grid grid-cols-2 gap-2">
                {detailEntries.map(([k, v]) => (
                  <div key={k} className="bg-[#f7f6f3] px-3 py-2.5 rounded-lg">
                    <div className="text-[9px] font-extrabold uppercase tracking-[0.5px] text-[#9ca3af]">{k}</div>
                    <div className="text-[13px] font-medium text-[#1a1a1a] mt-0.5">{formatDetailValue(v)}</div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mt-3 mb-1">
            {location.tags.map(t => (
              <span key={t} className="px-2 py-1 bg-[#f7f6f3] text-[#6b7280] text-[11px] rounded">
                #{t}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 pt-2 pb-5 border-t border-[#e5e7eb] flex gap-2.5 mt-2">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-3 bg-[#c2410c] text-white rounded-[10px] text-[13px] font-bold hover:bg-[#b03a0a] transition-colors"
          >
            <MapPin size={14} /> Open in Google Maps
          </a>
          <button className="flex-1 flex items-center justify-center gap-1.5 py-3 bg-[#f7f6f3] text-[#aaa] border-[1.5px] border-[#e5e7eb] rounded-[10px] text-[13px] cursor-not-allowed">
            <Bookmark size={14} className="opacity-40" />
            Save to Trip
            <span className="text-[9px] bg-[#e5e7eb] text-[#9ca3af] px-1.5 py-0.5 rounded ml-0.5">Soon</span>
          </button>
        </div>
      </div>
    </div>
  );
}
