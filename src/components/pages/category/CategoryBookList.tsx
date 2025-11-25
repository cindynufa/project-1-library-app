import { Link } from 'react-router';
import BookCard from '../../ui/bookCard';

export default function CategoryBookList() {
  return (
    <section className="grid grid-cols-4 w-full gap-5 justify-between">
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index}>
          <Link to="/Detail">
            <BookCard
              src="/images/book-11.png"
              title="Book Name"
              author="Author name"
              rate={4.9}
            />
          </Link>
        </div>
      ))}
    </section>
  );
}
