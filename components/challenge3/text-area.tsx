import clsx from "clsx";
import { ChangeEvent, TextareaHTMLAttributes, useId, useState } from "react";

type Attributes = Pick<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "disabled" | "id" | "maxLength" | "minLength" | "rows" | "required"
>;

type Props = Readonly<{
  label: string;
  placeholder: string;
  onChange?: (value: string, event: ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  value?: string;
  maxLength: number;
}> &
  Readonly<Attributes>;

export default function TextArea({
  label,
  placeholder,
  onChange,
  disabled,
  value,
  maxLength,
  ...props
}: Props) {
  const [valueLength, setValueLength] = useState((value ?? "").length);
  const id = useId();
  return (
    <div className={clsx("flex flex-col gap-1.5")}>
      <label htmlFor={id} className="text-sm font-medium text-neutral-700">
        {label}
      </label>
      <textarea
        id={id}
        disabled={disabled}
        className={clsx(
          "w-full block",
          "focus:border-none disabled:border disabled:border-neutral-100 rounded-lg",
          "focus:ring-4 focus:ring-indigo-700/[0.12]",
          "outline-none outline-1 outline-offset-0 focus:outline-indigo-700",
          "bg-neutral-50",
          "placeholder:text-neutral-500 focus:placeholder:text-neutral-900 disabled:placeholder:text-neutral-400",
          "text-sm text-neutral-900 disabled:text-neutral-400",
          "py-3 px-3.5"
        )}
        onChange={(event) => {
          if (value === undefined) {
            setValueLength(event.target.value.trim().length);
          }
          onChange?.(event.target.value, event);
        }}
        placeholder={placeholder}
        maxLength={maxLength}
        {...props}
      />
      <div className={clsx("flex w-full justify-end")}>
        <span className="text-sm text-zinc-500">
          {valueLength}/{maxLength}
        </span>
      </div>
    </div>
  );
}
