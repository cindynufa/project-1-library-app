interface SectionTitleProps {
  heading: string;
}

export default function SectionTitle({ heading }: SectionTitleProps) {
  return (
    <h2 className="text-display-lg font-bold text-neutral-950">{heading}</h2>
  );
}
