import type { IconType } from "@/types";

export const CalendarIcon: React.FC<IconType> = ({
  width = 14,
  height = 16,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 16"
      fill="none"
      aria-hidden={true}
    >
      <path
        d="M4.75 2H9.25V0.75C9.25 0.34375 9.5625 0 10 0C10.4062 0 10.75 0.34375 10.75 0.75V2H12C13.0938 2 14 2.90625 14 4V14C14 15.125 13.0938 16 12 16H2C0.875 16 0 15.125 0 14V4C0 2.90625 0.875 2 2 2H3.25V0.75C3.25 0.34375 3.5625 0 4 0C4.40625 0 4.75 0.34375 4.75 0.75V2ZM1.5 14C1.5 14.2812 1.71875 14.5 2 14.5H12C12.25 14.5 12.5 14.2812 12.5 14V6H1.5V14Z"
        fill="currentColor"
      />
    </svg>
  );
};
