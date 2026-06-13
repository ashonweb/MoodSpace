import { MapPin } from 'lucide-react';

export default function LocationCard({ location, onViewDetails }) {
  const imgSrc = location.image
    ? `${process.env.PUBLIC_URL}/temple_backgrounds/${location.image}`
    : null;

  const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${location.coordinates.lat},${location.coordinates.lng}`;

  return (
    <div
      className="bg-white rounded-xl border border-[#e5e7eb] overflow-hidden cursor-pointer transition-all duration-200 hover:-translate-y-[3px] hover:shadow-[0_10px_28px_rgba(0,0,0,0.09)]"
      onClick={onViewDetails}
    >
      {/* Photo */}
      <div className="relative h-[200px] overflow-hidden bg-[#e9e9e9] group">
        {imgSrc ? (
          <img
            src={imgSrc}
            alt={location.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
            onError={e => {
              e.target.style.display = 'none';
              e.target.parentElement.style.background = 'linear-gradient(135deg, #d1d5db, #9ca3af)';
            }}
          />
        ) : (
          <div className="w-full h-full" style={{ background: 'linear-gradient(135deg, #d1d5db, #9ca3af)' }} />
        )}
        <div className="absolute bottom-0 left-0 right-0 h-[72px] bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
        <span className="absolute top-3 right-3 bg-black/55 backdrop-blur-sm text-white text-[9px] font-bold uppercase tracking-[0.5px] px-2 py-1 rounded">
          {location.type}
        </span>
        <span className="absolute top-3 left-3 bg-black/55 backdrop-blur-sm text-white text-[11px] font-medium px-2 py-1 rounded">
          {location.distance_km} km · {location.drive_display}
        </span>
      </div>

      {/* Body */}
      <div className="p-4">
        <h3 className="font-bold text-[15px] tracking-tight mb-1.5 text-[#1a1a1a]">
          {location.name}
        </h3>
        <div className="flex items-center gap-2 mb-1.5">
          <span className="flex items-center gap-1 text-[11px] text-[#6b7280]">
            <span className="w-[5px] h-[5px] rounded-full bg-emerald-500 inline-block flex-shrink-0" />
            {location.best_time}
          </span>
          <span className="text-[11px] text-[#9ca3af]">· {location.duration}</span>
        </div>
        <p className="text-[12px] text-[#6b7280] leading-[1.55] line-clamp-2 mb-3.5">
          {location.teaser}
        </p>
        <div className="flex gap-2">
          <button
            className="flex-1 py-2 bg-[#c2410c] text-white rounded-lg text-[12px] font-semibold hover:bg-[#b03a0a] transition-colors"
            onClick={e => { e.stopPropagation(); onViewDetails(); }}
          >
            View Details
          </button>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
            title="Get directions"
            className="w-[34px] h-[34px] flex items-center justify-center border-[1.5px] border-[#e5e7eb] rounded-lg text-[#6b7280] hover:border-[#c2410c] hover:text-[#c2410c] transition-all"
            onClick={e => e.stopPropagation()}
          >
            <MapPin size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
