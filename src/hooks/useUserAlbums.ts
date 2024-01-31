import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAlbumsByUserId } from "src/api/albums";
import { UserAlbumsResponse } from "src/api/albums/types";
import { OrderStateUnion } from "src/types";

export const useUserAlbums = () => {
  const { userId } = useParams();
  const [userAlbums, setUserAlbums] = useState<UserAlbumsResponse[]>([]);
  const [sortedField, setSortedField] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<OrderStateUnion>("asc");

  useEffect(() => {
    (async () => {
      try {
        if (!userId) return;
        const { data } = await getAlbumsByUserId(+userId);
        setUserAlbums(data);
      } catch (error) {
        console.log("error albums: ", error);
      }
    })();
  }, [userId]);

  const handleSort = (field: string) => {
    setSortedField(field);
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  const sortedUserAlbums = sortedField
    ? [...userAlbums].sort((a, b) => {
        const valueA = a[sortedField as keyof UserAlbumsResponse];
        const valueB = b[sortedField as keyof UserAlbumsResponse];

        if (valueA < valueB) return sortOrder === "asc" ? -1 : 1;
        if (valueA > valueB) return sortOrder === "asc" ? 1 : -1;
        return 0;
      })
    : userAlbums;

  return {
    models: {
      sortedUserAlbums,
      sortedField,
      sortOrder,
    },
    operations: {
      handleSort,
    },
  };
};
