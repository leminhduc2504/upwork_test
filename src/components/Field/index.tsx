import { FC } from "react";
import { Checkbox } from "../Checkbox";

type Props = {
  title?: string;
  value?: number;
  checked?: boolean;
  onChange: (id?: number) => void;
  fieldClass?: string;
  checkboxClass?: string;
};

export const Field: FC<Props> = ({
  title,
  fieldClass,
  checkboxClass,
  checked,
  onChange,
  value,
}) => {
  return (
    <div
      className={`${fieldClass} flex justify-between gap-[10px] items-center w-full h-[42px] py-[8px] pl-[22px] pr-[15px]`}
    >
      <span className="text">{title}</span>
      <Checkbox
        checkboxClass={checkboxClass}
        value={value}
        onChange={onChange}
        checked={checked}
      />
    </div>
  );
};
