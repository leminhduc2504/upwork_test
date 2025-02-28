import { FC } from "react";

type Props = {
  color?: string;
};

export const CheckIcon: FC<Props> = ({ color = "#E3E3E3" }) => {
  return (
    <svg
      width="17"
      height="13"
      viewBox="0 0 17 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.679993 6.592L6.22878 11.5272C6.24925 11.5454 6.28054 11.5437 6.29898 11.5235L16.32 0.519997"
        stroke={color}
        stroke-linecap="round"
      />
    </svg>
  );
};
