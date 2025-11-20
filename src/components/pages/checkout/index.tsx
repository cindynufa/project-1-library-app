import SectionTitle from '../../ui/sectionTitle';
import CheckoutBookList from './CheckoutBookList';
import CheckoutBorrowRequest from './CheckoutBorrowRequest';
import CheckoutUserInformation from './CheckoutUserInformation';

export default function Checkout() {
  return (
    <main className="flex flex-col px-25 gap-8">
      <SectionTitle heading="Checkout" />

      {/* Main Content */}
      <div className="flex flex-row gap-14.5 justify-between">
        {/* User Information - Book List */}
        <div className="flex flex-col w-full h-fit gap-8">
          <CheckoutUserInformation />
          <div className="w-full border border-neutral-300" />
          <CheckoutBookList/>
        </div>

        {/* Borrow Box Detail */}
        <CheckoutBorrowRequest/>
      </div>
    </main>
  );
}
