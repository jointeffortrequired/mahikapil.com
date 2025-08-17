"use client";

import { DownloadIcon, TriangleDashedIcon, TypeIcon } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { toast } from "sonner";

import { copyText } from "@/utils/copy";

import { ChanhDaiMark, getMarkSVG } from "./chanhdai-mark";
import { getWordmarkSVG } from "./chanhdai-wordmark";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "./ui/context-menu";

export function BrandContextMenu({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();

  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>{children}</ContextMenuTrigger>

      <ContextMenuContent className="w-64">
        <ContextMenuItem
          onClick={() => {
            const svg = getMarkSVG(resolvedTheme === "light" ? "#000" : "#fff");
            
            toast.success("Copied Mark as SVG");
          }}
        >
          <ChanhDaiMark />
          
        </ContextMenuItem>

        <ContextMenuItem
          onClick={() => {
            const svg = getWordmarkSVG(
              resolvedTheme === "light" ? "#000" : "#fff"
            );
            
            toast.success("Copied Logotype as SVG");
          }}
        >
          <TypeIcon />
          
        </ContextMenuItem>

        <ContextMenuItem asChild>
          <Link href="">
            <TriangleDashedIcon />
            
          </Link>
        </ContextMenuItem>

        <ContextMenuItem asChild>
          <a href="" download>
            <DownloadIcon />
            
          </a>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}