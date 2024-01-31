import { useEffect, useState } from "react";
import { getAllUsers } from "src/api/users";
import { UserResponse } from "src/api/users/types";
import { OrderStateUnion } from "src/types";

export const useAllUsers = () => {
  const [users, setUsers] = useState<UserResponse[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [sortedField, setSortedField] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<OrderStateUnion>("asc");

  useEffect(() => {
    (async () => {
      try {
        const { data: usersResponse } = await getAllUsers();
        setUsers(usersResponse);
        handleSort("name");
      } catch (error) {
        console.log("error users: ", error);
      }
    })();
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSort = (field: string) => {
    setSortedField(field);
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      user.username.toLowerCase().includes(searchValue.toLowerCase()) ||
      user.email.toLowerCase().includes(searchValue.toLowerCase())
  );

  const sortedUsers = sortedField
    ? [...filteredUsers].sort((a, b) => {
        const valueA = a[sortedField as keyof UserResponse];
        const valueB = b[sortedField as keyof UserResponse];

        if (valueA < valueB) return sortOrder === "asc" ? -1 : 1;
        if (valueA > valueB) return sortOrder === "asc" ? 1 : -1;
        return 0;
      })
    : filteredUsers;

  return {
    models: {
      sortedUsers,
      searchValue,
      sortedField,
      sortOrder,
    },
    operations: {
      handleSearch,
      handleSort,
    },
  };
};
