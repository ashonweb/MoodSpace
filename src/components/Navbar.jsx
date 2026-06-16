import { Bookmark, MapPin } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 h-[58px] px-7 flex items-center justify-between border-b border-black/[0.06]"
      style={{ background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}
    >
      <div className="flex items-center gap-2.5">
        <div className="w-[30px] h-[30px] rounded-[9px] flex items-center justify-center flex-shrink-0"
          style={{ background: 'linear-gradient(135deg,#ea580c,#f59e0b)' }}
        >
          <MapPin size={14} color="white" strokeWidth={2.5} />
        </div>
        <span className="font-extrabold text-[17px] tracking-[-0.5px] text-[#111]">MoodSpace</span>
        <span className="text-[10px] font-semibold text-[#9ca3af] bg-[#f3f4f6] px-2 py-0.5 rounded-full tracking-[0.5px]">
          Karnataka
        </span>
      </div>

      <div className="flex items-center gap-1.5 text-[#9ca3af] text-[12px] cursor-not-allowed select-none">
        <Bookmark size={13} />
        <span>Saved</span>
        <span className="text-[9px] bg-[#f3f4f6] text-[#9ca3af] px-1.5 py-0.5 rounded">Soon</span>
      </div>
    </nav>
  );
}
