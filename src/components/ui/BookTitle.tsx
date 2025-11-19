import type { ReactNode } from 'react';

interface BookTitleProps {
  category?: string;
  title: string;
  author: string;
  children?: ReactNode;
  titleClassName: string;
}

export default function BookTitle({
  category,
  title,
  author,
  children,
  titleClassName,
}: BookTitleProps) {
  return (
    <div className="flex flex-col gap-1">
      <h4 className="w-fit px-2 gap-2 border border-neutral-300 rounded-sm text-sm font-bold text-neutral-950">
        {category}
      </h4>
      <h3 className={`${titleClassName} text-neutral-950`}>
        {title}
      </h3>
      <p className="text-md font-semibold text-neutral-700">{author}</p>
      <div className="flex flex-row gap-0.5">{children}</div>
    </div>
  );
}
