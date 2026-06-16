import { MapPin } from 'lucide-react';

export default function LocationCard({ location, onViewDetails }) {
  const imgSrc = location.image
    ? `${process.env.PUBLIC_URL}/temple_backgrounds/${location.image}`
    : null;

  const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${location.coordinates.lat},${location.coordinates.lng}`;

  return (
    <div
      className="bg-white rounded-[18px] overflow-hidden cursor-pointer transition-all duration-200 hover:-translate-y-1"
      style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}
      onMouseEnter={e => e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.12)'}
      onMouseLeave={e => e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.07)'}
      onClick={onViewDetails}
    >
      {/* Photo */}
      <div className="relative h-[195px] overflow-hidden bg-[#e9e9e9] group">
        {imgSrc ? (
          <img
            src={imgSrc}
            alt={location.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
            onError={e => {
              e.target.style.display = 'none';
              e.target.parentElement.style.background = 'linear-gradient(135deg,#d1d5db,#9ca3af)';
            }}
          />
        ) : (
          <div className="w-full h-full" style={{ background: 'linear-gradient(135deg,#d1d5db,#9ca3af)' }} />
        )}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/45 to-transparent pointer-events-none" />
        <span className="absolute top-3 right-3 bg-black/45 backdrop-blur-sm text-white text-[9px] font-bold uppercase tracking-[0.4px] px-2.5 py-1 rounded-md">
          {location.type}
        </span>
        <span className="absolute top-3 left-3 bg-black/45 backdrop-blur-sm text-white text-[10px] font-medium px-2.5 py-1 rounded-md">
          {location.distance_km} km · {location.drive_display}
        </span>
      </div>

      {/* Body */}
      <div className="p-[18px]">
        <h3 className="font-bold text-[15px] tracking-[-0.3px] mb-1.5 text-[#111]">
          {location.name}
        </h3>
        <div className="flex items-center gap-2 mb-1.5">
          <span className="flex items-center gap-1.5 text-[11px] text-[#9ca3af]">
            <span className="w-[5px] h-[5px] rounded-full bg-emerald-500 inline-block flex-shrink-0" />
            {location.best_time}
          </span>
          <span className="text-[11px] text-[#d1d5db]">·</span>
          <span className="text-[11px] text-[#9ca3af]">{location.duration}</span>
        </div>
        <p className="text-[12px] text-[#6b7280] leading-[1.6] line-clamp-2 mb-4">
          {location.teaser}
        </p>
        <div className="flex gap-2">
          <button
            className="flex-1 py-2 bg-[#111] text-white rounded-[10px] text-[12px] font-semibold hover:bg-[#333] transition-colors"
            onClick={e => { e.stopPropagation(); onViewDetails(); }}
          >
            View Details
          </button>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
            title="Get directions"
            className="w-[36px] h-[36px] flex items-center justify-center bg-[#f3f4f6] rounded-[10px] text-[#6b7280] hover:bg-[#e9eaec] transition-colors"
            onClick={e => e.stopPropagation()}
          >
            <MapPin size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
