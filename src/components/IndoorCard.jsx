const CATEGORY_META = {
  yoga:       { img: 'yoga.jpg',        accent: '#9333ea', label: 'Yoga'         },
  meditation: { img: 'meditation.jpg',  accent: '#3b82f6', label: 'Meditation'   },
  fitness:    { img: 'fitness.jpg',     accent: '#ea580c', label: 'Fitness'      },
  cooking:    { img: 'cooking.jpg',     accent: '#ca8a04', label: 'Cooking'      },
  art:        { img: 'art.jpg',         accent: '#a21caf', label: 'Art & Craft'  },
  music:      { img: 'music.jpg',       accent: '#0284c7', label: 'Music'        },
  gaming:     { img: 'gaming.jpg',      accent: '#16a34a', label: 'Gaming'       },
  movies:     { img: 'movies.jpg',      accent: '#92400e', label: 'Movies'       },
  Karaoke:    { img: 'karaoke.jpg',     accent: '#be185d', label: 'Karaoke'      },
  blanket:    { img: 'cozy.jpg',        accent: '#b45309', label: 'Cozy'         },
  gratitude:  { img: 'gratitude.jpg',   accent: '#15803d', label: 'Journaling'   },
  Photo:      { img: 'photography.jpg', accent: '#475569', label: 'Photography'  },
  study:      { img: 'writing.jpg',     accent: '#be123c', label: 'Writing'      },
  language:   { img: 'language.jpg',    accent: '#059669', label: 'Language'     },
};

const SETTING_LABEL = {
  'home':             'Home',
  'out-in-bangalore': 'In Bangalore',
  'studio':           'Studio',
  'cafe':             'Cafe',
  'home-or-out':      'Home / Out',
};

const EFFORT_DOT = {
  low:    'bg-emerald-500',
  medium: 'bg-amber-400',
  high:   'bg-orange-500',
};

const SOLO_LABEL = {
  solo:   'Solo',
  couple: 'Couple',
  group:  'Group',
  any:    'Any',
};

export default function IndoorCard({ activity, onViewDetails }) {
  const meta    = CATEGORY_META[activity.category] || CATEGORY_META.art;
  const setting = SETTING_LABEL[activity.setting]  || 'Home';
  const imgSrc  = `${process.env.PUBLIC_URL}/indoor_activities/${activity.image || meta.img}`;

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
        <img
          src={imgSrc}
          alt={meta.label}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
          onError={e => {
            e.target.style.display = 'none';
            e.target.parentElement.style.background = 'linear-gradient(135deg,#d1d5db,#9ca3af)';
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/45 to-transparent pointer-events-none" />

        <span
          className="absolute top-3 right-3 text-[9px] font-bold uppercase tracking-[0.4px] px-2.5 py-1 rounded-md backdrop-blur-sm text-white"
          style={{ background: `${meta.accent}cc` }}
        >
          {meta.label}
        </span>

        <span className="absolute top-3 left-3 bg-black/45 backdrop-blur-sm text-white text-[10px] font-medium px-2.5 py-1 rounded-md">
          {setting}
        </span>
      </div>

      {/* Body */}
      <div className="p-[18px]">
        <h3 className="font-bold text-[15px] tracking-[-0.3px] mb-1.5 text-[#111]">
          {activity.title}
        </h3>
        <div className="flex items-center gap-1.5 flex-wrap mb-2">
          <span className="flex items-center gap-1.5 text-[11px] text-[#9ca3af]">
            <span className={`w-[5px] h-[5px] rounded-full inline-block flex-shrink-0 ${EFFORT_DOT[activity.effort] || 'bg-gray-400'}`} />
            {activity.effort} effort
          </span>
          <span className="text-[#d1d5db]">·</span>
          <span className="text-[11px] text-[#9ca3af]">{activity.duration}</span>
          <span className="text-[#d1d5db]">·</span>
          <span className="text-[11px] text-[#9ca3af]">{SOLO_LABEL[activity.solo_or_group] || activity.solo_or_group}</span>
        </div>
        <p className="text-[12px] text-[#6b7280] leading-[1.6] line-clamp-2 mb-4">
          {activity.teaser}
        </p>
        <button
          className="w-full py-2 bg-[#111] text-white rounded-[10px] text-[12px] font-semibold hover:bg-[#333] transition-colors"
          onClick={e => { e.stopPropagation(); onViewDetails(); }}
        >
          Explore
        </button>
      </div>
    </div>
  );
}
