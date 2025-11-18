interface BookInfoProps {
  value: number;
  text: string;
}

export default function BookInfo({ value, text }: BookInfoProps) {
  return (
    <div className="flex flex-col">
      <p className="text-display-xs font-bold text-neutral-950">{value}</p>
      <span className="text-md font-medium text-neutral-950">{text}</span>
    </div>
  );
}
