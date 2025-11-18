import Image from './image';

interface BookTitleProps {
  category?: string;
  title: string;
  author: string;
  rate?: number;
}

export default function BookTitle({
  category,
  title,
  author,
  rate,
}: BookTitleProps) {
  return (
    <div className="flex flex-col gap-1">
      <h4 className="w-fit px-2 gap-2 border border-neutral-300 rounded-sm text-sm font-bold text-neutral-950">
        {category}
      </h4>
      <h3 className="text-display-sm font-bold text-neutral-950">{title}</h3>
      <p className="text-md font-semibold text-neutral-700">{author}</p>
      <div className="flex flex-row gap-0.5">
        <Image src="/icons/rate-star.png" alt="Rate Star" className="w-6 h-6" />
        <p className="text-md font-bold text-neutral-900">{rate}</p>
      </div>
    </div>
  );
}
