// components/common/UserCard.tsx
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, phone, company, website }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base mb-2">
          <span className="font-semibold">Email:</span> {email}
        </p>
        <p className="text-gray-700 text-base mb-2">
          <span className="font-semibold">Phone:</span> {phone}
        </p>
        <p className="text-gray-700 text-base mb-2">
          <span className="font-semibold">Website:</span> {website}
        </p>
        <p className="text-gray-700 text-base">
          <span className="font-semibold">Company:</span> {company.name}
        </p>
      </div>
    </div>
  );
};

export default UserCard;