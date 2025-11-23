import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import SearchBox from '../../ui/search';
import UserReviewCard from './UserReviewCard';

export default function UserReview() {
  return (
    <Card className="flex flex-col gap-6">
      <CardHeader>
        <CardTitle className="text-display-sm font-bold">Reviews</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <SearchBox text={'Search book'} />
        <div className="flex flex-col gap-6">
          {Array.from({ length: 3 }).map((_, index) => (
            <UserReviewCard key={index} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
