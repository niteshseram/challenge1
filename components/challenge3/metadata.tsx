type Props = Readonly<{
  icon: React.ReactNode;
  label: string;
}>;

export default function MetadataInfo({ icon, label }: Props) {
  return (
    <div className="flex gap-3 items-center text-indigo-700">
      <div className="p-3 rounded-full bg-white shadow">{icon}</div>
      <div className="px-[18px] py-[10px]">
        <p className="font-medium">{label}</p>
      </div>
    </div>
  );
}
