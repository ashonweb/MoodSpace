import { useEffect } from 'react';
import { X, Clock, Users, Home } from 'lucide-react';

const CATEGORY_META = {
  yoga:       { img: 'yoga.jpg',        accent: '#9333ea', label: 'Yoga'        },
  meditation: { img: 'meditation.jpg',  accent: '#3b82f6', label: 'Meditation'  },
  fitness:    { img: 'fitness.jpg',     accent: '#ea580c', label: 'Fitness'     },
  cooking:    { img: 'cooking.jpg',     accent: '#ca8a04', label: 'Cooking'     },
  art:        { img: 'art.jpg',         accent: '#a21caf', label: 'Art & Craft' },
  music:      { img: 'music.jpg',       accent: '#0284c7', label: 'Music'       },
  gaming:     { img: 'gaming.jpg',      accent: '#16a34a', label: 'Gaming'      },
  movies:     { img: 'movies.jpg',      accent: '#92400e', label: 'Movies'      },
  Karaoke:    { img: 'karaoke.jpg',     accent: '#be185d', label: 'Karaoke'     },
  blanket:    { img: 'cozy.jpg',        accent: '#b45309', label: 'Cozy'        },
  gratitude:  { img: 'gratitude.jpg',   accent: '#15803d', label: 'Journaling'  },
  Photo:      { img: 'photography.jpg', accent: '#475569', label: 'Photography' },
  study:      { img: 'writing.jpg',     accent: '#be123c', label: 'Writing'     },
  language:   { img: 'language.jpg',    accent: '#059669', label: 'Language'    },
};

const EFFORT_LABEL = { low: 'Low', medium: 'Medium', high: 'High' };
const SOLO_LABEL   = { solo: 'Solo', couple: 'Couple', group: 'Group', any: 'Any' };
const SETTING_DISPLAY = {
  'home':             'Home',
  'out-in-bangalore': 'In Bangalore',
  'studio':           'Studio',
  'cafe':             'Cafe',
  'home-or-out':      'Home or Out',
};

function StatPill({ children, className = '' }) {
  return (
    <div className={`flex items-center gap-1.5 px-3 py-1.5 bg-[#f7f6f3] rounded-full text-[12px] text-[#6b7280] ${className}`}>
      {children}
    </div>
  );
}

export default function IndoorModal({ activity, moods, onClose }) {
  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!activity) return null;

  const meta   = CATEGORY_META[activity.category] || CATEGORY_META.art;
  const imgSrc = `${process.env.PUBLIC_URL}/indoor_activities/${activity.image || meta.img}`;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-end sm:items-center justify-center"
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white w-full max-w-[580px] max-h-[92vh] overflow-y-auto rounded-t-[20px] sm:rounded-2xl animate-scaleIn">

        {/* Photo header */}
        <div className="relative h-[240px] overflow-hidden bg-[#d1d5db] flex-shrink-0">
          <img
            src={imgSrc}
            alt={meta.label}
            className="w-full h-full object-cover"
            onError={e => { e.target.style.display = 'none'; }}
          />
          <div className="absolute bottom-0 left-0 right-0 px-5 pb-4 pt-8 bg-gradient-to-t from-black/75 to-transparent">
            <p className="text-[10px] font-bold text-white/70 uppercase tracking-[0.6px] mb-1">
              {meta.label}
            </p>
            <h2 className="text-[22px] font-extrabold text-white tracking-tight leading-tight">
              {activity.title}
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
          {/* Stats */}
          <div className="flex flex-wrap gap-2 mb-3.5">
            <StatPill>
              <Clock size={11} className="opacity-60" />
              <b className="text-[#1a1a1a]">{activity.duration}</b>
            </StatPill>
            <StatPill>
              <span className="text-[10px] font-bold uppercase tracking-[0.4px]">Effort</span>
              <b className="text-[#1a1a1a]">{EFFORT_LABEL[activity.effort] || activity.effort}</b>
            </StatPill>
            <StatPill>
              <Users size={11} className="opacity-60" />
              <b className="text-[#1a1a1a]">{SOLO_LABEL[activity.solo_or_group] || activity.solo_or_group}</b>
            </StatPill>
            <StatPill>
              <Home size={11} className="opacity-60" />
              <b className="text-[#1a1a1a]">{SETTING_DISPLAY[activity.setting] || activity.setting}</b>
            </StatPill>
          </div>

          {/* Mood tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {activity.moods.map(id => {
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
          <p className="text-[14px] text-[#6b7280] leading-[1.7]">{activity.about}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mt-4 mb-1">
            {activity.tags.map(t => (
              <span key={t} className="px-2 py-1 bg-[#f7f6f3] text-[#6b7280] text-[11px] rounded">
                #{t}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 pt-2 pb-5 border-t border-[#e5e7eb] mt-2">
          <button
            onClick={onClose}
            className="w-full flex items-center justify-center py-3 rounded-[10px] text-[13px] font-bold transition-opacity hover:opacity-85"
            style={{ background: meta.accent, color: '#fff' }}
          >
            Got it — I'll try this
          </button>
        </div>
      </div>
    </div>
  );
}
