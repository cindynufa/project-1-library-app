import { Button } from '../../ui/button';
import Image from '../../ui/image';
import ReviewCard from '../../ui/ReviewCard';
import SectionTitle from '../../ui/SectionTitle';

export default function DetailReview() {
  return (
    <section className="flex flex-col gap-4.5">
      <SectionTitle heading="Review" />

      {/* Review Books */}
      <div className="flex flex-row gap-3">
        <Image src="/icons/rate-star.png" alt="Rate Star" className="w-6 h-6" />
        <p className="text-md font-semibold text-neutral-950">
          4.9 (24 Ulasan)
        </p>
      </div>

      <div className="grid grid-cols-2 gap-5">
        {Array.from({ length: 6 }).map((_, index) => (
          <ReviewCard
            key={index}
            photo="/images/photo-profile.png"
            name="John Doe"
            date="25 August 2025, 13:38"
            comment="Lorem ipsum dolor sit amet consectetur. Pulvinar porttitor aliquam viverra nunc sed facilisis. Integer tristique nullam morbi mauris ante."
          />
        ))}
      </div>

      <div className="text-center">
        <Button>Load More</Button>
      </div>
    </section>
  );
}
