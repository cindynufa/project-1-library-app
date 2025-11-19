import SectionTitle from '../../ui/sectionTitle';
import CartList from './CartList';
import CartSummary from './CartSummary';

export default function Cart() {
  return (
    <main className='flex flex-col gap-8 px-25 justify-between'>
      <SectionTitle heading="My Cart" />
      <div className='flex flex-row gap-10'>
      <CartList/>
      <CartSummary/>
      </div>
    </main>
  );
}
