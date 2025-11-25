import CheckboxLabel from '../../ui/checkboxLabel';

export default function CategoryFilterCategory() {
  return (
    <div className="flex flex-col p-4 gap-2.5">
      <p className="text-lg font-bold text-neutral-950">Category</p>
      <CheckboxLabel className="gap-2 items-center font-medium">
        Fiction
      </CheckboxLabel>
      <CheckboxLabel className="gap-2 items-center font-medium">
        Non-fiction
      </CheckboxLabel>
      <CheckboxLabel className="gap-2 items-center font-medium">
        Self-Improve
      </CheckboxLabel>
      <CheckboxLabel className="gap-2 items-center font-medium">
        Finance
      </CheckboxLabel>
      <CheckboxLabel className="gap-2 items-center font-medium">
        Science
      </CheckboxLabel>
      <CheckboxLabel className="gap-2 items-center font-medium">
        Education
      </CheckboxLabel>
    </div>
  );
}
