import React, { SVGProps } from "react";

const Notification: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22.22px"
      height="27.07px"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="#888888"
        d="M5 19q-.425 0-.713-.288T4 18q0-.425.288-.713T5 17h1v-7q0-2.075 1.25-3.688T10.5 4.2v-.7q0-.625.438-1.063T12 2q.625 0 1.063.438T13.5 3.5v.7q2 .5 3.25 2.113T18 10v7h1q.425 0 .713.288T20 18q0 .425-.288.713T19 19H5Zm7 3q-.825 0-1.413-.588T10 20h4q0 .825-.588 1.413T12 22Z"
      ></path>
    </svg>
  );
};

export default Notification;
