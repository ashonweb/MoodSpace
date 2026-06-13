import MoodCard from './MoodCard';

export default function MoodHero({ moods, activeMood, onSelect, onSkip }) {
  return (
    <section className="bg-[#1e1e1e] px-6 py-11">
      <div className="text-center mb-8">
        <h1 className="text-white font-extrabold text-[clamp(22px,3.5vw,30px)] tracking-tight mb-2">
          What's your vibe this weekend?
        </h1>
        <p className="text-[#6b7280] text-sm">
          89 places across Karnataka &nbsp;·&nbsp;{' '}
          <button
            onClick={onSkip}
            className="text-[#c2410c] underline underline-offset-[3px] hover:text-[#ea580c] transition-colors"
          >
            Skip — browse all
          </button>
        </p>
      </div>

      <div className="flex flex-wrap gap-2.5 justify-center max-w-[760px] mx-auto">
        {moods.map(m => (
          <MoodCard
            key={m.id}
            mood={m}
            isActive={activeMood === m.id}
            onClick={onSelect}
          />
        ))}
      </div>
    </section>
  );
}
