import DetailBook from './DetailBook';
import DetailRelated from './DetailRelated';
import DetailReview from './DetailReview';

export default function Detail() {
  return (
    <>
      <DetailBook />
      <div className="w-full border border-neutral-300" />
      <DetailReview />
      <div className="w-full border border-neutral-300" />
      <DetailRelated />
    </>
  );
}
