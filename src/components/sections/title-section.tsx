"use client";

import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";
import Reveal from "@/components/animation/Reveal";
import { paytone } from "@/style/font";

interface TitleSectionProps {
  text: string;
  inverse?: boolean;
}

export default function TitleSection({ text, inverse = false }: TitleSectionProps) {
  const after = "after:absolute after:w-full after:h-[0.1rem] after:bg-primary after:bottom-[-2px] after:left-0 after:z-[-1]";
  const before = "before:absolute before:w-[65%] before:h-[0.1rem] before:bg-primary before:bottom-[-12px] before:left-0 before:z-[-1]";

  return (
    <div className={`flex justify-between items-center ${inverse ? "flex-row-reverse" : ""}`}>
      <Reveal>
        <h3 className={cn(`text-4xl md:text-6xl font-bold relative mb-12 flex-2 ${inverse ? "ms-8" : "me-8"}`, [after, before, paytone.className])}>{text}</h3>
      </Reveal>
      <Separator className="flex-1 bg-slate-300 dark:bg-secondary mb-5" />
    </div>
  );
}
