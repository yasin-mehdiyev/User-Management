import React from "react";

type IconProps = React.SVGProps<SVGSVGElement>;

const ArrowDown = ({
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
        d="M12.3359 9.46094L8.39844 13.5859C8.28125 13.7031 8.14062 13.75 8 13.75C7.83594 13.75 7.69531 13.7031 7.57812 13.5859L3.64062 9.46094C3.42969 9.22656 3.42969 8.875 3.66406 8.66406C3.875 8.45312 4.25 8.45312 4.46094 8.6875L7.4375 11.8047V3.83594C7.4375 3.50781 7.67188 3.27344 7.97656 3.27344C8.25781 3.27344 8.5625 3.50781 8.5625 3.83594V11.8047L11.5156 8.6875C11.7266 8.45312 12.1016 8.45312 12.3125 8.66406C12.5469 8.875 12.5469 9.22656 12.3359 9.46094Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ArrowDown;
