import type { IconType } from "@/types";

export const CheckIcon: React.FC<IconType> = ({ width = 14, height = 10 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 10"
      fill="none"
      aria-hidden={true}
    >
      <path
        d="M12.8516 1.14844C13.207 1.47656 13.207 2.05078 12.8516 2.37891L5.85156 9.37891C5.52344 9.73438 4.94922 9.73438 4.62109 9.37891L1.12109 5.87891C0.765625 5.55078 0.765625 4.97656 1.12109 4.64844C1.44922 4.29297 2.02344 4.29297 2.35156 4.64844L5.25 7.51953L11.6211 1.14844C11.9492 0.792969 12.5234 0.792969 12.8516 1.14844Z"
        fill="#DDBFFF"
      />
    </svg>
  );
};
