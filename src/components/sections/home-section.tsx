"use client";

import { cn } from "@/lib/utils";
import { paytone } from "@/style/font";
import { motion } from "framer-motion";
import Link from "next/link";
import Reveal from "../animation/Reveal";
import WaterDropGrid from "../animation/water-drop-grid/water-drop-grid";
import { Button } from "../ui/button";
import SectionComponent from "./section-component";

export default function HomeSection() {
  const container = {
    initial: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.25,
        staggerChildren: 0.075,
      },
    },
  };

  const item = {
    initial: {
      opacity: 0,
      x: 100,
    },
    show: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <SectionComponent id="home" className="relative py-0 md:py-0 h-[80vh] md:h-[90vh] flex flex-col justify-center">
      <div className="relative w-fit z-10">
        <h1 className={cn(paytone.className, "text-6xl font-extrabold inline-block md:text-8xl")}>
          <motion.span variants={container} initial="initial" animate="show">
            {"Mickaël".split("").map((letter, index) => (
              <motion.span key={index} className="inline-block" variants={item} transition={{ type: "spring", damping: 7 }}>
                {letter}
              </motion.span>
            ))}
          </motion.span>
          <br />
          <span className="text-stroke">Desbiens</span>
        </h1>
        <Reveal>
          <h2 className="text-primary inline-block text-2xl md:text-4xl font-bold my-4">Développeur Web Full-Stack</h2>
        </Reveal>
        <Reveal delay={0.5} slideDelay={0.1}>
          <p className="text-[1rem] md:text-lg font-semibold inline-block max-w-[700px]">
            Je suis un développeur web full-stack passionné par les technologies modernes et les défis. Toujours avide d&apos;apprendre et de me dépasser, je recherche constamment de nouveaux projets
            qui ont un impact positif sur la vie des gens.
          </p>
        </Reveal>
        <Reveal width="w-full">
          <Button asChild className="mt-4 w-full md:w-52 py-6 text-primary-foreground text-lg font-bold" title="Contact">
            <Link href="#contact">Contactez moi</Link>
          </Button>
        </Reveal>
      </div>
      <WaterDropGrid gridWidth={25} gridHeight={25} />
    </SectionComponent>
  );
}
