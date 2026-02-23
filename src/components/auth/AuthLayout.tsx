// src/components/auth/AuthLayout.tsx
// Reusable split-screen layout for all auth pages (register, login, etc.)
// Left panel is hidden on small screens, visible on md and above

import type { ReactNode } from "react";
import petsHero from "../../assets/pet.png";

interface AuthLayoutProps {
  children: ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* ── Left panel — hidden on mobile, visible md+ ── */}
      <div className="hidden md:flex flex-col justify-between w-[46%] min-h-screen bg-[#FAD9C1] px-12 py-14 overflow-hidden">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-12">
          <div className="flex items-center justify-center w-9 h-9 rounded-lg">
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-black">
              <path d="M12 2C9.8 2 8 3.8 8 6s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zM6.5 7C5.1 7 4 8.1 4 9.5S5.1 12 6.5 12 9 10.9 9 9.5 7.9 7 6.5 7zm11 0C16.1 7 15 8.1 15 9.5S16.1 12 17.5 12 20 10.9 20 9.5 18.9 7 17.5 7zM12 13c-3.9 0-8 2-8 4.5V20h16v-2.5c0-2.5-4.1-4.5-8-4.5z" />
            </svg>
          </div>

          <div>
            <p className="font-black text-sm leading-none tracking-widest uppercase">
              PETAD
            </p>
            <p className="text-[9px] tracking-[0.2em] uppercase text-black/60">
              Pet Lovers
            </p>
          </div>
        </div>

        {/* Headline */}
        <div>
          <h1 className="font-black text-5xl lg:text-[50px]  leading-tight tracking-tight text-black ">
            Connecting Pet Lovers ❤️ For Easier Adoption!
          </h1>
          <p className="mt-4 text-base font-bold text-black/70 max-w-xl leading-relaxed">
            List your pets for adoption or discover pets/animals listed for
            adoption by their owners.
          </p>
        </div>

        {/* Pet image — large, anchored to bottom */}
        <div className="flex justify-center items-end flex-1 mt-6">
          <img
            src={petsHero}
            alt="A dog, cat and bird together"
            className="w-full 
             object-cover object-bottom drop-shadow-lg"
          />
        </div>
      </div>

      {/* ── Right panel — full width on mobile, flex-1 on md+ ── */}
      <div className="flex flex-1 items-center justify-center min-h-screen px-6 py-12 bg-white">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
}
