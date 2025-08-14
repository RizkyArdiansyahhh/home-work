import { useState } from "react";

type Users = {
  id: string;
  name: string;
  email: string;
  password: string;
  age: number;
  createdAt: Date;
};

export const useUser = () => {
  const [users, setUsers] = useState<Users[]>([]);

  const handleAddUser = (user: Users) => {
    setUsers((prev) => [...prev, user]);
  };

  return { users, handleAddUser };
};
