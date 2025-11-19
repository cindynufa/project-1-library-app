import type { ReactNode } from 'react';
import { Checkbox } from './checkbox';
import { Label } from './label';

interface CheckboxLabelProps {
  children: ReactNode;
  className?: string;
}

export default function CheckboxLabel({
  children,
  className,
}: CheckboxLabelProps) {
  return (
    <div className={`${className} flex flex-row`}>
      <Checkbox className="size-5" />
      <Label className="text-md font-medium text-neutral-950">{children}</Label>
    </div>
  );
}
