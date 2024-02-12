"use client";

import { useInView } from "framer-motion";
import { useContext, useEffect, useRef } from "react";
import NavbarContext from "../navbar/navbar-context";
import { cn } from "@/lib/utils";

interface SectionComponentProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

export default function SectionComponent({ children, id, className }: SectionComponentProps) {
  const { setActiveSection } = useContext(NavbarContext);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      setActiveSection(id);
    }
  }, [isInView, id, setActiveSection]);

  return (
    <section id={id} ref={ref} className={cn("py-20 md:py-36 w-full max-w-[1150px] px-5 md:px-0", className)}>
      {children}
    </section>
  );
}
