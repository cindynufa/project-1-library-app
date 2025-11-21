import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs';
import UserBorrowedList from './UserBorrowedList';
import UserProfile from './UserProfile';
import UserReview from './UserReview';

export default function User() {
  return (
    <main className="flex flex-col gap-6">
      <Tabs defaultValue="borrowedList" className="w-full">
        <TabsList className="flex flex-row w-139.25 h-14 p-2 gap-2 border-0 bg-neutral-100 rounded-2xl ">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="borrowedList">Borrowed List</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>

        {/* Main Content */}
        <TabsContent value="profile">
          <UserProfile />
        </TabsContent>
        <TabsContent value="borrowedList">
          <UserBorrowedList />
        </TabsContent>
        <TabsContent value="reviews">
          <UserReview />
        </TabsContent>
      </Tabs>
    </main>
  );
}
