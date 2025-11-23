import { Button } from '../../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import SearchBox from '../../ui/search';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs';
import BorrowedActive from './BorrowedActive';
import BorrowedOverdue from './BorrowedOverdue';
import BorrowedReturned from './BorrowedReturned';

export default function UserBorrowedList() {
  return (
    <Card className="flex flex-col gap-6">
      <CardHeader>
        <CardTitle className="text-display-sm font-bold">
          Borrowed List
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <SearchBox text={'Search book'} />

        {/* Sub-tabs Card Borrowed */}
        <Tabs defaultValue="all" className="flex flex-col gap-6">
          <TabsList className="flex flex-row gap-3 -ml-2 bg-white">
            <TabsTrigger
              value="all"
              className="data-[state=active]:text-primary-100c"
            >
              <Button variant={'universal'}>All</Button>
            </TabsTrigger>
            <TabsTrigger
              value="active"
              className="data-[state=active]:text-primary-100c"
            >
              <Button variant={'universal'}>Active</Button>
            </TabsTrigger>
            <TabsTrigger
              value="returned"
              className="data-[state=active]:text-primary-100c"
            >
              <Button variant={'universal'}>Returned</Button>
            </TabsTrigger>
            <TabsTrigger
              value="overdue"
              className="data-[state=active]:text-primary-100c"
            >
              <Button variant={'universal'}>Overdue</Button>
            </TabsTrigger>
          </TabsList>

          {/* Card Borrowed */}
          <TabsContent value="all" className='flex flex-col gap-6'>
            <BorrowedActive />
            <BorrowedReturned />
            <BorrowedOverdue />
          </TabsContent>
          <TabsContent value="active">
            <BorrowedActive />
          </TabsContent>
          <TabsContent value="returned">
            <BorrowedReturned />
          </TabsContent>
          <TabsContent value="overdue">
            <BorrowedOverdue />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
