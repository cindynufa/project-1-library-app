import CategoryFilterCategory from './CategoryFilterCategory';
import CategoryFilterRating from './CategoryFilterRating';

export default function CategoryFilter() {
  return (
    <section className="flex flex-col w-66.5 h-fit py-4 gap-2.5 border-0 bg-white rounded-xl shadow">
      <p className="pl-4 text-md font-bold text-neutral-950">FILTER</p>

      <CategoryFilterCategory />

      <div className="w-full border border-neutral-300" />

      <CategoryFilterRating />
    </section>
  );
}
