import BookTitle from '../../ui/BookTitle';
import Image from '../../ui/image';

export default function UserReviewCard() {
  return (
    <div className="flex flex-col w-full p-5 gap-5 border-0 bg-white rounded-2xl shadow">
      {/* Date */}
      <p className="text-md font-semibold text-neutral-950">
        25 August 2025, 13:38
      </p>
      <div className="w-full border border-neutral-300" />

      {/* Detail Borrowed Book */}
      <div className="flex flex-row gap-4 justify-between items-center">
        <div className="flex flex-row gap-4 items-center">
          <Image
            src="/images/book-8.png"
            alt="Book Cover"
            className="w-23 h-34.5"
          />
          <div className="flex flex-col gap-1">
            <BookTitle
              category="Category"
              title="Book Name"
              author="Author name"
              titleClassName="text-lg font-bold"
            />
          </div>
        </div>
      </div>

      <div className="w-full border border-neutral-300" />

      {/* Comment */}
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-0.5">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index}>
              <Image
                src="/icons/rate-star.png"
                alt="Rate Star"
                className="size-6"
              />
            </div>
          ))}
        </div>
        <p className="text-md font-semibold text-neutral-950">
          Lorem ipsum dolor sit amet consectetur. Pulvinar porttitor aliquam
          viverra nunc sed facilisis. Integer tristique nullam morbi mauris
          ante.
        </p>
      </div>
    </div>
  );
}
