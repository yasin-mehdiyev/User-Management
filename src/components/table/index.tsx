import ArrowDown from "src/assets/icons/arrowDown/ArrowDown";
import ArrowUp from "src/assets/icons/arrowUp/ArrowUp";
import { TableWrapper } from "src/styles";

type TableColumn = {
  key: string;
  label: string;
};

export type SortableTableProps<T> = {
  data: T[];
  columns: TableColumn[];
  onSort: (field: string) => void;
  sortedField: string | null;
  sortOrder: "asc" | "desc";
  actionsContent?: (user: T) => React.ReactNode;
};

const SortableTable = <T extends Record<string, any>>({
  data,
  columns,
  onSort,
  sortedField,
  sortOrder,
  actionsContent,
}: SortableTableProps<T>) => {
  return (
    <TableWrapper>
      <table>
        <thead>
          <tr>
            {columns.map((column) => {
              return (
                <th
                  key={column.key}
                  onClick={() => column.key !== "actions" && onSort(column.key)}
                >
                  {column.label}{" "}
                  {sortedField === column.key &&
                    column.key !== "actions" &&
                    (sortOrder === "asc" ? <ArrowUp /> : <ArrowDown />)}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              {columns.map((column) => {
                if (column.key === "actions" && actionsContent) {
                  return (
                    <td
                      key={column.key}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "10px",
                      }}
                    >
                      {actionsContent && actionsContent(item)}
                    </td>
                  );
                }
                return <td key={column.key}>{item[column.key]}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </TableWrapper>
  );
};

export default SortableTable;
