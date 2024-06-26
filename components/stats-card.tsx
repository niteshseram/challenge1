import clsx from "clsx";

type Props = Readonly<{
  count: number;
  label: string;
}>;

export default function StatsCard({ count, label }: Props) {
  return (
    <div
      className={clsx(
        "flex flex-col gap-4 items-center justify-center w-full text-center",
        "border border-neutral-200 rounded-lg shadow bg-white",
        "h-[132px] md:h-[140px]"
      )}
    >
      <h1 className="text-4xl md:text-5xl font-bold text-indigo-700">
        {count.toLocaleString()}
      </h1>
      <p className="text-xl text-neutral-600">{label}</p>
    </div>
  );
}
