import { profileData } from '@/lib/data';

export default function HeroSection({ onNavigate }: { onNavigate: (id: any) => void }) {
  return (
    <section className="space-y-6 pt-10 md:pt-20">
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
        BUILDING <br />
        <span className="text-transparent bg-clip-text bg-linear-to-r from-green-400 to-blue-500">DIGITAL REALITY</span>
      </h1>
      <p className="text-zinc-400 max-w-2xl text-lg md:text-xl leading-relaxed">
        Hai, Saya <b>{profileData.name}</b>. {profileData.role}...
      </p>

      <div className="flex gap-4 pt-4">
        <button onClick={() => onNavigate('projects')} className="px-6 py-3 bg-white text-black font-bold rounded hover:bg-zinc-200 transition-colors">
          View Projects
        </button>
        <button onClick={() => onNavigate('contact')} className="px-6 py-3 border border-zinc-700 rounded hover:bg-zinc-900 transition-colors">
          Contact Me
        </button>
      </div>
    </section>
  );
}
