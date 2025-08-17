import React from "react";

import { Button } from "@/components/ui/button";
import { SOURCE_CODE_GITHUB_URL } from "@/config/site";

import { Icons } from "./icons";

export function NavItemGitHub() {
  return (
    <Button variant="outline" size="icon" asChild>
      <a href="https://www.linkedin.com/in/mahi-kapil-868587346/">
    
        <Icons.github />
        <span className="sr-only">GitHub</span>
      </a>
    </Button>
  );
}
