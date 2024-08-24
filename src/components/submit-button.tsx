import { Button } from "@/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";

export default function SubmitButton({ texte, isLoading = false }: { texte: string; isLoading: boolean }) {
  return (
    <Button disabled={isLoading} type="submit" className="w-full md:w-auto text-lg font-semibold px-5">
      {isLoading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
      {isLoading ? "En cour..." : texte}
    </Button>
  );
}
