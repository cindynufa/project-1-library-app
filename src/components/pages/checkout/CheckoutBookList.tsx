import BookTitle from '../../ui/bookTitle';
import Image from '../../ui/image';
import SectionSubtitle from '../../ui/sectionSubtitle';

export default function CheckoutBookList() {
  return (
    <section className="flex flex-col gap-4">
      <SectionSubtitle heading="Book List" className="text-display-xs" />

      {/* Book list */}
      <div className="flex flex-col w-full gap-4">
        {Array.from({ length: 2 }).map((_, index) => (
          <div key={index} className="flex flex-col gap-6">
            <div className="flex flex-row gap-4">
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
          </div>
        ))}
      </div>
    </section>
  );
}
