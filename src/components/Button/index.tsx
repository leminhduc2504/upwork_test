import { FC } from "react";
import "./styles.css";

type Props = {
  children?: React.ReactNode;
  type?: "submit" | "reset" | "button";
  styles?: string;
};

export const Button: FC<Props> = ({ children, type, styles }) => {
  return (
    <button
      type={type}
      className={`primary-btn ${styles} w-[340px] h-[40px] rounded-[4px] px-[20px] py-[10px] gap-[10px]`}
    >
      {children}
    </button>
  );
};
