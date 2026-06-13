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

const pillBase = 'px-3 py-1 rounded-full border-[1.5px] text-[11px] font-medium transition-all whitespace-nowrap';
const pillOff  = 'bg-white border-[#e5e7eb] text-[#6b7280] hover:border-[#9ca3af] hover:text-[#1a1a1a]';
const pillOn   = 'bg-[#1a1a1a] border-[#1a1a1a] text-white';

export default function FilterBar({
  count, activeMood, activeDist, activeCat,
  moodName, onClearMood, onDistChange, onCatChange,
}) {
  return (
    <div className="sticky top-14 z-40 bg-[#f7f6f3] border-b border-[#e5e7eb] px-6 pt-3.5 pb-3">
      {/* Row 1: count + mood chip + distance pills */}
      <div className="flex items-center justify-between flex-wrap gap-2 mb-2.5">
        <div className="flex items-center gap-2">
          <span className="text-[13px] text-[#6b7280]">
            <strong className="text-[#1a1a1a] font-bold">{count}</strong> places
          </span>
          {activeMood && moodName && (
            <button
              onClick={onClearMood}
              className="inline-flex items-center gap-1 bg-[#fff3ee] border border-[#f97316] text-[#c2410c] text-[11px] font-semibold px-2.5 py-1 rounded-full hover:bg-[#ffe4d6] transition-colors"
            >
              {moodName} <span>×</span>
            </button>
          )}
        </div>

        <div className="flex gap-1.5 flex-wrap">
          {DISTANCES.map(d => (
            <button
              key={d.value}
              onClick={() => onDistChange(d.value)}
              className={`${pillBase} ${activeDist === d.value ? pillOn : pillOff}`}
            >
              {d.label}
            </button>
          ))}
        </div>
      </div>

      {/* Row 2: category chips */}
      <div className="flex gap-1.5 overflow-x-auto pb-0.5" style={{ scrollbarWidth: 'none' }}>
        {CATEGORIES.map(c => (
          <button
            key={c.value}
            onClick={() => onCatChange(c.value)}
            className={`flex-shrink-0 ${pillBase} ${activeCat === c.value ? pillOn : pillOff}`}
          >
            {c.label}
          </button>
        ))}
      </div>
    </div>
  );
}
