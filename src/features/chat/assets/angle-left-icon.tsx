import type { IconType } from "../types";

export const AngleLeftIcon: React.FC<IconType> = ({
  width = 9,
  height = 18,
  color = "#F3F3F3",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 9 18"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8.51562 16.0312C8.79688 16.3125 8.79688 16.7812 8.46875 17.0625C8.1875 17.3438 7.71875 17.3438 7.4375 17.0156L0.6875 9.51562C0.40625 9.23438 0.40625 8.8125 0.6875 8.53125L7.4375 1.07812C7.71875 0.75 8.1875 0.75 8.46875 0.984375C8.79688 1.3125 8.79688 1.78125 8.51562 2.0625L2.23438 9L8.51562 16.0312Z"
        fill={color}
      />
    </svg>
  );
};
