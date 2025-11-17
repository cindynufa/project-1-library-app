import SocialMediaConst from '../../../constants/SocialMedia';
import Image from '../../ui/image';
import Logo from '../../ui/logo';

export default function Footer() {
  return (
    <footer className="flex flex-col w-full px-37.5 py-20 gap-10 bottom-0 border-t border-neutral-300 justify-between items-center">
      <div className="flex flex-col gap-5.5 items-center">
        <Logo />
        <p className="text-md font-semibold text-neutral-950">
          Discover inspiring stories & timeless knowledge, ready to borrow
          anytime. Explore online or visit our nearest library branch.
        </p>
      </div>
      <div className="flex flex-col gap-5 items-center">
        <p className="text-md font-bold text-neutral-950">
          Follow on Social Media
        </p>
        <div className="flex flex-row gap-3">
          {SocialMediaConst.map((socialMedia, index) => (
            <div
              key={index}
              className="w-10 h-10 border border-neutral-300 rounded-full"
            >
              <Image
                src={socialMedia.src}
                alt="Social Media"
                className="mx-auto translate-y-1/2"
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
