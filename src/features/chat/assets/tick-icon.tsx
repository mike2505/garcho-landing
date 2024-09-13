import type { IconType } from "../types";

export const TickIcon: React.FC<IconType> = ({
  width = 16,
  height = 16,
  color = "#39C682",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 16C3.5625 16 0 12.4375 0 8C0 3.59375 3.5625 0 8 0C12.4062 0 16 3.59375 16 8C16 12.4375 12.4062 16 8 16ZM11.5312 6.53125H11.5C11.8125 6.25 11.8125 5.78125 11.5 5.46875C11.2188 5.1875 10.75 5.1875 10.4688 5.46875L7 8.96875L5.53125 7.5C5.21875 7.1875 4.75 7.1875 4.46875 7.5C4.15625 7.78125 4.15625 8.25 4.46875 8.53125L6.46875 10.5312C6.75 10.8438 7.21875 10.8438 7.53125 10.5312L11.5312 6.53125Z"
        fill={color}
      />
    </svg>
  );
};
