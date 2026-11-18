"use client";

import { useReducedMotion } from "framer-motion";

const meteors = [
  { left: "58%", top: "6%", delay: "0s", duration: "7.5s" },
  { left: "68%", top: "0%", delay: "1.4s", duration: "6.4s" },
  { left: "76%", top: "12%", delay: "2.6s", duration: "8.2s" },
  { left: "86%", top: "2%", delay: "0.6s", duration: "7s" },
  { left: "93%", top: "18%", delay: "3.2s", duration: "9s" },
  { left: "64%", top: "22%", delay: "4.4s", duration: "6.8s" },
  { left: "81%", top: "28%", delay: "5.1s", duration: "8.6s" },
  { left: "72%", top: "8%", delay: "6.2s", duration: "7.8s" },
  { left: "97%", top: "4%", delay: "2s", duration: "6.2s" },
];

export function MeteorField() {
  const reduce = useReducedMotion();
  if (reduce) return null;

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {meteors.map((meteor) => (
        <span
          key={`${meteor.left}-${meteor.delay}`}
          className="meteor"
          style={{
            left: meteor.left,
            top: meteor.top,
            animationDelay: meteor.delay,
            animationDuration: meteor.duration,
          }}
        />
      ))}
    </div>
  );
}
