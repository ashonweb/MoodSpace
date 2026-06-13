import { useState, useMemo, useRef } from 'react';
import Navbar from './components/Navbar';
import MoodHero from './components/MoodHero';
import FilterBar from './components/FilterBar';
import LocationCard from './components/LocationCard';
import LocationModal from './components/LocationModal';
import moodsData from './data/moods.json';
import locationsData from './data/karnataka_locations.json';

function filterLocations(locations, activeMood, activeDist, activeCat) {
  return locations.filter(loc => {
    if (activeMood && !loc.moods.includes(activeMood)) return false;
    if (activeDist === '100'  && loc.distance_km >= 100) return false;
    if (activeDist === '200'  && (loc.distance_km < 100 || loc.distance_km >= 200)) return false;
    if (activeDist === '400'  && (loc.distance_km < 200 || loc.distance_km >= 400)) return false;
    if (activeDist === '400+' && loc.distance_km < 400) return false;
    if (activeCat !== 'all'   && loc.type !== activeCat) return false;
    return true;
  });
}

export default function MoodSpace() {
  const [activeMood, setActiveMood] = useState(null);
  const [activeDist, setActiveDist] = useState('all');
  const [activeCat,  setActiveCat]  = useState('all');
  const [modalLoc,   setModalLoc]   = useState(null);
  const filterBarRef = useRef(null);

  const filtered = useMemo(
    () => filterLocations(locationsData, activeMood, activeDist, activeCat),
    [activeMood, activeDist, activeCat]
  );

  const activeMoodName = activeMood
    ? moodsData.find(m => m.id === activeMood)?.name
    : null;

  const handleMoodSelect = id => {
    const next = activeMood === id ? null : id;
    setActiveMood(next);
    if (next) {
      setTimeout(() => filterBarRef.current?.scrollIntoView({ behavior: 'smooth' }), 120);
    }
  };

  const handleSkip = () => {
    setActiveMood(null);
    setTimeout(() => filterBarRef.current?.scrollIntoView({ behavior: 'smooth' }), 80);
  };

  const clearAll = () => {
    setActiveMood(null);
    setActiveDist('all');
    setActiveCat('all');
  };

  return (
    <div className="min-h-screen bg-[#f7f6f3]">
      <Navbar />

      <MoodHero
        moods={moodsData}
        activeMood={activeMood}
        onSelect={handleMoodSelect}
        onSkip={handleSkip}
      />

      <div ref={filterBarRef}>
        <FilterBar
          count={filtered.length}
          activeMood={activeMood}
          activeDist={activeDist}
          activeCat={activeCat}
          moodName={activeMoodName}
          onClearMood={() => setActiveMood(null)}
          onDistChange={setActiveDist}
          onCatChange={setActiveCat}
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-6">
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-[#6b7280] text-sm mb-3">No places match your filters.</p>
            <button
              onClick={clearAll}
              className="px-5 py-2 bg-[#c2410c] text-white rounded-lg text-sm font-semibold hover:bg-[#b03a0a] transition-colors"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map(loc => (
              <LocationCard
                key={loc.id}
                location={loc}
                onViewDetails={() => setModalLoc(loc)}
              />
            ))}
          </div>
        )}
      </div>

      {modalLoc && (
        <LocationModal
          location={modalLoc}
          moods={moodsData}
          onClose={() => setModalLoc(null)}
        />
      )}
    </div>
  );
}
