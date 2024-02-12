"use client";
import DarkModeButton from "./dark-mode/dark-mode-button";
import ButtonCv from "./button-cv";
import LinkReseau from "./Link-reseau";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import ButtonLogo from "./button-logo";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 backdrop-blur sticky top-0 z-50 h-20 py-0 md:px-10">
      <div className="flex gap-3">
        <ButtonLogo logoPath="/assets/logo.png" alt="logo" height={40} width={42} LinkStyle="block md:hidden my-4" ImageStyle="w-full h-12" />
        <LinkReseau url={"https://github.com/Desbiens-Mickael"} title={"Github"} delay={0.2}>
          <GitHubLogoIcon width={28} height={28} />
        </LinkReseau>

        <LinkReseau url={"https://www.linkedin.com/in/mickael-desbiens/"} title={"Linkedin"} delay={0.3}>
          <LinkedInLogoIcon width={28} height={28} />
        </LinkReseau>
      </div>
      <div className="flex gap-3 items-center">
        <ButtonCv delay={0.5} />
        <DarkModeButton delay={0.6} />
      </div>
    </header>
  );
}
