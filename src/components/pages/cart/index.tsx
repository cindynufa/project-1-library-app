import SectionTitle from '../../ui/SectionTitle';
import CartList from './CartList';
import CartSummary from './CartSummary';

export default function Cart() {
  return (
    <main className="flex flex-col px-25 gap-8">
      <SectionTitle heading="My Cart" />
      <div className="flex flex-row gap-10 justify-between">
        <CartList />
        <CartSummary />
      </div>
    </main>
  );
}
