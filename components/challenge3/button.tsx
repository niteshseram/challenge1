import clsx from "clsx";

type Props = Readonly<{
  label: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  type?: "button" | "submit";
}>;

export default function Button({ label, onClick, type = "button" }: Props) {
  return (
    <button
      type={type}
      className={clsx(
        "text-center text-white font-medium",
        "rounded py-2.5 px-4",
        "bg-indigo-700 shadow hover:bg-indigo-800",
        "focus:ring-4 focus:ring-indigo-700/[0.12]",
        "outline-none outline-1 outline-offset-0 focus:outline-indigo-700",
        "focus:ring-4 focus:ring-offset-1 focus:ring-indigo-700/[0.12]"
      )}
    >
      {label}
    </button>
  );
}
