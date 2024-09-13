import type { IconType } from "../types";

export const PhoneIcon: React.FC<IconType> = ({
  width = 24,
  height = 24,
  color = "#454545",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M23.25 14.25C18.2812 14.25 14.25 18.3281 14.25 23.25C14.25 23.6719 13.875 24 13.5 24C13.0781 24 12.75 23.6719 12.75 23.25C12.75 17.4844 17.4375 12.75 23.25 12.75C23.625 12.75 24 13.125 24 13.5C24 13.9219 23.625 14.25 23.25 14.25ZM13.5 3C13.5 2.20312 12.7969 1.5 12 1.5H3C2.15625 1.5 1.5 2.20312 1.5 3V21C1.5 21.8438 2.15625 22.5 3 22.5H9.75C10.125 22.5 10.5 22.875 10.5 23.25C10.5 23.6719 10.125 24 9.75 24H3C1.3125 24 0 22.6875 0 21V3C0 1.35938 1.3125 0 3 0H12C13.6406 0 15 1.35938 15 3V14.25C15 14.6719 14.625 15 14.25 15C13.8281 15 13.5 14.6719 13.5 14.25V3ZM6 18.75H9C9.375 18.75 9.75 19.125 9.75 19.5C9.75 19.9219 9.375 20.25 9 20.25H6C5.57812 20.25 5.25 19.9219 5.25 19.5C5.25 19.125 5.57812 18.75 6 18.75ZM22.5 21C23.2969 21 24 21.7031 24 22.5C24 23.3438 23.2969 24 22.5 24C21.6562 24 21 23.3438 21 22.5C21 21.7031 21.6562 21 22.5 21ZM23.25 16.5C23.625 16.5 24 16.875 24 17.25C24 17.6719 23.625 18 23.25 18C20.3438 18 18 20.3906 18 23.25C18 23.6719 17.625 24 17.25 24C16.8281 24 16.5 23.6719 16.5 23.25C16.5 19.5469 19.5 16.5 23.25 16.5Z"
        fill={color}
      />
    </svg>
  );
};
