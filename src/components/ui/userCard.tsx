interface UserCardProps {
  name: string;
  email: string;
  phone: string;
}

export default function UserCard({ name, email, phone }: UserCardProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row w-full justify-between">
        <p className="text-md font-medium text-neutral-950">Name</p>
        <span className="text-md font-bold text-neutral-950">{name}</span>
      </div>

      <div className="flex flex-row w-full justify-between">
        <p className="text-md font-medium text-neutral-950">Email</p>
        <span className="text-md font-bold text-neutral-950">{email}</span>
      </div>

      <div className="flex flex-row w-full justify-between">
        <p className="text-md font-medium text-neutral-950">Nomor Handphone</p>
        <span className="text-md font-bold text-neutral-950">{phone}</span>
      </div>
    </div>
  );
}
