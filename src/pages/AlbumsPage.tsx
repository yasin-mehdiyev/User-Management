import SortableTable from "src/components/table";
import { useUserAlbums } from "src/hooks/useUserAlbums";
import { Title } from "src/styles";
import { userAlbumTableColumns } from "src/utils/consts";

const AlbumsPage = () => {
  const {
    models: { sortedUserAlbums, sortedField, sortOrder },
    operations: { handleSort },
  } = useUserAlbums();

  return (
    <>
      <Title>User Albums List</Title>
      {sortedUserAlbums.length > 0 && (
        <SortableTable
          data={sortedUserAlbums}
          columns={userAlbumTableColumns}
          onSort={handleSort}
          sortedField={sortedField}
          sortOrder={sortOrder}
        />
      )}
    </>
  );
};

export default AlbumsPage;
