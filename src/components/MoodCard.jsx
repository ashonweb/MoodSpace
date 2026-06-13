import * as Icons from 'lucide-react';

export default function MoodCard({ mood, isActive, onClick }) {
  const Icon = Icons[mood.icon] || Icons.Zap;

  return (
    <button
      onClick={() => onClick(mood.id)}
      style={{ flex: '1 1 150px', minWidth: '150px', maxWidth: '200px' }}
      className={[
        'flex items-center gap-2.5 px-4 py-3 rounded-[10px] border-[1.5px] text-left',
        'transition-all duration-150 cursor-pointer',
        isActive
          ? 'bg-[#c2410c] border-[#c2410c] -translate-y-px'
          : 'bg-[#2a2a2a] border-[#3a3a3a] hover:border-[#c2410c] hover:bg-[#333] hover:-translate-y-px',
      ].join(' ')}
    >
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${isActive ? 'bg-white/20' : 'bg-white/[0.08]'}`}>
        <Icon size={16} className={isActive ? 'text-white' : 'text-[#9ca3af]'} />
      </div>
      <div className="flex-1 min-w-0">
        <span className={`block text-[13px] font-semibold ${isActive ? 'text-white' : 'text-[#e5e7eb]'}`}>
          {mood.name}
        </span>
        <span className={`block text-[10px] truncate mt-0.5 ${isActive ? 'text-white/65' : 'text-[#6b7280]'}`}>
          {mood.tagline}
        </span>
      </div>
    </button>
  );
}
