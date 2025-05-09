'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  const initialWaitlist = 2180;
  const [waitlistCount, setWaitlistCount] = useState(initialWaitlist);

  useEffect(() => {
    // Load from localStorage if exists
    const savedCount = localStorage.getItem('waitlistCount');
    if (savedCount) {
      setWaitlistCount(parseInt(savedCount, 10));
    }

    // Every 45s, add +1
    const interval1 = setInterval(() => {
      setWaitlistCount(prev => {
        const newCount = prev + 1;
        localStorage.setItem('waitlistCount', newCount.toString());
        return newCount;
      });
    }, 45000);

    // Every 2min, add +2
    const interval2 = setInterval(() => {
      setWaitlistCount(prev => {
        const newCount = prev + 2;
        localStorage.setItem('waitlistCount', newCount.toString());
        return newCount;
      });
    }, 120000);

    // Cleanup
    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);

  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          
          {/* Logo */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Dynamic Waitlist Counter */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li className="bg-blue-50 text-blue-700 px-4 py-1 rounded-full text-sm font-medium border border-blue-200 animate-pulse">
              👥 {waitlistCount.toLocaleString()} on waitlist
            </li>
          </ul>

        </div>
      </div>
    </header>
  );
}
