export const HelpnodeIcon = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
    >
      <rect width="16" height="16" fill="url(#pattern0_84_1297)" />
      <defs>
        <pattern
          id="pattern0_84_1297"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_84_1297" transform="scale(0.0208333)" />
        </pattern>
        <image
          id="image0_84_1297"
          width="48"
          height="48"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};
