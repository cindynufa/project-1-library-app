import { Search } from 'lucide-react';
import { Input } from './input';

interface SearchProps {
  text: string;
}

export default function SearchBox({ text }: SearchProps) {
  return (
    <div className="relative flex w-125 items-center">
      <Input
        type="text"
        placeholder={text}
        className="h-11 px-4 py-2 border border-neutral-300 rounded-full text-sm font-medium text-neutral-600"
      />
      <Search className="absolute w-3.75 h-3.75 text-neutral-600" />
    </div>
  );
}
