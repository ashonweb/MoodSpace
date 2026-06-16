import MoodCard from './MoodCard';

export default function MoodHero({ moods, activeMood, onSelect, onSkip }) {
  return (
    <section
      className="px-7 pt-14 pb-12"
      style={{
        background: '#fff',
        backgroundImage: `
          radial-gradient(ellipse 80% 60% at 20% 40%, rgba(251,191,36,0.18) 0%, transparent 60%),
          radial-gradient(ellipse 60% 50% at 80% 20%, rgba(249,115,22,0.14) 0%, transparent 55%),
          radial-gradient(ellipse 50% 60% at 60% 80%, rgba(16,185,129,0.10) 0%, transparent 55%)
        `,
      }}
    >
      <div className="text-center mb-9">
        <p className="text-[11px] font-semibold tracking-[2px] uppercase text-[#9ca3af] mb-3">
          Weekend plans, sorted
        </p>
        <h1 className="font-extrabold tracking-[-1px] leading-[1.1] text-[#111] mb-3"
          style={{ fontSize: 'clamp(28px,4vw,42px)' }}
        >
          What's your{' '}
          <span style={{ background: 'linear-gradient(135deg,#ea580c,#f59e0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            vibe
          </span>
          <br />this weekend?
        </h1>
        <p className="text-[#9ca3af] text-[13px]">
          89 places across Karnataka &nbsp;·&nbsp;{' '}
          <button
            onClick={onSkip}
            className="text-[#6b7280] underline underline-offset-[3px] hover:text-[#111] transition-colors"
          >
            browse all
          </button>
        </p>
      </div>

      <div className="grid gap-2.5 max-w-[820px] mx-auto"
        style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(155px,1fr))' }}
      >
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
