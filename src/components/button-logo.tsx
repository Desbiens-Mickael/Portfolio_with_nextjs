import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface ButtonLogoProps {
  logoPath: string;
  alt: string;
  height: number;
  width: number;
  ContainerStyle?: string;
  ImageStyle?: string;
}

export default function ButtonLogo({ logoPath, alt, height, width, ContainerStyle, ImageStyle }: ButtonLogoProps) {
  return (
    <div className={ContainerStyle}>
      <Link href={"#top"}>
        <Image src={logoPath} alt={alt} width={width} height={height} className={cn("rounded-md shadow-md", ImageStyle)} />
      </Link>
    </div>
  );
}
