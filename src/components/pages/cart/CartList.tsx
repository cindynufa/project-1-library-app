import BookTitle from '../../ui/BookTitle';
import { Checkbox } from '../../ui/checkbox';
import CheckboxLabel from '../../ui/checkboxLabel';
import Image from '../../ui/image';

export default function CartList() {
  return (
    <section className="flex flex-col w-full gap-6">
      <CheckboxLabel className="gap-4 items-center font-semibold">
        Select All
      </CheckboxLabel>
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="flex flex-col gap-6">
          <div className="flex flex-row gap-4">
            <Checkbox />
            <Image
              src="/images/book-8.png"
              alt="Book Cover"
              className="w-23 h-34.5"
            />
            <div className="flex items-center">
              <BookTitle
                category="Category"
                title="Book Name"
                author="Author name"
                titleClassName="text-lg font-bold"
              />
            </div>
          </div>
          <div className="w-full border-b border-neutral-300" />
        </div>
      ))}
    </section>
  );
}
