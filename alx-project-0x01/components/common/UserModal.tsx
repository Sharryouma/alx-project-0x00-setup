// components/common/UserModal.tsx
import { UserData, UserModalProps } from "@/interfaces";
import React, { useState } from "react";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [userData, setUserData] = useState<UserData>({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: ""
    },
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: ""
    }
  });

  // Add form handling logic similar to PostModal
  
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
        {/* Add form fields for user data */}
      </div>
    </div>
  );
};

export default UserModal;