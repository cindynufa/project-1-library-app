import SectionTitle from '../../ui/sectionTitle';
import CategoryBookList from './CategoryBookList';
import CategoryFilter from './CategoryFilter';

export default function Category() {
  return (
    <div className="flex flex-col gap-8">
      <SectionTitle heading="Book List" />
      <div className="flex flex-row gap-5">
        <CategoryFilter />
        <CategoryBookList />
      </div>
    </div>
  );
}
