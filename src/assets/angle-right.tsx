import type { IconType } from "@/types";

export const AngleRightIcon: React.FC<IconType> = ({
  width = 6,
  height = 11,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 6 11"
      fill="none"
      aria-hidden={true}
    >
      <path
        d="M1.43359 0.65625L5.34375 4.8125C5.45312 4.94922 5.53516 5.11328 5.53516 5.25C5.53516 5.41406 5.45312 5.57812 5.34375 5.71484L1.43359 9.87109C1.1875 10.1445 0.777344 10.1445 0.503906 9.89844C0.230469 9.65234 0.230469 9.24219 0.476562 8.96875L3.97656 5.25L0.476562 1.55859C0.230469 1.28516 0.230469 0.875 0.503906 0.628906C0.777344 0.382812 1.1875 0.382812 1.43359 0.65625Z"
        fill="currentColor"
      />
    </svg>
  );
};
