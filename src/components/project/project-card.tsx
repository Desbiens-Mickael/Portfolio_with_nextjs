"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Dialog, DialogContent, DialogOverlay, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { Suspense, useState } from "react";
import Reveal from "../animation/Reveal";
import LinkReseau from "../Link-reseau";
import { Separator } from "../ui/separator";
import FullProjectCard from "./full-project-card";

interface ProjectCardProps {
  title: string;
  text: string;
  RepositoryUrl: string;
  imagePath: string;
  techs: string[];
  ProjectUrl?: string;
}

export default function ProjectCard({ title, text, RepositoryUrl, imagePath, techs, ProjectUrl }: ProjectCardProps) {
  const [open, setOpen] = useState<boolean | undefined>(false);
  const minText = text.slice(0, 100);
  const techsText = techs.join(" - ");

  return (
    <Dialog open={open} onOpenChange={() => setOpen(!open)}>
      <Card className="overflow-hidden rounded-md bg-transparent border-none max-w-[600px] shadow-lg dark:shadow-none">
        <Reveal isSlide={false} delay={0.3}>
          <CardHeader className="p-0 overflow-hidden">
            <Suspense fallback={<p className="text-primary">Loading ...</p>}>
              <Image onClick={() => setOpen(!open)} src={imagePath} width={640} height={427} alt={title} title={title} className="h-auto transition-all duration-200 hover:scale-105 cursor-pointer" />
            </Suspense>
          </CardHeader>
        </Reveal>
        <CardContent className="flex-col pt-6 p-2 md:p-6 bg-card w-full h-full">
          <Reveal width="w-full">
            <div className="flex items-center justify-between gap-4 w-full">
              <h4 className="text-[1.2rem] md:text-xl font-semibold">{title}</h4>
              <Separator className="hidden md:flex flex-1 bg-secondary" />
              <div className="flex gap-2">
                <LinkReseau url={RepositoryUrl} title={`Repository de ${title}`}>
                  <GitHubLogoIcon width={28} height={28} />
                </LinkReseau>
                {ProjectUrl && (
                  <LinkReseau url={ProjectUrl} title="Démo du projet">
                    <ExternalLinkIcon width={28} height={28} />
                  </LinkReseau>
                )}
              </div>
            </div>
          </Reveal>
          <Reveal>
            <p className="text-primary text-sm py-3">{techsText}</p>
          </Reveal>
          <Reveal slideDelay={0.25}>
            <p className="text-sm leading-6">
              {minText + "...  "}
              <DialogTrigger className="text-primary underline-offset-4 hover:underline">{"Voir plus >"}</DialogTrigger>
            </p>
          </Reveal>
        </CardContent>
      </Card>
      <DialogOverlay className="backdrop-blur-lg" />
      <DialogContent className="bg-transparent border-none shadow-none w-full max-w-full h-svh overflow-y-auto flex justify-center items-baseline md:pt-24  focus:border-none">
        <FullProjectCard {...{ title, text, RepositoryUrl, imagePath, techsText, ProjectUrl, setOpen }} />
      </DialogContent>
    </Dialog>
  );
}
