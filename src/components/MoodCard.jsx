import * as Icons from 'lucide-react';

export default function MoodCard({ mood, isActive, onClick }) {
  const Icon = Icons[mood.icon] || Icons.Zap;

  const activeStyle = {
    background: `linear-gradient(135deg, ${mood.color}, ${mood.color}cc)`,
    boxShadow: `0 8px 24px ${mood.color}44`,
  };

  const inactiveStyle = {
    background: mood.bg,
  };

  return (
    <button
      onClick={() => onClick(mood.id)}
      className="flex flex-col items-start p-3.5 rounded-2xl border-none cursor-pointer text-left transition-all duration-150"
      style={{
        ...(isActive ? activeStyle : inactiveStyle),
        transform: isActive ? 'translateY(-2px)' : undefined,
      }}
    >
      <div
        className="w-[34px] h-[34px] rounded-[10px] flex items-center justify-center flex-shrink-0 mb-2.5"
        style={{ background: isActive ? 'rgba(255,255,255,0.22)' : `${mood.color}18` }}
      >
        <Icon size={16} color={isActive ? '#fff' : mood.color} strokeWidth={2} />
      </div>
      <span
        className="block text-[13px] font-bold tracking-[-0.2px]"
        style={{ color: isActive ? '#fff' : '#111' }}
      >
        {mood.name}
      </span>
      <span
        className="block text-[10px] mt-0.5 leading-[1.35]"
        style={{ color: isActive ? 'rgba(255,255,255,0.75)' : '#6b7280' }}
      >
        {mood.tagline}
      </span>
    </button>
  );
}
