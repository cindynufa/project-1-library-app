import { Link } from 'react-router';
import { Button } from '../../ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../ui/dialog';
import Image from '../../ui/image';
import { Textarea } from '../../ui/textarea';

export default function ReviewPopup() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'borrowbook'} className="w-45.5 h-10 p-2 gap-2">
          Give Review
        </Button>
      </DialogTrigger>

      <DialogContent className="flex flex-col w-109.75 p-6 gap-6 bg-white rounded-2xl">
        <DialogHeader className="w-full justify-between">
          <DialogTitle className="text-display-xl font-bold text-neutral-950">
            Give Review
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-5 items-center">
          <div className="flex flex-col gap-3 items-center">
            <p className="text-md font-bold text-neutral-950">Give Rating</p>
            <div className="flex flex-row gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index}>
                  <Image
                    src="/icons/rate-star.png"
                    alt="Rate Star"
                    className="size-12.25"
                  />
                </div>
              ))}
            </div>
          </div>
          <Textarea
            placeholder="Please share your thoughts about this book"
            rows={5}
            className="w-full h-58.75 px-3 py-2 gap-2 border border-neutral-300 rounded-xl"
          />
          <DialogFooter className="w-full items-center">
            <Link to="/borrowedList" className="w-full">
              <Button variant={'borrowbook'} className="w-full h-12">
                Send
              </Button>
            </Link>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}
