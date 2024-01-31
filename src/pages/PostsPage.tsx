import SortableTable from "src/components/table";
import { useUserPosts } from "src/hooks/useUserPosts";
import { Title } from "src/styles";
import { userPostTableColumns } from "src/utils/consts";

const PostsPage = () => {
  const {
    models: { sortedUserPosts, sortedField, sortOrder },
    operations: { handleSort },
  } = useUserPosts();

  return (
    <>
      <Title>User Posts List</Title>
      {sortedUserPosts.length > 0 && (
        <SortableTable
          data={sortedUserPosts}
          columns={userPostTableColumns}
          onSort={handleSort}
          sortedField={sortedField}
          sortOrder={sortOrder}
        />
      )}
    </>
  );
};

export default PostsPage;
