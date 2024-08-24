"use client";

import ButtonLogo from "@/components/button-logo";
import LinkNavbar from "@/components/navbar/link-navbar";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 0.5 }} className="hidden md:flex flex-col items-center bg-navBar w-16 sticky top-0 left-0 z-20 h-lvh shadow-lg">
      <ButtonLogo logoPath="/assets/logo.png" alt="logo" width={50} height={52} ContainerStyle="w-[50px] h-[50px] my-4" ImageStyle="w-full h-auto" />
      <LinkNavbar href="#about" delay={0.4}>
        A propos
      </LinkNavbar>
      <LinkNavbar href="#skills" delay={0.5}>
        Skill
      </LinkNavbar>
      <LinkNavbar href="#projects" delay={0.6}>
        Projets
      </LinkNavbar>
      <LinkNavbar href="#contact" delay={0.7}>
        Contact
      </LinkNavbar>
    </motion.nav>
  );
}
