import { Search } from 'lucide-react';
import { Input } from './input';

interface SearchProps {
  text: string;
  desktop: boolean;
}

export default function SearchBox({ text, desktop }: SearchProps) {
  return (
    <>
      {desktop && (
        <div className="relative flex w-125 items-center">
          <Input
            type="text"
            className="h-11 px-4 py-2 border border-neutral-300 rounded-full lg:block hidden"
          />
          <div className="absolute flex flex-row left-4 gap-1 items-center">
            <Search className="lg:size-3.75 size-6 lg:text-neutral-600 text-neutral-950" />
            <p className="text-sm font-medium text-neutral-600 lg:block hidden">{text}</p>
          </div>
        </div>
      )}
    </>
  );
}
