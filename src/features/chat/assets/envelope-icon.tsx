import type { IconType } from "../types";

export const EnvelopeIcon: React.FC<IconType> = ({
  width = 24,
  height = 18,
  color = "#F3F3F3",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 18"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M0 3C0 1.35938 1.3125 0 3 0H21C22.6406 0 24 1.35938 24 3V15C24 16.6875 22.6406 18 21 18H3C1.3125 18 0 16.6875 0 15V3ZM1.5 3V4.875L10.6406 11.625C11.4375 12.1875 12.5156 12.1875 13.3125 11.625L22.5 4.875V3C22.5 2.20312 21.7969 1.5 21 1.5H2.95312C2.15625 1.5 1.45312 2.20312 1.45312 3H1.5ZM1.5 6.75V15C1.5 15.8438 2.15625 16.5 3 16.5H21C21.7969 16.5 22.5 15.8438 22.5 15V6.75L14.2031 12.8438C12.8906 13.7812 11.0625 13.7812 9.75 12.8438L1.5 6.75Z"
        fill={color}
      />
    </svg>
  );
};
