"use client";

import type { ReactNode } from "react";
import type { BoatOperatorClickParams } from "@/lib/analytics";
import { trackBoatOperatorClick } from "@/lib/analytics";

type TrackedOperatorLinkProps = {
  href: string;
  tracking: BoatOperatorClickParams;
  className?: string;
  children: ReactNode;
};

export function TrackedOperatorLink({
  href,
  tracking,
  className,
  children,
}: TrackedOperatorLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className={className}
      data-analytics-event="boat_operator_click"
      data-option-position={tracking.option_position}
      data-option-label={tracking.option_label}
      data-destination-url={tracking.destination_url}
      data-page={tracking.page}
      onClick={() =>
        trackBoatOperatorClick({
          ...tracking,
          destination_url: href,
        })
      }
    >
      {children}
    </a>
  );
}
