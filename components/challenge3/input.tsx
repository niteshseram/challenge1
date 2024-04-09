import clsx from "clsx";
import { ChangeEvent, InputHTMLAttributes, useId } from "react";

type Attributes = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  "disabled" | "required"
>;

type Props = Readonly<{
  label: string;
  placeholder: string;
  onChange?: (value: string, event: ChangeEvent<HTMLInputElement>) => void;
  type?: "email" | "text";
  disabled?: boolean;
}> &
  Readonly<Attributes>;

export default function Input({
  label,
  placeholder,
  onChange,
  type = "text",
  disabled,
  ...props
}: Props) {
  const id = useId();
  return (
    <div className={clsx("flex flex-col gap-1.5")}>
      <label htmlFor={id} className="text-sm font-medium text-neutral-700">
        {label}
      </label>
      <input
        id={id}
        disabled={disabled}
        type={type}
        className={clsx(
          "w-full block",
          "border border-neutral-200 disabled:border-neutral-100 focus:border-none rounded",
          "focus:ring-4 focus:ring-indigo-700/[0.12]",
          "outline-none outline-1 outline-offset-0 focus:outline-indigo-700",
          "bg-neutral-50",
          "placeholder:text-neutral-500 focus:placeholder:text-neutral-900 disabled:placeholder:text-neutral-400 ",
          "text-sm text-neutral-900 disabled:text-neutral-400",
          "py-[9px] px-[13px]"
        )}
        onChange={(event) => {
          onChange?.(event.target.value, event);
        }}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
}
