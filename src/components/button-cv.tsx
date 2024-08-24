import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ButtonCv({ delay = 0 }: { delay?: number }) {
  const after = "after:bg-primary after:top-0 after:left-0 after:w-full after:h-full after:absolute after:z-[-1] hover:after:translate-x-0  hover:after:translate-y-0";
  const animation = "after:transform after:translate-x-[-100%] after:translate-y-[-100%] after:transition after:duration-200 after:ease-in-out";

  return (
    <motion.div initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.4, delay: delay }}>
      <Button
        asChild
        variant="outline"
        title="Télécharger le cv"
        className={cn(" h-12 border-primary text-primary py-5 px-3 bg-transparent hover:bg-transparent hover:text-background transition-all overflow-hidden relative", [after, animation])}
      >
        <Link href="/assets/cv_developpeur_web_desbiens_mickael.pdf" target="_blank">
          <span className="hidden md:block me-1">Mon</span> CV
        </Link>
      </Button>
    </motion.div>
  );
}
