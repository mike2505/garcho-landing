import type { IconType } from "@/types";

export const CheckListIcon: React.FC<IconType> = ({
  width = 12,
  height = 10,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 10"
      fill="none"
      aria-hidden={true}
    >
      <path
        d="M2.74023 3.16211C2.6543 3.24805 2.52539 3.3125 2.375 3.3125C2.24609 3.33398 2.0957 3.26953 2.00977 3.16211L1.15039 2.30273C0.935547 2.10938 0.935547 1.78711 1.15039 1.59375C1.34375 1.37891 1.66602 1.37891 1.85938 1.59375L2.35352 2.06641L3.53516 0.734375C3.72852 0.541016 4.05078 0.519531 4.26562 0.712891C4.45898 0.90625 4.48047 1.22852 4.28711 1.44336L2.74023 3.16211ZM2.74023 6.59961C2.6543 6.68555 2.52539 6.75 2.375 6.75C2.24609 6.77148 2.0957 6.70703 2.00977 6.59961L1.15039 5.74023C0.935547 5.54688 0.935547 5.22461 1.15039 5.00977C1.34375 4.81641 1.66602 4.81641 1.85938 5.00977L2.35352 5.50391L3.53516 4.17188C3.72852 3.97852 4.05078 3.95703 4.26562 4.15039C4.45898 4.32227 4.48047 4.66602 4.28711 4.88086L2.74023 6.59961ZM5.64062 2.45312C5.33984 2.45312 5.125 2.23828 5.125 1.9375C5.125 1.6582 5.33984 1.42188 5.64062 1.42188H11.4844C11.7637 1.42188 12 1.6582 12 1.9375C12 2.23828 11.7637 2.45312 11.4844 2.45312H5.64062ZM5.125 5.375C5.125 5.0957 5.33984 4.85938 5.64062 4.85938H11.4844C11.7637 4.85938 12 5.0957 12 5.375C12 5.67578 11.7637 5.89062 11.4844 5.89062H5.64062C5.33984 5.89062 5.125 5.67578 5.125 5.375ZM4.4375 8.8125C4.4375 8.5332 4.65234 8.29688 4.95312 8.29688H11.4844C11.7637 8.29688 12 8.5332 12 8.8125C12 9.11328 11.7637 9.32812 11.4844 9.32812H4.95312C4.65234 9.32812 4.4375 9.11328 4.4375 8.8125ZM2.375 9.5C1.98828 9.5 1.6875 9.19922 1.6875 8.8125C1.6875 8.44727 1.98828 8.125 2.375 8.125C2.74023 8.125 3.0625 8.44727 3.0625 8.8125C3.0625 9.19922 2.74023 9.5 2.375 9.5Z"
        fill="#6D6F68"
      />
    </svg>
  );
};
