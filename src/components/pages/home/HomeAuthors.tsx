import { Link } from 'react-router';
import AuthorCard from '../../ui/authorCard';
import SectionTitle from '../../ui/sectionTitle';

export default function HomeAuthor() {
  return (
    <section className="flex flex-col gap-10">
      {/* Popular Author */}
      <div className="w-full border border-neutral-300" />
      <SectionTitle heading="Popular Authors" />
      <div className="flex flex-row w-full gap-5 justify-between">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index}>
            <Link to="/Author">
              <AuthorCard name="Author name" text="5 books" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
