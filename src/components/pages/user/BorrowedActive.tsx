import { Dot } from 'lucide-react';
import BookTitle from '../../ui/bookTitle';
import Image from '../../ui/image';
import { Button } from '../../ui/button';

export default function BorrowedActive() {
  return (
    <div className="flex flex-col w-full p-5 gap-5 border-0 bg-white rounded-2xl shadow">
      {/* Status */}
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-3">
          <p className="text-md font-bold text-neutral-950">Status</p>
          <span className="px-2 py-0.5 gap-2 border-0 green-soft rounded-sm text-sm font-bold text-accent-green2">
            Active
          </span>
        </div>
        <div className="flex flex-row gap-3">
          <p className="text-md font-bold text-neutral-950">Due Date</p>
          <span className="px-2 py-0.5 gap-2 border-0 red-soft rounded-sm text-sm font-bold text-accent-red2">
            31 August 2025
          </span>
        </div>
      </div>

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
            <div className="flex flex-row gap-2">
              <p className="text-md font-bold text-neutral-950">29 Aug 2025</p>
              <Dot />
              <p className="text-md font-bold text-neutral-950">
                Duration 3 Days
              </p>
            </div>
          </div>
        </div>

        <Button variant={'borrowbook'} className="w-45.5 h-10 p-2 gap-2">
          Give Review
        </Button>
      </div>
    </div>
  );
}
