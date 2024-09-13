import type { IconType } from "../types";

export const SmileIcon: React.FC<IconType> = ({
  width = 16,
  height = 16,
  color = "#111111",
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
        d="M8 11.5C9.34375 11.5 10.2812 10.8438 10.8438 10.1875C11.0312 9.96875 11.3438 9.96875 11.5625 10.125C11.7812 10.3125 11.7812 10.625 11.625 10.8438C10.9062 11.6562 9.71875 12.5 8 12.5C6.25 12.5 5.0625 11.6562 4.34375 10.8438C4.1875 10.625 4.1875 10.3125 4.40625 10.125C4.625 9.96875 4.9375 9.96875 5.125 10.1875C5.6875 10.8438 6.625 11.5 8 11.5ZM6.25 6.5C6.25 6.9375 5.90625 7.25 5.5 7.25C5.09375 7.25 4.75 6.9375 4.75 6.5C4.75 6.09375 5.09375 5.75 5.5 5.75C5.90625 5.75 6.25 6.09375 6.25 6.5ZM9.75 6.5C9.75 6.09375 10.0938 5.75 10.5 5.75C10.9062 5.75 11.25 6.09375 11.25 6.5C11.25 6.9375 10.9062 7.25 10.5 7.25C10.0938 7.25 9.75 6.9375 9.75 6.5ZM16 8C16 12.4375 12.4062 16 8 16C3.5625 16 0 12.4375 0 8C0 3.59375 3.5625 0 8 0C12.4062 0 16 3.59375 16 8ZM8 1C4.125 1 1 4.15625 1 8C1 11.875 4.125 15 8 15C11.8438 15 15 11.875 15 8C15 4.15625 11.8438 1 8 1Z"
        fill={color}
      />
    </svg>
  );
};
