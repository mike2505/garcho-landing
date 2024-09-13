import { TableIcon, TableInactiveIcon } from "@/assets/table-icon";
import { Button } from "@/components/button";
import { cn } from "@/utils/cn";

type TablesProps = {
  tables: [];
  selectedTable: string | null;
  selectTable: (tableKey: string) => void;
};

export const Tables: React.FC<TablesProps> = ({
  tables,
  selectedTable,
  selectTable,
}) => {
  return (
    <div>
      <h3 className="font-medium text-secondary-400 text-sm">TABLES</h3>
      <div className="max-h-[300px] overflow-auto grid gap-2 p-2">
        {tables?.map((tableKey) => (
          <Button
            className={cn(
              "w-fit flex items-center truncate gap-2 text-secondary-300 font-medium",
              "hover:text-secondary-100",
              selectedTable === tableKey &&
                "text-primary-100 hover:text-primary-100",
            )}
            key={tableKey}
            onClick={() => selectTable(tableKey)}
          >
            {selectedTable === tableKey ? <TableIcon /> : <TableInactiveIcon />}
            <span className="truncate">{tableKey}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};
