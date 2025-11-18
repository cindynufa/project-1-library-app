import Image from './image';

interface BookCardProps {
  src: string;
  title?: string;
  author?: string;
  rate?: number;
}

export default function BookCard({ src, title, author, rate }: BookCardProps) {
  return (
    <div className="border-0 bg-white rounded-xl shadow">
      <Image src={src} alt="Book Cover" className="w-full rounded-xl" />
      <div className="flex flex-col p-4 gap-1 rounded-b-xl">
        <h3 className="text-lg font-bold text-neutral-900">{title}</h3>
        <p className="text-md font-medium text-neutral-700">{author}</p>
        <div className="flex flex-row gap-0.5">
          <Image
            src="/icons/rate-star.png"
            alt="Rate Star"
            className="w-6 h-6"
          />
          <p className="text-md font-semibold text-neutral-950">{rate}</p>
        </div>
      </div>
    </div>
  );
}
