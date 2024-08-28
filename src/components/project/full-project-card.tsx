"use client";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { FullProjectCardProps } from "@/types/types";
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import LinkReseau from "../Link-reseau";

export default function FullProjectCard({ title, text, RepositoryUrl, imagePath, techsText, ProjectUrl, setOpen }: FullProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [setOpen]);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.7,
        ease: [0, 0.71, 0.2, 1.01],
        type: "spring",
        bounce: 0.5,
      }}
    >
      <Card className="overflow-hidden rounded-2xl max-w-[700px] border-none" ref={cardRef}>
        <CardHeader className="p-0  overflow-hidden">
          <Image src={imagePath} width={750} height={500} alt={title} title={title} className="w-full h-auto" />
        </CardHeader>
        <CardContent className="flex-col mt-6">
          <div className="flex items-center gap-4 w-full">
            <h4 className="text-2xl md:text-4xl font-bold">{title}</h4>
          </div>
          <p className="text-primary text-[1rem] md:text-lg font-semibold py-3">{techsText}</p>
          <p className="text-sm leading-6 whitespace-pre-line">{text}</p>
        </CardContent>
        <CardFooter className="flex flex-col pb-8 items-start">
          <p className="text-xl font-bold mb-1">Liens du projet :</p>
          <div className="flex items-center gap-4">
            {RepositoryUrl.map(({ url, title, textLink }) => (
              <LinkReseau key={url} url={url} title={title}>
                <div className="flex items-center text-primary underline-offset-4 hover:underline">
                  <GitHubLogoIcon width={15} height={15} className="me-2" />
                  <p className="text-sm md:text-[1rem]">{textLink ? textLink : "code source"}</p>
                </div>
              </LinkReseau>
            ))}
            {ProjectUrl && (
              <LinkReseau url={ProjectUrl} title="Démo du projet">
                <div className="flex items-center text-primary underline-offset-4 hover:underline">
                  <ExternalLinkIcon width={15} height={15} className="me-2" />
                  <p className="text-[1rem]">démo du projet</p>
                </div>
              </LinkReseau>
            )}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
