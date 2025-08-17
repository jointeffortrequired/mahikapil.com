import { SimpleTooltip } from "@/components/ui/tooltip";
import { USER } from "@/data/user";
import { cn } from "@/lib/utils";
import { FlipSentences } from "@/registry/flip-sentences";

import { PronounceMyName } from "./pronounce-my-name";
import { VerifiedIcon } from "./verified-icon";

export function ProfileHeader() {
  return (
    <div className="screen-line-after flex border-x border-edge">
      <div className="shrink-0 border-r border-edge">
        <div className="mx-[2px] my-[3px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="size-100 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none sm:size-40"
            alt={`${USER.displayName}'s avatar`}
            src={USER.avatar}
            fetchPriority="high"
          />
        </div>

        {/* Flag of Viet Nam */}
        <svg
  className="absolute top-0 -left-px h-12 sm:h-14"
  viewBox="0 0 30 20"
  xmlns="http://www.w3.org/2000/svg"
>
  {/* Saffron stripe */}
  <rect width="30" height="6.66" y="0" fill="#FF9933" />

  {/* White stripe */}
  <rect width="30" height="6.66" y="6.66" fill="#FFFFFF" />

  {/* Green stripe */}
  <rect width="30" height="6.66" y="13.32" fill="#138808" />

  {/* Ashoka Chakra */}
  <circle cx="15" cy="10" r="2" stroke="#000088" strokeWidth="0.4" fill="none" />

  {/* 24 spokes */}
  <g stroke="#000088" strokeWidth="0.2">
    {[...Array(24)].map((_, i) => (
      <line
        key={i}
        x1="15"
        y1="8"
        x2="15"
        y2="12"
        transform={`rotate(${i * 15} 15 10)`}
      />
    ))}
  </g>
</svg>

      </div>

      <div className="flex flex-1 flex-col">
        <div
          className={cn(
            "flex grow items-end pb-1 pl-4",
            "bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] [--pattern-foreground:var(--color-edge)]/56"
          )}
        >
          <div className="line-clamp-1 font-mono text-xs text-zinc-300 select-none max-sm:hidden dark:text-zinc-800">
            {"text-3xl "}
            <span className="inline dark:hidden">text-zinc-950</span>
            <span className="hidden dark:inline">text-zinc-50</span>
            {" font-medium"}
          </div>
        </div>

        <div className="border-t border-edge">
          <h1 className="flex items-center pl-4 text-3xl font-semibold">
            {USER.displayName}
            &nbsp;
            <SimpleTooltip content="Verified">
              <VerifiedIcon className="size-[0.6em] translate-y-px text-info select-none" />
            </SimpleTooltip>
            {USER.namePronunciationUrl && (
              <>
                &nbsp;
                <PronounceMyName
                  className="translate-y-px"
                  namePronunciationUrl={USER.namePronunciationUrl}
                />
              </>
            )}
          </h1>

          <div className="h-12 border-t border-edge py-1 pl-4 sm:h-auto">
            <FlipSentences sentences={USER.flipSentences} />
          </div>
        </div>
      </div>
    </div>
  );
}
