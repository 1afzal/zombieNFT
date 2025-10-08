import React from "react";
import { Badge } from "@/components/ui/8bit/badge";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/8bit/avatar";
import { RetroModeSwitcher } from "@/components/ui/retro-mode-switcher"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/8bit/navigation-menu";


function Navigation() {
  return (
    <div className="flex justify-between items-center min-h-16 ">
      <div className="ml-2 flex items-center gap-5">
        <Avatar className="w-12 h-12">
          <AvatarImage
            src="https://8bitcn.com/images/pixelized-8bitcnorc.jpg"
            alt="@8bitcn"
          />
          <AvatarFallback>X</AvatarFallback>
        </Avatar>
        <Badge variant="secondary" font="retro">
          pixelated
        </Badge>
      </div>

      <div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>About</NavigationMenuTrigger>
              <NavigationMenuContent>
                <Badge variant="secondary" font="retro" className="text-clip">
                  Pixelated is an project<br/> developed  by  afzal using<br/> 8-bit cn components.
                </Badge>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Contact</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink asChild>
                  <a
                    href="https://www.linkedin.com/in/afza1/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <a
                    href="https://github.com/afza1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <a
                    href="mailto:afzalali256@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Gmail
                  </a>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a
                  href="https://github.com/1afzal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <NavigationMenuTrigger>GitHub</NavigationMenuTrigger>
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <RetroModeSwitcher />

      </div>
    </div>
  );
}

export default Navigation;
