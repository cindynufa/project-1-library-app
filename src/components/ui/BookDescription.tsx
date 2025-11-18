interface BookDescriptionProps {
  description: string;
}

export default function BookDescription({
  description,
}: BookDescriptionProps) {
  return (
    <div className="flex flex-col gap-1">
      <h5 className="tex-xl font-bold text-neutral-950">Description</h5>
      <p className="text-md font-medium text-neutral-950">{description}</p>
    </div>
  );
}
