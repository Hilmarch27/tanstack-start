import React from 'react'

export function Loader({ ...props }: React.HTMLAttributes<SVGElement>) {
  return (
    <div className="flex h-svh items-center justify-center fixed inset-0 z-50  backdrop-blur-md bg-white/30">
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 100 100"
        overflow="visible"
        fill="currentColor"
        stroke="currentColor"
      >
        <defs>
          <rect
            id="loader"
            x="46.5"
            y="40"
            width="7"
            height="20"
            rx="2"
            ry="2"
            transform="translate(0 -30)"
          />
        </defs>
        <use xlinkHref="#loader" transform="rotate(0 50 50)">
          <animate
            attributeName="opacity"
            values="0;1;0"
            dur="1s"
            begin="0s"
            repeatCount="indefinite"
          />
        </use>
        <use xlinkHref="#loader" transform="rotate(45 50 50)">
          <animate
            attributeName="opacity"
            values="0;1;0"
            dur="1s"
            begin="0.125s"
            repeatCount="indefinite"
          />
        </use>
        <use xlinkHref="#loader" transform="rotate(90 50 50)">
          <animate
            attributeName="opacity"
            values="0;1;0"
            dur="1s"
            begin="0.25s"
            repeatCount="indefinite"
          />
        </use>
        <use xlinkHref="#loader" transform="rotate(135 50 50)">
          <animate
            attributeName="opacity"
            values="0;1;0"
            dur="1s"
            begin="0.375s"
            repeatCount="indefinite"
          />
        </use>
        <use xlinkHref="#loader" transform="rotate(180 50 50)">
          <animate
            attributeName="opacity"
            values="0;1;0"
            dur="1s"
            begin="0.5s"
            repeatCount="indefinite"
          />
        </use>
        <use xlinkHref="#loader" transform="rotate(225 50 50)">
          <animate
            attributeName="opacity"
            values="0;1;0"
            dur="1s"
            begin="0.625s"
            repeatCount="indefinite"
          />
        </use>
        <use xlinkHref="#loader" transform="rotate(270 50 50)">
          <animate
            attributeName="opacity"
            values="0;1;0"
            dur="1s"
            begin="0.75s"
            repeatCount="indefinite"
          />
        </use>
        <use xlinkHref="#loader" transform="rotate(315 50 50)">
          <animate
            attributeName="opacity"
            values="0;1;0"
            dur="1s"
            begin="0.875s"
            repeatCount="indefinite"
          />
        </use>
      </svg>
    </div>
  )
}
