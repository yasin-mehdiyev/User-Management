import React from "react";

type IconProps = React.SVGProps<SVGSVGElement>;

const ArrowUp = ({
  width = "16",
  height = "16",
  viewBox = "0 0 16 16",
  ...props
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.64062 7.5625L7.57812 3.4375C7.69531 3.32031 7.83594 3.27344 8 3.27344C8.14062 3.27344 8.28125 3.32031 8.39844 3.4375L12.3359 7.5625C12.5469 7.79688 12.5469 8.14844 12.3125 8.35938C12.1016 8.57031 11.7266 8.57031 11.5156 8.33594L8.5625 5.21875V13.1875C8.5625 13.5156 8.30469 13.75 8 13.75C7.71875 13.75 7.4375 13.5156 7.4375 13.1875V5.21875L4.46094 8.33594C4.25 8.57031 3.875 8.57031 3.66406 8.35938C3.42969 8.14844 3.42969 7.77344 3.64062 7.5625Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ArrowUp;
