import { DataTableIcon } from "@/assets/data-table-icon";
import { TableHeaderIcon } from "@/assets/table-icon";
import { cn } from "@/utils/cn";
import type { DemoInformation, Industry } from "../types";

type TableProps = {
  table: {
    title: string;
    description: string;
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    data: { [key: string]: any }[];
  };
  info: DemoInformation;
};

export const Table: React.FC<TableProps> = ({
  table,
  info: { industry, firstName, lastName },
}) => {
  const headers = Object.keys(table.data[0]);

  return (
    <div className="border border-neutral-400 border-t-transparent lg:border-none">
      <div className="p-3 border-b border-neutral-400">
        <h2 className="font-semibold text-sm flex items-center gap-2 mb-1">
          <TableHeaderIcon /> {industry}
        </h2>
        <p className="text-xs text-secondary-300">{table.description}</p>
      </div>
      <div className="bg-neutral-700 h-full">
        <div className="flex items-center gap-2 py-2 px-4 bg-neutral-700 border-b-2 border-b-primary-100 w-fit">
          <DataTableIcon />
          <span className="font-500 text-sm">{table.title}</span>
        </div>

        <div className="grid">
          <div className="max-h-[350px] overflow-auto p-2">
            <table>
              <thead>
                <tr className="bg-neutral-700">
                  {headers.map((header) => (
                    <th
                      key={header}
                      className="py-2 px-3 border-2 border-neutral-400 font-semibold text-sm text-start"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.data.map((row, rowIndex) => (
                  <tr
                    key={rowIndex.toString()}
                    className={cn(
                      "border-2 border-neutral-400 bg-neutral-500 text-sm font-medium",
                      row.username === "Shopper123" && "text-primary-200",
                      row.Guest_Name === "BigWinner99" && "text-primary-200",
                      row.username === "Jane Doe" && "text-primary-200",
                      row.Phone_Number === "555-1234" && "text-primary-200",
                    )}
                  >
                    {headers.map((header) => (
                      <td
                        key={header}
                        className="py-1.5 px-3 border-2 truncate border-neutral-400"
                      >
                        {typeof row[header] === "boolean"
                          ? row[header].toString().toUpperCase()
                          : typeof row[header] === "string"
                            ? row[header]
                                .replace("$FIRSTNAME", firstName)
                                .replace("$LASTNAME", lastName)
                            : row[header]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
