import { Link } from 'react-router';
import Image from '../../ui/image';
import BookCategoryConst from '../../../constants/BookCategory';

export default function HomeCategory() {
  return (
    <section className="grid grid-cols-6 w-full gap-4 justify-between">
      {BookCategoryConst.map((bookCategory, index) => (
        <Link to={bookCategory.href} className="cursor-pointer">
          <div
            key={index}
            className="flex flex-col p-3 gap-3 border-0 border-white rounded-2xl shadow"
          >
            <div className="p-6.4 gap-6.4 border-0 bg-primary-100d rounded-xl">
              <Image
                src={bookCategory.src}
                alt="Category"
                className="w-51.2 h-51.2 mx-auto"
              />
            </div>
            <p className="text-md font-semibold text-neutral-950">
              {bookCategory.text}
            </p>
          </div>
        </Link>
      ))}
    </section>
  );
}
