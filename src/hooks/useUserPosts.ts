import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostsByUserId } from "src/api/posts";
import { UserPostsResponse } from "src/api/posts/types";
import { OrderStateUnion } from "src/types";

export const useUserPosts = () => {
  const { userId } = useParams();
  const [userPosts, setUserPosts] = useState<UserPostsResponse[]>([]);
  const [sortedField, setSortedField] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<OrderStateUnion>("asc");

  useEffect(() => {
    (async () => {
      try {
        if (!userId) return;
        const { data } = await getPostsByUserId(+userId);
        setUserPosts(data);
      } catch (error) {
        console.log("error posts: ", error);
      }
    })();
  }, [userId]);

  const handleSort = (field: string) => {
    setSortedField(field);
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  const sortedUserPosts = sortedField
    ? [...userPosts].sort((a, b) => {
        const valueA = a[sortedField as keyof UserPostsResponse];
        const valueB = b[sortedField as keyof UserPostsResponse];

        if (valueA < valueB) return sortOrder === "asc" ? -1 : 1;
        if (valueA > valueB) return sortOrder === "asc" ? 1 : -1;
        return 0;
      })
    : userPosts;

  return {
    models: {
      sortedUserPosts,
      sortedField,
      sortOrder,
    },
    operations: {
      handleSort,
    },
  };
};
