import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface ButtonLogoProps {
  logoPath: string;
  alt: string;
  height: number;
  width: number;
  LinkStyle?: string;
  ImageStyle?: string;
}

export default function ButtonLogo({ logoPath, alt, height, width, LinkStyle, ImageStyle }: ButtonLogoProps) {
  return (
    <Link href={"#top"} className={LinkStyle}>
      <Image src={logoPath} alt={alt} width={width} height={height} className={cn("rounded-md shadow-md", ImageStyle)} />
    </Link>
  );
}
