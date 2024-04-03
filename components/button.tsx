import clsx from "clsx";

type Props = Readonly<{
  label: string;
  variant: "primary" | "secondary";
  className?: string;
}>;

export default function Button({ label, variant, className }: Props) {
  return (
    <button
      className={clsx(
        "text-base md:text-lg font-medium",
        "rounded md:p-4 p-3 shadow",
        "lg:w-44 md:w-52 w-full",
        variant === "primary" && "bg-indigo-700 text-white",
        variant === "secondary" && " text-neutral-900",
        className
      )}
    >
      {label}
    </button>
  );
}
