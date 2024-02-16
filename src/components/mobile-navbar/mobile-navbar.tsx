"use client";

import { motion } from "framer-motion";
import { ActivityLogIcon, CodeIcon, EnvelopeClosedIcon, PersonIcon } from "@radix-ui/react-icons";
import LinkNavbarMobile from "./link-navbar-mobile";

export default function MobileNavbar() {
  return (
    <motion.nav initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }} className="flex md:hidden sticky bottom-0 left-0 z-20 w-full h-16 bg-navBar shadow-lg dark:shadow-none">
      <LinkNavbarMobile href="#about" delay={0.4}>
        <PersonIcon width={20} height={20} />
        <span className="text-xs mt-1">A propos</span>
      </LinkNavbarMobile>

      <LinkNavbarMobile href="#skills" delay={0.5}>
        <ActivityLogIcon width={20} height={20} />
        <span className="text-xs mt-1">Skill</span>
      </LinkNavbarMobile>

      <LinkNavbarMobile href="#projects" delay={0.6}>
        <CodeIcon width={20} height={20} />
        <span className="text-xs mt-1">Projets</span>
      </LinkNavbarMobile>

      <LinkNavbarMobile href="#contact" delay={0.7}>
        <EnvelopeClosedIcon width={20} height={20} />
        <span className="text-xs mt-1">Contact</span>
      </LinkNavbarMobile>
    </motion.nav>
  );
}
