import type { IconType } from "../types";

export const HomeIcon: React.FC<IconType> = ({
  width = 27,
  height = 24,
  color = "#111111",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 27 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M26.6055 11.8359C26.9199 12.1055 26.9199 12.5547 26.6504 12.8691C26.4258 13.1836 25.9766 13.1836 25.6621 12.9141L24 11.4316V20.2812C24 22.3027 22.3828 23.875 20.4062 23.875H7.46875C5.44727 23.875 3.875 22.3027 3.875 20.2812V11.4316L2.16797 12.9141C1.85352 13.1836 1.4043 13.1836 1.17969 12.8691C0.910156 12.5547 0.910156 12.1055 1.22461 11.8359L13.4434 1.09961C13.7129 0.830078 14.1172 0.830078 14.3867 1.09961L26.6055 11.8359ZM7.46875 22.4375H10.3438V15.25C10.3438 14.4863 10.9727 13.8125 11.7812 13.8125H16.0938C16.8574 13.8125 17.5312 14.4863 17.5312 15.25V22.4375H20.4062C21.5742 22.4375 22.5625 21.4941 22.5625 20.2812V10.1738L13.9375 2.58203L5.3125 10.1738V20.2812C5.3125 21.4941 6.25586 22.4375 7.46875 22.4375ZM11.7812 22.4375H16.0938V15.25H11.7812V22.4375Z"
        fill={color}
      />
    </svg>
  );
};
