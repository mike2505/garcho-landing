import type { IconType } from "../types";

export const AngleRightIcon: React.FC<IconType> = ({
  width = 7,
  height = 12,
  color = "#454545",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 7 12"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M1.78125 11.25L6.25 6.5C6.375 6.34375 6.46875 6.15625 6.46875 6C6.46875 5.8125 6.375 5.625 6.25 5.46875L1.78125 0.71875C1.5 0.40625 1.03125 0.40625 0.71875 0.6875C0.40625 0.96875 0.40625 1.4375 0.6875 1.75L4.6875 6L0.6875 10.2188C0.40625 10.5312 0.40625 11 0.71875 11.2812C1.03125 11.5625 1.5 11.5625 1.78125 11.25Z"
        fill={color}
      />
    </svg>
  );
};
