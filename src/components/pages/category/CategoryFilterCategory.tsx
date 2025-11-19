import CheckboxLabel from '../../ui/checkboxLabel';

export default function CategoryFilterCategory() {
  return (
    <div className='flex flex-col p-4 gap-2.5'>
      <p className="text-lg font-bold text-neutral-950">Category</p>
      <CheckboxLabel className="gap-2 items-center">Fiction</CheckboxLabel>
      <CheckboxLabel className="gap-2 items-center">Non-fiction</CheckboxLabel>
      <CheckboxLabel className="gap-2 items-center">Self-Improve</CheckboxLabel>
      <CheckboxLabel className="gap-2 items-center">Finance</CheckboxLabel>
      <CheckboxLabel className="gap-2 items-center">Science</CheckboxLabel>
      <CheckboxLabel className="gap-2 items-center">Education</CheckboxLabel>
    </div>
  );
}
