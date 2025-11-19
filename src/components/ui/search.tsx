import { Search } from 'lucide-react';
import { Input } from './input';

interface SearchProps {
  text: string;
}

export default function SearchBox({ text }: SearchProps) {
  return (
    <div className="flex w-125 h-11 px-4 py-2 border border-neutral-300 gap-1.5 rounded-full items-center">
      <Search className="w-3.75 h-3.75 text-neutral-600" />
      <Input
        type="text"
        placeholder={text}
        className="grow p-0 border-0 text-sm font-medium text-neutral-600"
      />
    </div>
  );
}
