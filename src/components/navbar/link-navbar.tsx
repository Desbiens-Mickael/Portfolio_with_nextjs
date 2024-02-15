"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useContext } from "react";
import NavbarContext from "./navbar-context";
import { cn } from "@/lib/utils";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  delay?: number;
}

export default function LinkNavbar({ href, children, delay = 0 }: LinkProps) {
  const { activeSection } = useContext(NavbarContext);

  const cssMain = "text-base font-light flex items-center justify-center h-28 w-full writing-mode-vertical border-r-2 hover:bg-background hover:border-r-primary hover:opacity-100 transition-all";
  const active = activeSection === href.slice(1) ? "active" : "opacity-50 border-r-transparent";

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          x: -100,
        },
        visible: {
          opacity: 1,
          x: 0,
        },
      }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0, 0.71, 0.2, 1.01],
        type: "spring",
      }}
      initial="hidden"
      animate="visible"
      className="w-full"
    >
      <Link href={href} className={cn(cssMain, active)}>
        {children}
      </Link>
    </motion.div>
  );
}
