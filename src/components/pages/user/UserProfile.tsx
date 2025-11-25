import { Button } from '../../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import Image from '../../ui/image';
import UserCard from '../../ui/UserCard';

export default function UserProfile() {
  return (
    <Card className="flex flex-col gap-6">
      <CardHeader>
        <CardTitle className="text-display-sm font-bold">Profile</CardTitle>
      </CardHeader>

      {/* User Profile */}
      <CardContent className="flex flex-col w-139.25 p-5 gap-6 border-0 bg-white rounded-2xl shadow">
        <Image
          src="/images/photo-profile.png"
          alt="Photo Profile"
          className="size-16"
        />
        <UserCard
          name="Johndoe"
          email="johndoe@email.com"
          phone="081234567890"
        />
        <Button variant={'borrowbook'} className="w-full h-11 p-2 gap-2">
          Update Profile
        </Button>
      </CardContent>
    </Card>
  );
}
