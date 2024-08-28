import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface LinkReseauProps {
  url: string;
  imageUrl?: string;
  alt?: string;
  title: string;
  children?: React.ReactNode;
  delay?: number;
}

export default function LinkReseau({ url, imageUrl, alt, title, children, delay = 0 }: LinkReseauProps) {
  return (
    <motion.div initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.4, delay: delay }} className="flex items-center space-x-4">
      <Link href={url} target="_blank" rel="nofollow" className="text-2xl font-bold text-[#4a4949] hover:opacity-100 hover:text-primary transition-all" title={title}>
        {imageUrl && alt ? <Image src={imageUrl} width={25} height={25} alt={alt} /> : children}
      </Link>
    </motion.div>
  );
}
