import React from "react";

export default function PlayIcon({fill}) {
  return (
    <span
      className="XQskgrQ play-icon"
      aria-hidden="true"
      style={{ width: 14, height: 14 }}
    >
      <svg
        width={16}
        height={16}
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        fill={fill}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8ZM5.742 11.778 11.655 8.3a.348.348 0 0 0 0-.6L5.742 4.222a.348.348 0 0 0-.525.3v6.956a.348.348 0 0 0 .525.3Z"
        />
      </svg>
    </span>
  );
}
