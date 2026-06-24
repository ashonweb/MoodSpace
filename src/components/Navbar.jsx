import { Bookmark } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 h-[58px] px-7 flex items-center justify-between border-b border-black/[0.06]"
      style={{ background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}
    >
      <div className="flex items-center gap-2.5">
        <img
          src="/logo192.png"
          alt="MoodSpace"
          className="w-[30px] h-[30px] rounded-[9px] object-cover flex-shrink-0"
        />
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
