import type { IconType } from "../types";

export const OptionsIcon: React.FC<IconType> = ({
  width = 4,
  height = 18,
  color = "#F3F3F3",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 4 18"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 15C2.79688 15 3.5 15.7031 3.5 16.5C3.5 17.3438 2.79688 18 2 18C1.15625 18 0.5 17.3438 0.5 16.5C0.5 15.7031 1.15625 15 2 15ZM2 7.5C2.79688 7.5 3.5 8.20312 3.5 9C3.5 9.84375 2.79688 10.5 2 10.5C1.15625 10.5 0.5 9.84375 0.5 9C0.5 8.20312 1.15625 7.5 2 7.5ZM2 3C1.15625 3 0.5 2.34375 0.5 1.5C0.5 0.703125 1.15625 0 2 0C2.79688 0 3.5 0.703125 3.5 1.5C3.5 2.34375 2.79688 3 2 3Z"
        fill={color}
      />
    </svg>
  );
};
