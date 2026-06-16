import { useState, useMemo, useRef } from 'react';
import Navbar from './components/Navbar';
import MoodHero from './components/MoodHero';
import FilterBar from './components/FilterBar';
import LocationCard from './components/LocationCard';
import LocationModal from './components/LocationModal';
import IndoorCard from './components/IndoorCard';
import IndoorModal from './components/IndoorModal';
import moodsData from './data/moods.json';
import locationsData from './data/karnataka_locations.json';
import indoorData from './data/bangalore_indoor.json';

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

function filterIndoor(activities, activeMood, activeCat) {
  return activities.filter(a => {
    if (activeMood && !a.moods.includes(activeMood)) return false;
    if (activeCat !== 'all' && a.category !== activeCat) return false;
    return true;
  });
}

export default function MoodSpace() {
  const [activeMood, setActiveMood] = useState(null);
  const [activeDist, setActiveDist] = useState('all');
  const [activeCat,  setActiveCat]  = useState('all');
  const [modalLoc,   setModalLoc]   = useState(null);
  const [modalActivity, setModalActivity] = useState(null);
  const filterBarRef = useRef(null);

  const isIndoor = activeDist === 'indoor';

  const filtered = useMemo(
    () => isIndoor
      ? filterIndoor(indoorData, activeMood, activeCat)
      : filterLocations(locationsData, activeMood, activeDist, activeCat),
    [activeMood, activeDist, activeCat, isIndoor]
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

  const handleDistChange = val => {
    // reset category when crossing the indoor/outdoor boundary
    if ((val === 'indoor') !== isIndoor) setActiveCat('all');
    setActiveDist(val);
  };

  const clearAll = () => {
    setActiveMood(null);
    setActiveDist('all');
    setActiveCat('all');
  };

  return (
    <div className="min-h-screen bg-[#f8f7f5]">
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
          isIndoor={isIndoor}
          onClearMood={() => setActiveMood(null)}
          onDistChange={handleDistChange}
          onCatChange={setActiveCat}
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-6">
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-[#6b7280] text-sm mb-3">
              {isIndoor ? 'No activities match your filters.' : 'No places match your filters.'}
            </p>
            <button
              onClick={clearAll}
              className="px-5 py-2 bg-[#111] text-white rounded-full text-sm font-semibold hover:bg-[#333] transition-colors"
            >
              Clear all filters
            </button>
          </div>
        ) : isIndoor ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map(activity => (
              <IndoorCard
                key={activity.id}
                activity={activity}
                onViewDetails={() => setModalActivity(activity)}
              />
            ))}
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

      {modalActivity && (
        <IndoorModal
          activity={modalActivity}
          moods={moodsData}
          onClose={() => setModalActivity(null)}
        />
      )}
    </div>
  );
}
