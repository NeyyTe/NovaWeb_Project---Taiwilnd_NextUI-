import React from "react";
import groupOfUsers from "../assets/groupOfUsers.svg";
import supportIcon from "../assets/supportIcon.svg";

export const ChevronDown = ({ fill, size, height, width, ...props }) => {
  return (
    <svg
      fill="none"
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const HtmlTag = ({ fill, size, height, width, ...props }) => {
  return (
    <svg
      width="42px"
      height="42px"
      viewBox="0 0 32 32"
      id="OBJECT"
      xmlns="http://www.w3.org/2000/svg"
      fill="#dd62ed"
      stroke="#dd62ed"
      {...props}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <defs>
          <style>{`.cls-1{fill:#3d0066}`}</style>
        </defs>
        <title></title>
        <rect
          className="cls-1"
          height="30"
          rx="3"
          ry="3"
          width="30"
          x="1"
          y="1"
        ></rect>
        <path d="M31,7V4a3,3,0,0,0-3-3H4A3,3,0,0,0,1,4V7Z"></path>
        <path
          className="cls-1"
          d="M26,5h-.5a1,1,0,0,1,0-2H26a1,1,0,0,1,0,2Z"
        ></path>
        <path
          className="cls-1"
          d="M22,5h-.5a1,1,0,0,1,0-2H22a1,1,0,0,1,0,2Z"
        ></path>
        <path d="M10,24a1,1,0,0,1-.71-.29l-4-4a1,1,0,0,1,0-1.42l4-4a1,1,0,0,1,1.42,1.42L7.41,19l3.3,3.29a1,1,0,0,1,0,1.42A1,1,0,0,1,10,24Z"></path>
        <path d="M22,24a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42L24.59,19l-3.3-3.29a1,1,0,0,1,1.42-1.42l4,4a1,1,0,0,1,0,1.42l-4,4A1,1,0,0,1,22,24Z"></path>
        <path d="M14,26a1.25,1.25,0,0,1-.32-.05,1,1,0,0,1-.63-1.27l4-12a1,1,0,1,1,1.9.64l-4,12A1,1,0,0,1,14,26Z"></path>
      </g>
    </svg>
  );
};
export const UiuxIcon = ({ fill, size, height, width, ...props }) => {
  return (
    <svg
      width="42px"
      height="42px"
      viewBox="0 0 14 14"
      role="img"
      focusable="false"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
      transform="rotate(45)"
      {...props}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g transform="matrix(.3 0 0 .3 -.23126488 -.2)">
          {" "}
          <path
            fill="#ffc107"
            d="M24.639 4c-8.6 0-18.43 4.954-18.43 18.947C6.209 33.108 13.842 44 25.519 44h.175c4.385-.079 9.105-2.918 9.105-8.959 0-1.157-.431-2.159-.809-3.042-.102-.233-.199-.462-.288-.694-.864-2.175.089-2.971 2.329-4.565 2.537-1.806 6.013-4.278 5.968-10.819C41.999 12.032 37.756 4 24.639 4zm.56 35.2c-2.241 0-4.001-1.76-4.001-3.999 0-2.241 1.76-4.001 4.001-4.001 2.238 0 3.998 1.76 3.998 4.001 0 2.239-1.759 3.999-3.998 3.999z"
          ></path>{" "}
          <circle cx="34.5" cy="16.5" r="3.5" fill="#9c27b0"></circle>{" "}
          <circle cx="25.5" cy="10.5" r="3.5" fill="#2196f3"></circle>{" "}
          <circle cx="15.5" cy="15.5" r="3.5" fill="#4caf50"></circle>{" "}
          <circle cx="14.5" cy="26.5" r="3.5" fill="#ff3d00"></circle>{" "}
        </g>{" "}
      </g>
    </svg>
  );
};
export const Performance = ({ fill, size, height, width, ...props }) => {
  return (
    <svg
      width="42px"
      height="42px"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="rounL"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fill="#EDEDED"
          d="M50 0c-27.614 0-50 22.385-50 49.999 0 27.615 22.386 50.001 50 50.001s50-22.386 50-50.001c0-27.614-22.386-49.999-50-49.999z"
        ></path>
        <path
          fill="#D5D5D5"
          d="M78.559 27.014l1.427 1.428-37.697 33.551-4.283-4.283 40.553-30.696z"
        ></path>
        <path
          fill="#BEBEBE"
          d="M61 76.999v6h-6v-6h-2v6h-6v-6h-2v6h-6v-6h-2v8h26v-8h-2z"
        ></path>
        <path
          fill="#EFC75E"
          d="M47.031 8.094c-15.203 1.044-28.29 10.351-34.742 23.434l5.424 2.656c5.767-11.646 17.669-19.813 31.333-20.166.32-.008.636 0 .954 0v-6.014c-.983 0-1.971.021-2.969.09z"
        ></path>
        <path
          fill="#E2574C"
          d="M85.985 49.988c0 5.471-1.437 10.873-3.686 15.61-.689 1.452-.172 3.182 1.235 3.976l.054.03c1.564.882 3.537.234 4.305-1.381 2.63-5.533 4.107-11.843 4.107-18.235 0-7.042-1.743-13.672-4.807-19.5l-5.326 2.794c2.624 4.993 4.118 10.674 4.118 16.706z"
        ></path>
        <path
          fill="#3DB39E"
          d="M16.407 69.613l.054-.029c1.408-.775 1.924-2.467 1.234-3.887-2.439-5.021-3.886-11.12-3.658-17.104.209-5.493 1.686-10.681 4.13-15.293l-5.356-2.81c-2.57 4.867-4.211 10.29-4.674 16.029-.619 7.668.863 15.368 3.965 21.744.767 1.578 2.74 2.213 4.305 1.35z"
        ></path>
        <path
          fill="#F4B459"
          d="M50 8.004v6.014c14.174.001 26.436 8.185 32.301 20.095l5.392-2.652c-6.847-13.899-21.151-23.454-37.693-23.457z"
        ></path>
        <path
          fill="#324D5B"
          d="M76.559 22.014l1.427 1.428-35.697 38.551-4.283-4.283 38.553-35.696z"
        ></path>
        <path
          fill="#1E2D36"
          d="M50 44.999c-2.762 0-5 2.238-5 5s2.238 5 5 5 5-2.238 5-5-2.238-5-5-5z"
        ></path>
      </g>
    </svg>
  );
};

export const Lock = ({ fill, size, height, width, ...props }) => {
  return (
    <svg
      width="42px"
      height="42px"
      version="1.0"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 64 64"
      enableBackground="new 0 0 64 64"
      xmlSpace="preserve"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g>
          {" "}
          <path
            fill="#ff0000"
            d="M20,14c0-6.627,5.373-12,12-12s12,5.373,12,12v10h-4V14c0-4.418-3.582-8-8-8s-8,3.582-8,8v10h-4V14z"
          ></path>{" "}
          <g>
            {" "}
            <path
              fill="#F9EBB2"
              d="M10,60c0,1.104,0.896,2,2,2h40c1.104,0,2-0.896,2-2v-4H10V60z"
            ></path>{" "}
            <rect x="10" y="34" fill="#F9EBB2" width="44" height="20"></rect>{" "}
            <path
              fill="#F9EBB2"
              d="M52,26H12c-1.104,0-2,0.895-2,2v4h44v-4C54,26.895,53.104,26,52,26z"
            ></path>{" "}
          </g>{" "}
          <g>
            {" "}
            <path
              fill="#000000"
              d="M52,24h-6V14c0-7.732-6.268-14-14-14S18,6.268,18,14v10h-6c-2.211,0-4,1.789-4,4v32c0,2.211,1.789,4,4,4 h40c2.211,0,4-1.789,4-4V28C56,25.789,54.211,24,52,24z M20,14c0-6.627,5.373-12,12-12s12,5.373,12,12v10h-4V14 c0-4.418-3.582-8-8-8s-8,3.582-8,8v10h-4V14z M38,14v10H26V14c0-3.314,2.687-6,6-6S38,10.686,38,14z M54,60c0,1.104-0.896,2-2,2 H12c-1.104,0-2-0.896-2-2v-4h44V60z M54,54H10V34h44V54z M54,32H10v-4c0-1.105,0.896-2,2-2h40c1.104,0,2,0.895,2,2V32z"
            ></path>{" "}
            <path
              fill="#000000"
              d="M29,44.979V49c0,1.656,1.343,3,3,3s3-1.344,3-3v-4.021c1.209-0.912,2-2.348,2-3.979c0-2.762-2.238-5-5-5 s-5,2.238-5,5C27,42.631,27.791,44.066,29,44.979z M32,38c1.657,0,3,1.342,3,3c0,1.305-0.837,2.402-2,2.816V49 c0,0.553-0.447,1-1,1s-1-0.447-1-1v-5.184c-1.163-0.414-2-1.512-2-2.816C29,39.342,30.343,38,32,38z"
            ></path>{" "}
          </g>{" "}
          <path
            fill="#ff0000"
            d="M32,38c1.657,0,3,1.342,3,3c0,1.305-0.837,2.402-2,2.816V49c0,0.553-0.447,1-1,1s-1-0.447-1-1v-5.184 c-1.163-0.414-2-1.512-2-2.816C29,39.342,30.343,38,32,38z"
          ></path>{" "}
          <g opacity="0.15">
            {" "}
            <path d="M10,60c0,1.104,0.896,2,2,2h40c1.104,0,2-0.896,2-2v-4H10V60z"></path>{" "}
            <path d="M52,26H12c-1.104,0-2,0.895-2,2v4h44v-4C54,26.895,53.104,26,52,26z"></path>{" "}
          </g>{" "}
        </g>{" "}
      </g>
    </svg>
  );
};
export const GroupOfUsers = ({ fill, size, height, width, ...props }) => {
  return <img {...props} src={groupOfUsers} alt="" />;
};

export const SupportIcon = ({ fill, size, height, width, ...props }) => {
  return (
    // width="42px"
    // height="42px"
    <img src={supportIcon} alt="" />
  );
};

export const Swirl = ({ fill, size, height, width, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xmlns:svgjs="http://svgjs.dev/svgjs"
      viewBox="0 0 1422 800"
    >
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="oooscillate-grad"
        >
          <stop
            stop-color="hsl(206, 75%, 49%)"
            stop-opacity="1"
            offset="0%"
          ></stop>
          <stop
            stop-color="hsl(331, 90%, 56%)"
            stop-opacity="1"
            offset="100%"
          ></stop>
        </linearGradient>
      </defs>
      <g
        strokeWidth="2"
        stroke="url(#oooscillate-grad)"
        fill="none"
        strokeLinecap="round"
      >
        <path
          d="M 0 572 Q 355.5 -100 711 400 Q 1066.5 900 1422 572"
          opacity="0.90"
        ></path>
        <path
          d="M 0 550 Q 355.5 -100 711 400 Q 1066.5 900 1422 550"
          opacity="0.44"
        ></path>
        <path
          d="M 0 528 Q 355.5 -100 711 400 Q 1066.5 900 1422 528"
          opacity="0.58"
        ></path>
        <path
          d="M 0 506 Q 355.5 -100 711 400 Q 1066.5 900 1422 506"
          opacity="0.10"
        ></path>
        <path
          d="M 0 484 Q 355.5 -100 711 400 Q 1066.5 900 1422 484"
          opacity="0.29"
        ></path>
        <path
          d="M 0 462 Q 355.5 -100 711 400 Q 1066.5 900 1422 462"
          opacity="0.69"
        ></path>
        <path
          d="M 0 440 Q 355.5 -100 711 400 Q 1066.5 900 1422 440"
          opacity="0.26"
        ></path>
        <path
          d="M 0 418 Q 355.5 -100 711 400 Q 1066.5 900 1422 418"
          opacity="0.48"
        ></path>
        <path
          d="M 0 396 Q 355.5 -100 711 400 Q 1066.5 900 1422 396"
          opacity="0.48"
        ></path>
        <path
          d="M 0 374 Q 355.5 -100 711 400 Q 1066.5 900 1422 374"
          opacity="0.50"
        ></path>
        <path
          d="M 0 352 Q 355.5 -100 711 400 Q 1066.5 900 1422 352"
          opacity="0.78"
        ></path>
        <path
          d="M 0 330 Q 355.5 -100 711 400 Q 1066.5 900 1422 330"
          opacity="0.66"
        ></path>
        <path
          d="M 0 308 Q 355.5 -100 711 400 Q 1066.5 900 1422 308"
          opacity="0.94"
        ></path>
        <path
          d="M 0 286 Q 355.5 -100 711 400 Q 1066.5 900 1422 286"
          opacity="0.09"
        ></path>
        <path
          d="M 0 264 Q 355.5 -100 711 400 Q 1066.5 900 1422 264"
          opacity="0.84"
        ></path>
        <path
          d="M 0 242 Q 355.5 -100 711 400 Q 1066.5 900 1422 242"
          opacity="0.85"
        ></path>
        <path
          d="M 0 220 Q 355.5 -100 711 400 Q 1066.5 900 1422 220"
          opacity="0.51"
        ></path>
        <path
          d="M 0 198 Q 355.5 -100 711 400 Q 1066.5 900 1422 198"
          opacity="1.00"
        ></path>
        <path
          d="M 0 176 Q 355.5 -100 711 400 Q 1066.5 900 1422 176"
          opacity="0.41"
        ></path>
        <path
          d="M 0 154 Q 355.5 -100 711 400 Q 1066.5 900 1422 154"
          opacity="0.85"
        ></path>
        <path
          d="M 0 132 Q 355.5 -100 711 400 Q 1066.5 900 1422 132"
          opacity="0.96"
        ></path>
        <path
          d="M 0 110 Q 355.5 -100 711 400 Q 1066.5 900 1422 110"
          opacity="0.49"
        ></path>
        <path
          d="M 0 88 Q 355.5 -100 711 400 Q 1066.5 900 1422 88"
          opacity="0.84"
        ></path>
        <path
          d="M 0 66 Q 355.5 -100 711 400 Q 1066.5 900 1422 66"
          opacity="0.88"
        ></path>
        <path
          d="M 0 44 Q 355.5 -100 711 400 Q 1066.5 900 1422 44"
          opacity="0.43"
        ></path>
      </g>
    </svg>
  );
};
export const Activity = ({ fill, size, height, width, ...props }) => {
  return (
    <svg
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      >
        <path d="M6.918 14.854l2.993-3.889 3.414 2.68 2.929-3.78" />
        <path d="M19.668 2.35a1.922 1.922 0 11-1.922 1.922 1.921 1.921 0 011.922-1.922z" />
        <path d="M20.756 9.269a20.809 20.809 0 01.194 3.034c0 6.938-2.312 9.25-9.25 9.25s-9.25-2.312-9.25-9.25 2.313-9.25 9.25-9.25a20.931 20.931 0 012.983.187" />
      </g>
    </svg>
  );
};

export const Flash = ({
  fill = "currentColor",
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      fill="none"
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.09 13.28h3.09v7.2c0 1.68.91 2.02 2.02.76l7.57-8.6c.93-1.05.54-1.92-.87-1.92h-3.09v-7.2c0-1.68-.91-2.02-2.02-.76l-7.57 8.6c-.92 1.06-.53 1.92.87 1.92Z"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const Server = ({
  fill = "currentColor",
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      fill="none"
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.32 10H4.69c-1.48 0-2.68-1.21-2.68-2.68V4.69c0-1.48 1.21-2.68 2.68-2.68h14.63C20.8 2.01 22 3.22 22 4.69v2.63C22 8.79 20.79 10 19.32 10ZM19.32 22H4.69c-1.48 0-2.68-1.21-2.68-2.68v-2.63c0-1.48 1.21-2.68 2.68-2.68h14.63c1.48 0 2.68 1.21 2.68 2.68v2.63c0 1.47-1.21 2.68-2.68 2.68ZM6 5v2M10 5v2M6 17v2M10 17v2M14 6h4M14 18h4"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const TagUser = ({
  fill = "currentColor",
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      fill="none"
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 18.86h-.76c-.8 0-1.56.31-2.12.87l-1.71 1.69c-.78.77-2.05.77-2.83 0l-1.71-1.69c-.56-.56-1.33-.87-2.12-.87H6c-1.66 0-3-1.33-3-2.97V4.98c0-1.64 1.34-2.97 3-2.97h12c1.66 0 3 1.33 3 2.97v10.91c0 1.63-1.34 2.97-3 2.97Z"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
      <path
        d="M12 10a2.33 2.33 0 1 0 0-4.66A2.33 2.33 0 0 0 12 10ZM16 15.66c0-1.8-1.79-3.26-4-3.26s-4 1.46-4 3.26"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const Scale = ({
  fill = "currentColor",
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      fill="none"
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7ZM18 6 6 18"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M18 10V6h-4M6 14v4h4"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const Underline = ({
  fill = "currentColor",
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1418 125"
      fill={fill}
      width={width}
      height={height}
    >
      <path
        d="M1412.29 72.17c-11.04-5.78-20.07-14.33-85.46-25.24-22.37-3.63-44.69-7.56-67.07-11.04-167.11-22.06-181.65-21.24-304.94-30.56C888.78 1.39 822.57 1.1 756.44 0c-46.63-.11-93.27 1.56-139.89 2.5C365.5 13.55 452.86 7.68 277.94 23.15 202.57 33.32 127.38 45.01 52.07 55.69c-11.23 2.41-22.63 4.17-33.71 7.22C6.1 66.33 5.64 66.19 3.89 67.79c-7.99 5.78-2.98 20.14 8.72 17.5 33.99-9.47 32.28-8.57 178.06-29.66 4.26 4.48 7.29 3.38 18.42 3.11 13.19-.32 26.38-.53 39.56-1.12 53.51-3.81 106.88-9.62 160.36-13.95 18.41-1.3 36.8-3.12 55.21-4.7 23.21-1.16 46.43-2.29 69.65-3.4 120.28-2.16 85.46-3.13 234.65-1.52 23.42.99 1.57-.18 125.72 6.9 96.61 8.88 200.92 27.94 295.42 46.12 40.87 7.91 116.67 23.2 156.31 36.78 3.81 1.05 8.28-.27 10.51-3.58 3.17-3.72 2.66-9.7-.78-13.13-3.25-3.12-8.14-3.44-12.18-5.08-17.89-5.85-44.19-12.09-63.67-16.56l26.16 3.28c23.02 3.13 46.28 3.92 69.34 6.75 10.8.96 25.43 1.81 34.34-4.39 2.26-1.54 4.86-2.75 6.21-5.27 2.76-4.59 1.13-11.06-3.59-13.68ZM925.4 23.77c37.64 1.4 153.99 10.85 196.64 14.94 45.95 5.51 91.89 11.03 137.76 17.19 24.25 4.77 74.13 11.21 101.72 18.14-11.87-1.15-23.77-1.97-35.65-3.06-133.46-15.9-266.8-33.02-400.47-47.21Z"
        transform={`scale(${size / 1418})`}
      />
    </svg>
  );
};
