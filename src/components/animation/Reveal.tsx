"use clent";

import { cn } from "@/lib/utils";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

interface RevealProps {
  children: React.ReactNode;
  width?: "w-fit" | "w-full" | "w-auto";
  delay?: number;
  isSlide?: boolean;
  slideDelay?: number;
  className?: string;
}

export default function Reveal({ children, className = "", delay = 0.25, isSlide = true, width = "w-fit", slideDelay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      if (isSlide) {
        slideControls.start("visible");
      }
    }
  }, [isInView, mainControls, slideControls, isSlide]);

  return (
    <div className={cn("relative overflow-hidden", width, className)} ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: delay }}
      >
        {children}
      </motion.div>
      {isSlide && (
        <motion.div
          variants={{
            hidden: { left: 0 },
            visible: { left: "100%" },
          }}
          initial="hidden"
          animate={slideControls}
          transition={{ duration: 0.5, ease: "easeIn", delay: slideDelay }}
          className="absolute bg-primary top-1 bottom-1 left-0 right-0 z-[20]"
        ></motion.div>
      )}
    </div>
  );
}
