import { Link } from 'react-router';
import BookCard from '../../ui/bookCard';
import SectionTitle from '../../ui/sectionTitle';

export default function DetailRelated() {
  return (
    <section className="flex flex-col gap-10">
      <SectionTitle heading="Related Book" />

      {/* Related Books List */}
      <div className="flex flex-row w-full gap-5 justify-between">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index}>
            <Link to="/Detail">
              <BookCard src='/images/book-11.png' title="Book Name" author="Author name" rate={4.9} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
