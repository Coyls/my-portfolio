import type { IconType } from "@icons-pack/react-simple-icons";
import React from "react";

interface IconQdrantProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconQdrant: IconType = React.forwardRef<
  SVGSVGElement,
  IconQdrantProps
>(({ color = "currentColor", size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 49 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Logo Qdrant"
    {...props}
  >
    <title>Qdrant</title>
    <g clipPath="url(#clip0_4688_32471)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48.8438 14.0017L48.8468 14L36.7206 7L24.5979 0L12.4719 7L0.349609 14L0.350208 14.0016V41.9996L12.4729 48.9996L24.5988 56V56.0007L32.3558 51.5252L32.3561 51.5246L32.3558 51.5244V42L24.5989 46.4796L16.5957 41.8604L8.59623 37.2415V18.7626L16.5957 14.1437L24.5989 9.52477L32.5983 14.1437L40.6015 18.7626V56.0004L40.6009 56L40.602 56.0025L48.8477 51.2436V14.0022L48.8438 14.0017ZM24.5989 36.9585L32.3558 32.4793V23.5244L24.5989 19.0451L16.8419 23.5244V32.4793L24.5989 36.9585Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_4688_32471">
        <rect
          width="48.3"
          height="56"
          fill="white"
          transform="translate(0.349609)"
        />
      </clipPath>
    </defs>
  </svg>
));

IconQdrant.displayName = "IconQdrant";
