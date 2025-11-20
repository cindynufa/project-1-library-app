import { Link } from 'react-router';
import { Button } from '../../ui/button';

export default function CartSummary() {
  return (
    <section className="flex flex-col w-79.5 h-fit p-5 gap-6 border-0 bg-white rounded-2xl shadow">
      <h4 className="text-xl font-bold text-neutral-950">Loan Summary</h4>
      <div className="flex flex-row justify-between">
        <p className="text-md font-medium text-neutral-950">Total Book</p>
        <span className="text-md font-bold text-neutral-950">2 Items</span>
      </div>

      <Link to="/Checkout">
        <Button variant={'borrowbook'} className="w-full">
          Borrow Book
        </Button>
      </Link>
    </section>
  );
}
