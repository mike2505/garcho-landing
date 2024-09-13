import type { IconType } from "@/types";

export const SalesIcon: React.FC<IconType> = ({ width = 36, height = 28 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 32"
      fill="none"
      aria-hidden={true}
    >
      <path
        d="M14 16C16.1217 16 18.1566 15.1571 19.6569 13.6569C21.1571 12.1566 22 10.1217 22 8C22 5.87827 21.1571 3.84344 19.6569 2.34315C18.1566 0.842855 16.1217 0 14 0C11.8783 0 9.84344 0.842855 8.34315 2.34315C6.84285 3.84344 6 5.87827 6 8C6 10.1217 6.84285 12.1566 8.34315 13.6569C9.84344 15.1571 11.8783 16 14 16ZM11.1438 19C4.9875 19 0 23.9875 0 30.1437C0 31.1687 0.83125 32 1.85625 32H26.1437C26.7687 32 27.3188 31.6938 27.6562 31.2188L21.4562 25.0187C20.525 24.0875 20 22.825 20 21.5125V19.45C19.0063 19.1562 17.95 19 16.8563 19H11.1438ZM24 14C22.8937 14 22 14.8938 22 16V21.1688C22 22.2313 22.4188 23.25 23.1688 24L29.8813 30.7062C31.05 31.875 32.95 31.875 34.125 30.7062L38.7125 26.1187C39.8813 24.95 39.8813 23.05 38.7125 21.875L32 15.1687C31.25 14.4187 30.2313 14 29.1688 14H24ZM25.5 19C25.5 18.6022 25.658 18.2206 25.9393 17.9393C26.2206 17.658 26.6022 17.5 27 17.5C27.3978 17.5 27.7794 17.658 28.0607 17.9393C28.342 18.2206 28.5 18.6022 28.5 19C28.5 19.3978 28.342 19.7794 28.0607 20.0607C27.7794 20.342 27.3978 20.5 27 20.5C26.6022 20.5 26.2206 20.342 25.9393 20.0607C25.658 19.7794 25.5 19.3978 25.5 19Z"
        fill="#DDBFFF"
      />
      <defs>
        <linearGradient
          id="paint0_linear_417_4111"
          x1="19.7945"
          y1="0"
          x2="19.7945"
          y2="32"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A5EC32" stopOpacity="0.866667" />
          <stop offset="1" stopColor="#75BE00" />
        </linearGradient>
      </defs>
    </svg>
  );
};
