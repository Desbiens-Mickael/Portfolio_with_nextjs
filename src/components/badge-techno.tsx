import { Badge } from "./ui/badge";

interface BadgeTechnoProps {
  technoName: string;
  selected: Boolean;
}

export default function BadgeTechno({ technoName, selected }: BadgeTechnoProps) {
  return <Badge className="text-[1rem] md:text-lg text-forground px-6 grow text-center block bg-card hover:bg-secondary border-card">{technoName}</Badge>;
}
