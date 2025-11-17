import AuthorCard from '../../ui/authorCard';
import SectionTitle from '../../ui/sectionTitle';

export default function HomeAuthor() {
  return (
    <section className="flex flex-col gap-10">
      <div className="w-full border border-neutral-300" />
      <SectionTitle heading="Popular Authors" />
      <div className="flex flex-row w-full gap-5 justify-between">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index}>
            <AuthorCard name="Author name" text="5 books" />
          </div>
        ))}
      </div>
    </section>
  );
}
