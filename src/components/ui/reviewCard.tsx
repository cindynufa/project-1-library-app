import Image from './image';

interface ReviewCardProps {
  photo: string;
  name: string;
  date: string;
  comment: string;
}

export default function ReviewCard({
  photo,
  name,
  date,
  comment,
}: ReviewCardProps) {
  return (
    <div className="flex flex-col p-4 gap-4 border-0 bg-white rounded-2xl shadow">
      <div className="flex flex-row gap-3">
        <Image src={photo} alt="Photo-Profile" className="w-16 h-16" />
        <div className="flex flex-col">
          <h5 className="text-lg font-bold text-neutral-950">{name}</h5>
          <p className="text-md font-medium text-neutral-950">{date}</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-0.5">
          {Array.from({ length: 5 }).map((_, index) => (
            <Image key={index} src="/icons/rate-star.png" alt="Rate Star" />
          ))}
        </div>
        <p className='text-md font-semibold text-neutral-950'>{comment}</p>
      </div>
    </div>
  );
}
