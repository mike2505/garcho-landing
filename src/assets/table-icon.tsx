import type { IconType } from "@/types";

export const TableIcon: React.FC<IconType> = ({ width = 11, height = 11 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 11 11"
      fill="none"
      aria-hidden={true}
    >
      <path
        d="M9.625 0.5625C10.377 0.5625 11 1.18555 11 1.9375V8.8125C11 9.58594 10.377 10.1875 9.625 10.1875H1.375C0.601562 10.1875 0 9.58594 0 8.8125V1.9375C0 1.18555 0.601562 0.5625 1.375 0.5625H9.625ZM4.98438 5.54688V3.3125H1.03125V5.54688H4.98438ZM1.03125 6.57812V8.8125C1.03125 9.00586 1.18164 9.15625 1.375 9.15625H4.98438V6.57812H1.03125ZM6.01562 9.15625H9.625C9.79688 9.15625 9.96875 9.00586 9.96875 8.8125V6.57812H6.01562V9.15625ZM9.96875 5.54688V3.3125H6.01562V5.54688H9.96875Z"
        fill="#DDBFFF"
      />
      <defs>
        <linearGradient
          id="paint0_linear_550_2619"
          x1="5.5"
          y1="-0.5"
          x2="5.5"
          y2="10.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A5EC32" stopOpacity="0.866667" />
          <stop offset="1" stopColor="#75BE00" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const TableInactiveIcon: React.FC<IconType> = ({
  width = 11,
  height = 11,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 11 11"
      fill="none"
      aria-hidden={true}
    >
      <path
        d="M0 1.9375C0 1.18555 0.601562 0.5625 1.375 0.5625H9.625C10.377 0.5625 11 1.18555 11 1.9375V8.8125C11 9.58594 10.377 10.1875 9.625 10.1875H1.375C0.601562 10.1875 0 9.58594 0 8.8125V1.9375ZM0.6875 1.9375V3.3125H10.3125V1.9375C10.3125 1.57227 9.99023 1.25 9.625 1.25H1.375C0.988281 1.25 0.6875 1.57227 0.6875 1.9375ZM0.6875 4V6.40625H5.15625V4H0.6875ZM5.84375 4V6.40625H10.3125V4H5.84375ZM5.15625 7.09375H0.6875V8.8125C0.6875 9.19922 0.988281 9.5 1.375 9.5H5.15625V7.09375ZM9.625 9.5C9.99023 9.5 10.3125 9.19922 10.3125 8.8125V7.09375H5.84375V9.5H9.625Z"
        fill="#DDBFFF"
      />
      <defs>
        <linearGradient
          id="paint0_linear_550_2623"
          x1="5.5"
          y1="-0.5"
          x2="5.5"
          y2="10.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A5EC32" stopOpacity="0.866667" />
          <stop offset="1" stopColor="#75BE00" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const TableHeaderIcon: React.FC<IconType> = ({
  width = 16,
  height = 14,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 14"
      fill="none"
      aria-hidden={true}
    >
      <path
        d="M0 2C0 0.90625 0.875 0 2 0H14C15.0938 0 16 0.90625 16 2V12C16 13.125 15.0938 14 14 14H2C0.875 14 0 13.125 0 12V2ZM6 4H15V2C15 1.46875 14.5312 1 14 1H6V4ZM5 1H2C1.4375 1 1 1.46875 1 2V4H5V1ZM1 5V9H5V5H1ZM1 10V12C1 12.5625 1.4375 13 2 13H5V10H1ZM6 13H14C14.5312 13 15 12.5625 15 12V10H6V13ZM15 9V5H6V9H15Z"
        fill="#A5A7A2"
      />
    </svg>
  );
};
