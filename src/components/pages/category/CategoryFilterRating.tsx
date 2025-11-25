import CheckboxLabel from '../../ui/checkboxLabel';
import Image from '../../ui/image';

export default function CategoryFilterRating() {
  return (
    <div className="flex flex-col p-4 gap-2.5">
      <p className="text-lg font-bold text-neutral-950">Rating</p>
      <CheckboxLabel className="gap-2 items-center">
        <Image src="/icons/rate-star.png" alt="Rate Star" className="size-6" />
        <p className="text-md text-neutral-950">5</p>
      </CheckboxLabel>
      <CheckboxLabel className="gap-2 items-center">
        <Image src="/icons/rate-star.png" alt="Rate Star" className="size-6" />
        <p className="text-md text-neutral-950">4</p>
      </CheckboxLabel>
      <CheckboxLabel className="gap-2 items-center">
        <Image src="/icons/rate-star.png" alt="Rate Star" className="size-6" />
        <p className="text-md text-neutral-950">3</p>
      </CheckboxLabel>
      <CheckboxLabel className="gap-2 items-center">
        <Image src="/icons/rate-star.png" alt="Rate Star" className="size-6" />
        <p className="text-md text-neutral-950">2</p>
      </CheckboxLabel>
      <CheckboxLabel className="gap-2 items-center">
        <Image src="/icons/rate-star.png" alt="Rate Star" className="size-6" />
        <p className="text-md text-neutral-950">1</p>
      </CheckboxLabel>
    </div>
  );
}
