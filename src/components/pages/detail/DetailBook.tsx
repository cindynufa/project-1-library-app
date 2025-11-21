import { Share2 } from 'lucide-react';
import { Button } from '../../ui/button';
import DetailNav from './DetailNav';
import BookInfo from '../../ui/bookInfo';
import BookDescription from '../../ui/bookDescription';
import BookTitle from '../../ui/bookTitle';
import Image from '../../ui/image';
import { Link } from 'react-router';

export default function DetailBook() {
  return (
    <section className="flex flex-col gap-6">
      <DetailNav />

      {/* Detail Book */}
      <div className="flex flex-row gap-9">
        <div className="w-fit border-6 border-neutral-200">
          <Image src="/images/book-11.png" alt="Book Cover" />
        </div>

        <div className="flex flex-col w-full h-fit gap-5">
          <div className="flex flex-col gap-5.5">
            <BookTitle
              category="Business & Economics"
              title="Psychology of Money"
              author="Morgan Housel"
              titleClassName="text-display-sm font-bold"
            >
              <Image
                src="/icons/rate-star.png"
                alt="Rate Star"
                className="w-6 h-6"
              />
              <p className="text-md font-bold text-neutral-900">4.9</p>
            </BookTitle>

            <div className="flex flex-row gap-5 items-center">
              <BookInfo value={320} text="Page" />
              <div className="w-16.5 h-0 -rotate-90 border border-neutral-300" />
              <BookInfo value={212} text="Rating" />
              <div className="w-16.5 h-0 -rotate-90 border border-neutral-300" />
              <BookInfo value={179} text="Review" />
            </div>
          </div>

          <div className="w-3/4 border border-neutral-300" />

          <BookDescription description="The Psychology of Money” explores how emotions, biases, and human behavior shape the way we think about money, investing, and financial decisions. Morgan Housel shares timeless lessons on wealth, greed, and happiness, showing that financial success is not about knowledge, but about behavior." />

          <div className="flex flex-row gap-3 items-center">
            <Button>Add to Cart</Button>
            <Link to="/Checkout">
              <Button variant={'borrowbook'}>Borrow Book</Button>
            </Link>
            <Button variant={'universal'}>
              <Share2 className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
