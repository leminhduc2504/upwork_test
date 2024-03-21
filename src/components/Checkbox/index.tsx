import { FC } from "react";
import "./styles.css";

type Props = {
  checked?: boolean;
  onChange?: (id?: number) => void;
  value?: number;
  checkboxClass?: string;
};

export const Checkbox: FC<Props> = ({
  checked,
  onChange,
  value,
  checkboxClass,
}) => {
  return (
    <div className="w-[35px] h-[35px] flex justify-center  items-center">
      <input
        className={`checkbox ${checkboxClass}`}
        type="checkbox"
        checked={checked}
        value={value}
        onChange={(e) => {
          onChange && onChange(Number(e.target.value));
        }}
      />
    </div>
  );
};
