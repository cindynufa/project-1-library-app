import { Link } from 'react-router';
import { Button } from '../../ui/button';
import Image from '../../ui/image';
import SectionSubtitle from '../../ui/SectionSubtitle';

export default function Success() {
  return (
    <section className="flex flex-col w-full mx-auto gap-8 items-center">
      <Image
        src="/icons/success.png"
        alt="Icon Success"
        className="size-142.38"
      />

      <div className="flex flex-col gap-2 text-center">
        <SectionSubtitle
          heading="Borrowing Successful!"
          className="text-display-sm"
        />
        <p className="text-lg font-semibold text-neutral-950">
          Your book has been successfully borrowed. Please return it by{' '}
          <span className="text-accent-red">31 August 2025</span>{' '}
        </p>
      </div>

      <Link to="/borrowedList">
        <Button variant={'borrowbook'} className="w-71.5 h-12 p-2 gap-2">
          See Borrowed List
        </Button>
      </Link>
    </section>
  );
}
