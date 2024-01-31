import Input from "src/components/input";
import SortableTable from "src/components/table";
import { useAllUsers } from "src/hooks/useAllUsers";
import { InputWrapper, NotFoundUserWrapper, Title } from "src/styles";
import { userTableColumns } from "src/utils/consts";

const UsersPage = () => {
  const {
    models: { sortedUsers, searchValue, sortedField, sortOrder },
    operations: { handleSearch, handleSort },
  } = useAllUsers();

  return (
    <>
      <Title>Users List</Title>
      <InputWrapper>
        <Input
          type="text"
          placeholder="Search users"
          value={searchValue}
          onChange={handleSearch}
        />
      </InputWrapper>

      {sortedUsers.length > 0 && (
        <SortableTable
          data={sortedUsers}
          columns={userTableColumns}
          onSort={handleSort}
          sortedField={sortedField}
          sortOrder={sortOrder}
          actionsContent={(user) => (
            <>
              <a
                href={`/user/${user.id}/posts`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View User Posts
              </a>
              <a
                href={`/user/${user.id}/albums`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View User Albums
              </a>
            </>
          )}
        />
      )}

      {searchValue && !sortedUsers.length && (
        <NotFoundUserWrapper>
          Not found data when searching user
        </NotFoundUserWrapper>
      )}
    </>
  );
};

export default UsersPage;
