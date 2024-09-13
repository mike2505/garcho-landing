import type { IconType } from "../types";

export const ArrowUpIcon: React.FC<IconType> = ({
  width = 14,
  height = 14,
  color = "#111111",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M1.1875 5.75L6.4375 0.25C6.59375 0.09375 6.78125 0.03125 7 0.03125C7.1875 0.03125 7.375 0.09375 7.53125 0.25L12.7812 5.75C13.0625 6.0625 13.0625 6.53125 12.75 6.8125C12.4688 7.09375 11.9688 7.09375 11.6875 6.78125L7.75 2.625V13.25C7.75 13.6875 7.40625 14 7 14C6.625 14 6.25 13.6875 6.25 13.25V2.625L2.28125 6.78125C2 7.09375 1.5 7.09375 1.21875 6.8125C0.90625 6.53125 0.90625 6.03125 1.1875 5.75Z"
        fill={color}
      />
    </svg>
  );
};
