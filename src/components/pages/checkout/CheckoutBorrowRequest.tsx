import React from 'react';
import SectionSubtitle from '../../ui/sectionSubtitle';
import { Label } from '../../ui/label';
import { Input } from '../../ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '../../ui/popover';
import { Button } from '../../ui/button';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from '../../ui/calendar';
import { RadioGroup, RadioGroupItem } from '../../ui/radio-group';
import CheckboxLabel from '../../ui/checkboxLabel';
import { Link } from 'react-router';

function formatDate(date: Date | undefined) {
  if (!date) {
    return '';
  }

  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

function isValidDate(date: Date | undefined) {
  if (!date) {
    return false;
  }
  return !isNaN(date.getTime());
}

export default function CheckoutBorrowRequest() {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(
    new Date('2024-08-28')
  );
  const [month, setMonth] = React.useState<Date | undefined>(date);
  const [value, setValue] = React.useState(formatDate(date));

  return (
    <section className="flex flex-col w-full h-fit p-5 gap-6 border-0 bg-white rounded-3xl shadow">
      <SectionSubtitle
        heading="Complete Your Borrow Request"
        className="text-display-sm"
      />

      {/* Borrow Date */}
      <div className="flex flex-col gap-0.5">
        <Label htmlFor="date" className="text-sm font-bold text-neutral-950">
          Borrow Date
        </Label>
        <div className="relative w-full justify-between">
          <Input
            id="date"
            value={value}
            placeholder="28 Aug 2024"
            className="px-4 py-2 gap-2 bg-neutral-100 border-neutral-300 rounded-xl text-md font-semibold text-neutral-950"
            onChange={(e) => {
              const date = new Date(e.target.value);
              setValue(e.target.value);
              if (isValidDate(date)) {
                setDate(date);
                setMonth(date);
              }
            }}
            onKeyDown={(e) => {
              if (e.key === 'ArrowDown') {
                e.preventDefault();
                setOpen(true);
              }
            }}
          />
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                id="date-picker"
                variant={'ghost'}
                className="absolute size-5 z-50 top-1/5 right-2 rounded-full"
              >
                <CalendarIcon className="size-5" />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              align="end"
              alignOffset={-8}
              sideOffset={10}
              className=""
            >
              <Calendar
                mode="single"
                selected={date}
                captionLayout="dropdown"
                month={month}
                onMonthChange={setMonth}
                onSelect={(date) => {
                  setDate(date);
                  setValue(formatDate(date));
                  setOpen(false);
                }}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {/* Borrow Duration */}
      <div className="flex flex-col gap-3">
        <Label htmlFor="" className="text-sm font-bold text-neutral-950">
          Borrow Duration
        </Label>
        <RadioGroup defaultValue="3 Days">
          <div className="flex gap-3.75 items-center">
            <RadioGroupItem value="default" id="r1" />
            <Label
              htmlFor="r1"
              className="text-md font-semibold text-neutral-950"
            >
              3 Days
            </Label>
          </div>
          <div className="flex gap-3.75 items-center">
            <RadioGroupItem value="5days" id="r2" />
            <Label
              htmlFor="r2"
              className="text-md font-semibold text-neutral-950"
            >
              5 Days
            </Label>
          </div>
          <div className="flex gap-3.75 items-center">
            <RadioGroupItem value="10days" id="r3" />
            <Label
              htmlFor="r3"
              className="text-md font-semibold text-neutral-950"
            >
              10 Days
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Return Date */}
      <div className="flex flex-col p-4 gap-3 border-0 bg-primary-100 rounded-xl">
        <Label htmlFor="" className="text-sm font-bold text-neutral-950">
          Return Date
        </Label>
        <p className="text-md font-medium text-neutral-950">
          Please return the book no later than{' '}
          <span className="font-bold text-accent-red">31 August 2025</span>{' '}
        </p>
      </div>

      {/* Checkbox */}
      <div className="flex flex-col gap-2">
        <CheckboxLabel className="gap-4 text-md font-semibold text-neutral-950 items-center">
          I agree to return the book(s) before the due date.
        </CheckboxLabel>
        <CheckboxLabel className="gap-4 text-md font-semibold text-neutral-950 items-center">
          I accept the library borrowing policy.
        </CheckboxLabel>
      </div>

      {/* Button */}
      <div className="items-center">
        <Link to="/Success">
          <Button variant={'borrowbook'} className="w-full h-12 p-2 gap-2">
            Confirm & Borrow
          </Button>
        </Link>
      </div>
    </section>
  );
}
