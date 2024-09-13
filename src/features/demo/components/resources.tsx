import { CheckListIcon } from "@/assets/check-list";
import { MicrochipActiveIcon, MicrochipIcon } from "@/assets/microchip-icon";
import { TableIcon, TableInactiveIcon } from "@/assets/table-icon";
import { Button } from "@/components/button";
import { cn } from "@/utils/cn";
import type { IndustryType } from "../types";

type ResourcesProps = {
  resources: IndustryType["Resources"];
  selectResource: (resourceKey: string) => void;
  selectedResource: string | null;
};

export const Resources: React.FC<ResourcesProps> = ({
  resources,
  selectedResource,
  selectResource,
}) => {
  return (
    <div className="border-t border-t-neutral-400 pt-2 mt-2">
      <h3 className="font-medium text-secondary-400 text-sm flex items-center gap-2 p-2">
        <CheckListIcon /> Resources
      </h3>
      <div className="max-h-[300px] overflow-auto grid gap-2 p-2">
        {resources?.map((resource) => (
          <Button
            className={cn(
              "grid grid-cols-[auto_1fr] gap-2 items-center text-secondary-300 font-medium",
              "hover:text-secondary-100",
              selectedResource === resource.question &&
                "text-primary-100 hover:text-primary-100",
            )}
            key={resource.question}
            onClick={() => selectResource(resource.question)}
          >
            {selectedResource === resource.question ? (
              <MicrochipActiveIcon />
            ) : (
              <MicrochipIcon />
            )}
            <span className="text-start">{resource.question}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};
