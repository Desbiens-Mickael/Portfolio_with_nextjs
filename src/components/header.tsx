"use client";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import ButtonCv from "./button-cv";
import ButtonLogo from "./button-logo";
import DarkModeButton from "./dark-mode/dark-mode-button";
import LinkReseau from "./Link-reseau";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 backdrop-blur sticky top-0 z-50 w-full h-20 py-0 md:px-10">
      <div className="flex gap-3">
        <ButtonLogo logoPath="/assets/logo.png" alt="logo" height={50} width={50} ContainerStyle="w-[46px] h-[46px] md:hidden" ImageStyle="w-full h-auto" />
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
