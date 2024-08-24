import { motion } from "framer-motion";
import { useContext } from "react";
import NavbarContext from "../navbar/navbar-context";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function LinkNavbarMobile({ href, delay, children }: { href: string; delay: number; children: React.ReactNode }) {
  const { activeSection } = useContext(NavbarContext);

  const cssMain = "text-base font-light flex flex-col items-center justify-center h-full w-full border-t-2 transition-all";
  const active = activeSection === href.slice(1) ? "active-mobile" : "opacity-50 border-t-transparent";

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
