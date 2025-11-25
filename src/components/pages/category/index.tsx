import SectionTitle from '../../ui/SectionTitle';
import CategoryBookList from './CategoryBookList';
import CategoryFilter from './CategoryFilter';

export default function Category() {
  return (
    <main className="flex flex-col gap-8">
      <SectionTitle heading="Book List" />
      <div className="flex flex-row gap-5">
        <CategoryFilter />
        <CategoryBookList />
      </div>
    </main>
  );
}
