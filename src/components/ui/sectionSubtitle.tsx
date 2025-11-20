interface sectionSubtitleProps {
  heading: string;
  className: string;
}

export default function SectionSubtitle({
  heading,
  className,
}: sectionSubtitleProps) {
  return (
    <h3 className={`${className} font-bold text-neutral-950`}>{heading}</h3>
  );
}
