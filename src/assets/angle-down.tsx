import type { IconType, IconWithColor } from "@/types";

export const AngleDownIcon: React.FC<IconType> = ({
  width = 11,
  height = 5,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 11 5"
      fill="none"
      aria-hidden={true}
    >
      <path
        d="M10.0651 0.828125L5.71741 4.76562C5.55334 4.92969 5.30725 4.92969 5.14319 4.76562L0.740845 0.828125C0.549438 0.664062 0.549438 0.390625 0.713501 0.226562C0.877563 0.0351562 1.151 0.0351562 1.31506 0.199219L5.41663 3.86328L9.49084 0.199219C9.65491 0.0351562 9.92834 0.0351562 10.0924 0.226562C10.2565 0.390625 10.2565 0.664062 10.0651 0.828125Z"
        fill="currentColor"
      />
    </svg>
  );
};
