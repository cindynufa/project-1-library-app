import { Search } from 'lucide-react';

interface SearchProps {
  text: string;
}

export default function SearchBox({ text }: SearchProps) {
  return (
    <div className="relative w-125 h-11 px-4 py-2 border border-neutral-300 gap-1.5 rounded-full items-center">
      <div className="absolute flex items-center gap-1.5">
        <Search className="w-3.75 h-3.75 text-neutral-600" />
        <input
          type="text"
          placeholder={text}
          className="text-sm font-medium text-neutral-600 border border-white"
        />
      </div>
    </div>
  );
}
