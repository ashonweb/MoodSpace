const DISTANCES = [
  { label: 'All distances', value: 'all'  },
  { label: '< 100 km',      value: '100'  },
  { label: '100–200 km',    value: '200'  },
  { label: '200–400 km',    value: '400'  },
  { label: '400+ km',       value: '400+' },
];

const CATEGORIES = [
  { label: 'All types',    value: 'all'         },
  { label: 'Hill Station', value: 'Hill Station' },
  { label: 'Beach',        value: 'Beach'        },
  { label: 'Waterfall',    value: 'Waterfall'    },
  { label: 'Historical',   value: 'Historical'   },
  { label: 'Temple',       value: 'Temple'       },
  { label: 'Wildlife',     value: 'Wildlife'     },
  { label: 'Trekking',     value: 'Trekking'     },
  { label: 'Adventure',    value: 'Adventure'    },
  { label: 'Religious',    value: 'Religious'    },
  { label: 'Nature',       value: 'Nature'       },
  { label: 'Garden',       value: 'Garden'       },
];

const INDOOR_CATEGORIES = [
  { label: 'All activities', value: 'all'       },
  { label: 'Yoga',           value: 'yoga'      },
  { label: 'Meditation',     value: 'meditation'},
  { label: 'Fitness',        value: 'fitness'   },
  { label: 'Art & Craft',    value: 'art'       },
  { label: 'Music',          value: 'music'     },
  { label: 'Cooking',        value: 'cooking'   },
  { label: 'Gaming',         value: 'gaming'    },
  { label: 'Movies',         value: 'movies'    },
  { label: 'Karaoke',        value: 'Karaoke'   },
  { label: 'Cozy',           value: 'blanket'   },
  { label: 'Journaling',     value: 'gratitude' },
  { label: 'Photography',    value: 'Photo'     },
  { label: 'Writing',        value: 'study'     },
  { label: 'Language',       value: 'language'  },
];

const pill    = 'flex-shrink-0 px-3.5 py-[5px] rounded-full text-[12px] font-medium cursor-pointer whitespace-nowrap border-none transition-all duration-150';
const pillOff = 'bg-[#f3f4f6] text-[#6b7280] hover:bg-[#e9eaec] hover:text-[#111]';
const pillOn  = 'bg-[#111] text-white font-semibold';

export default function FilterBar({
  count, activeMood, activeDist, activeCat,
  moodName, onClearMood, onDistChange, onCatChange,
  isIndoor,
}) {
  const cats = isIndoor ? INDOOR_CATEGORIES : CATEGORIES;

  return (
    <div className="sticky top-[58px] z-40 bg-white border-b border-black/[0.07] px-7 pt-3 pb-2.5">
      {/* Row 1 */}
      <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
        <div className="flex items-center gap-2">
          <span className="text-[13px] text-[#6b7280]">
            <strong className="text-[#111] font-bold">{count}</strong>{' '}
            {isIndoor ? 'activities' : 'places'}
          </span>
          {activeMood && moodName && (
            <button
              onClick={onClearMood}
              className="inline-flex items-center gap-1 bg-[#fff3ee] border border-[#fed7aa] text-[#c2410c] text-[11px] font-semibold px-2.5 py-1 rounded-full hover:bg-[#ffe4d6] transition-colors"
            >
              {moodName} <span>×</span>
            </button>
          )}
        </div>

        <div className="flex gap-1.5 flex-wrap items-center">
          <button
            onClick={() => onDistChange('indoor')}
            className={`${pill} ${activeDist === 'indoor'
              ? 'bg-[#fff3eb] text-[#c2410c] font-semibold'
              : 'bg-[#fff3eb] text-[#c2410c] border border-[#fed7aa]'
            }`}
          >
            In Bangalore
          </button>

          <span className="w-[1px] h-4 bg-[#e5e7eb] mx-0.5" />

          {DISTANCES.map(d => (
            <button
              key={d.value}
              onClick={() => onDistChange(d.value)}
              className={`${pill} ${activeDist === d.value ? pillOn : pillOff}`}
            >
              {d.label}
            </button>
          ))}
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex gap-1.5 overflow-x-auto pb-0.5" style={{ scrollbarWidth: 'none' }}>
        {cats.map(c => (
          <button
            key={c.value}
            onClick={() => onCatChange(c.value)}
            className={`${pill} ${activeCat === c.value ? pillOn : pillOff}`}
          >
            {c.label}
          </button>
        ))}
      </div>
    </div>
  );
}
