import { Link } from 'react-router';
import BookCard from '../../ui/bookCard';
import { Button } from '../../ui/button';
import SectionTitle from '../../ui/sectionTitle';

export default function HomeRecommendation() {
  return (
    <section className="flex flex-col gap-10">
      <SectionTitle heading="Recommendation" />

      {/* Recommendation Books List */}
      <div className="grid grid-cols-5 w-full gap-5 justify-between">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index}>
            <Link to="/Detail">
              <BookCard title="Book Name" name="Author name" rate={4.9} />
            </Link>
          </div>
        ))}
      </div>
      <div className="text-center">
        <Button>Load More</Button>
      </div>
    </section>
  );
}
