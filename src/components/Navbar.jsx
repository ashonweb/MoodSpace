import { Bookmark } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#111111] h-14 px-6 flex items-center justify-between">
      <div className="flex items-baseline gap-2">
        <span className="text-white font-extrabold text-[18px] tracking-tight">MoodSpace</span>
        <span className="text-[#c2410c] text-[10px] font-semibold uppercase tracking-[1px]">Karnataka</span>
      </div>
      <div className="flex items-center gap-1.5 text-[#555] text-[13px] cursor-not-allowed select-none">
        <Bookmark size={14} />
        <span>Saved Trips</span>
        <span className="text-[9px] bg-[#2a2a2a] text-[#666] px-1.5 py-0.5 rounded">Coming soon</span>
      </div>
    </nav>
  );
}
