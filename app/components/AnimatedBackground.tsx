"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

export default function AnimatedBackground() {
  // Foco de luz que sigue al ratón (con suavizado)
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);
  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 20 });
  const spotX = useTransform(smoothX, (v) => v - 250);
  const spotY = useTransform(smoothY, (v) => v - 250);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [mouseX, mouseY]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#09090b]"
    >
      {/* Cuadrícula tenue que se desvanece en los bordes */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      {/* Luz lima que deriva lentamente */}
      <motion.div
        animate={{ x: [0, 140, -60, 0], y: [0, 90, 160, 0], scale: [1, 1.2, 0.9, 1] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-40 top-[-10%] h-[32rem] w-[32rem] rounded-full bg-lime-400/15 blur-[120px]"
      />

      {/* Segunda luz, más fría, en sentido contrario */}
      <motion.div
        animate={{ x: [0, -160, 40, 0], y: [0, 120, -40, 0], scale: [1, 0.85, 1.15, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-40 top-[35%] h-[34rem] w-[34rem] rounded-full bg-emerald-500/10 blur-[130px]"
      />

      {/* Foco que sigue al ratón */}
      <motion.div
        style={{
          x: spotX,
          y: spotY,
          background:
            "radial-gradient(circle, rgba(163,230,53,0.10) 0%, transparent 65%)",
        }}
        className="absolute left-0 top-0 hidden h-[500px] w-[500px] rounded-full md:block"
      />
    </div>
  );
}