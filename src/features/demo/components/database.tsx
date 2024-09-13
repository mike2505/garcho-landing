import { useState } from "react";
import { data } from "../data";
import type { DemoInformation, Industry } from "../types";
import { ResourcePage } from "./resource-page";
import { Resources } from "./resources";
import { Table } from "./table";
import { Tables } from "./tables";

type DatabaseProps = {
  info: DemoInformation;
};

export const Database: React.FC<DatabaseProps> = ({ info }) => {
  const selectedIndustry = data[info.industry];
  type SelectedIndustry = typeof selectedIndustry;

  const tables = (
    Object.keys(selectedIndustry) as Array<keyof SelectedIndustry>
  ).filter(
    (key) => key !== "Resources" && key !== "apiKey" && key !== "agentId",
  );

  const [selectedTable, setSelectedTable] = useState<string | null>(tables[0]);
  const [selectedResource, setSelectedResource] = useState<string | null>(null);

  const selectTable = (tableKey: string) => {
    setSelectedResource(null);
    setSelectedTable(tableKey);
  };

  const selectResource = (resourceKey: string) => {
    setSelectedTable(null);
    setSelectedResource(resourceKey);
  };

  const resource = selectedIndustry.Resources.find(
    (resource) => resource.question === selectedResource,
  );

  const table =
    selectedIndustry && selectedTable !== null
      ? // @ts-ignore
        selectedIndustry[selectedTable]
      : null;
  return (
    <div className="border border-neutral-400 rounded-lg grid lg:grid-cols-[1fr_2fr] overflow-hidden">
      <div className="border border-neutral-400 rounded-md lg:border-none">
        <div className="lg:border-r border-r-neutral-400 h-full p-2">
          {tables && (
            <Tables
              tables={tables as []}
              selectedTable={selectedTable}
              selectTable={selectTable}
            />
          )}

          <Resources
            resources={selectedIndustry.Resources}
            selectResource={selectResource}
            selectedResource={selectedResource}
          />
        </div>
      </div>
      <div className="overflow-hidden grid">
        {selectedResource && resource && <ResourcePage resource={resource} />}
        {table && <Table table={table} info={info} />}
      </div>
    </div>
  );
};
