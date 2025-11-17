import Image from './image';

interface AuthorCardProps {
  name: string;
  text: string;
}

export default function AuthorCard({ name, text }: AuthorCardProps) {
  return (
    <div className="flex flex-row p-4 gap-4 border-0 bg-white rounded-xl shadow">
      <Image
        src="/images/photo-profile.png"
        alt="Author Photo"
        className="w-20.25 h-20.25"
      />
      <div className="flex flex-col gap-0.5 justify-center">
        <h3 className="text-lg font-bold text-neutral-900">{name}</h3>
        <div className="flex flex-row gap-1.5">
          <Image src="/icons/book.png" alt="Book Icon" className="w-6 h-6" />
          <p className="text-md font-medium text-neutral-950">{text}</p>
        </div>
      </div>
    </div>
  );
}
