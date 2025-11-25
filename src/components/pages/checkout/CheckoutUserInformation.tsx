import SectionSubtitle from '../../ui/SectionSubtitle';
import UserCard from '../../ui/UserCard';

export default function CheckoutUserInformation() {
  return (
    <section className="flex flex-col w-full gap-4">
      <SectionSubtitle heading="User Information" className="text-display-xs" />
      <UserCard name="Johndoe" email="johndoe@email.com" phone="081234567890" />
    </section>
  );
}
