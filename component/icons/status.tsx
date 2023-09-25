import React from "react";

export const Completed = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="16" height="16" rx="8" fill="#BCE455" fill-opacity="0.3" />
      <circle cx="8" cy="8" r="4" fill="#7FB519" />
    </svg>
  );
};

export const Pending = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="16" height="16" rx="8" fill="#DBA32A" fill-opacity="0.14" />
      <circle cx="8" cy="8" r="4" fill="#DBA32A" />
    </svg>
  );
};

export default Pending;

export const Hold = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="16" height="16" rx="8" fill="#DB2719" fill-opacity="0.3" />
      <circle cx="8" cy="8" r="4" fill="#DB2719" />
    </svg>
  );
};
