import { AngleRightIcon } from "@/assets/angle-right";
import { CheckCircleIcon } from "@/assets/check-circle";
import { Button } from "@/components/button";
import { cn } from "@/utils/cn";
import { useState } from "react";
import type { Industry } from "../types";

const industries: Industry[] = [
  "E-commerce",
  "Marketplace",
  "Hospitality",
  "SaaS",
  "Healthcare",
  "Education",
];

type ChooseBusinessProps = {
  chooseIndustry: (industry: Industry) => void;
  backward: () => void;
};

export const IndustryInformation: React.FC<ChooseBusinessProps> = ({
  chooseIndustry,
  backward,
}) => {
  const [selectedIndustry, setSelectedIndustry] = useState<Industry | null>(
    null,
  );

  return (
    <div>
      <h2 className="font-suwannaphum font-bold text-2xl mb-2">
        Industry Selection
      </h2>
      <span className="text-secondary-300">
        Choose the industry you'd like to explore. You'll see how a fictional
        Hotel, Casino, Hospital, or E-commerce business is set up and how Garcho
        AI can manage customer interactions.
      </span>

      <div className="flex flex-wrap gap-4 justify-center py-10 sm:grid grid-cols-3">
        {industries.map((industry) => {
          return (
            <Button
              disabled={selectedIndustry === industry}
              onClick={() => {
                setSelectedIndustry(industry);
              }}
              className={cn(
                "relative rounded-md border border-neutral-400 p-2 bg-neutral-700",
                "hover:border-primary-100",
                selectedIndustry === industry && "bg-primary-100",
                "focus-visible:outline-primary-100",
                "group",
                "transition-none",
              )}
              key={industry}
            >
              <span
                className={cn(
                  "block text-secondary-200 font-semibold bg-neutral-500 py-2 px-3 rounded-[4px] group-hover:text-primary-100",
                  selectedIndustry === industry &&
                    "text-neutral-700 bg-primary-100 group-hover:text-neutral-700",
                )}
              >
                {industry}
              </span>

              <span
                className={cn(
                  "absolute top-[4px] right-[4px] w-4 h-4 opacity-0 z-10",
                  selectedIndustry === industry && "opacity-100",
                )}
              >
                <CheckCircleIcon color="#030303" />
              </span>
            </Button>
          );
        })}
      </div>

      <div className="flex flex-wrap items-center gap-2 justify-between">
        <Button
          className={cn(
            "border border-secondary-400 text-secondary-300 py-3 px-8 rounded-md flex items-center gap-2 font-semibold",
            "hover:border-secondary-100 hover:text-secondary-100",
            "group",
          )}
          onClick={() => {
            backward();
          }}
        >
          <span
            className={cn(
              "transform rotate-180",
              "group-hover:-translate-x-1 transition-transform group-focus-visible:-translate-x-1",
              "group-hover:text-secondary-100",
            )}
          >
            <AngleRightIcon />
          </span>
          Back
        </Button>

        <Button
          disabled={!selectedIndustry}
          className={cn(
            "bg-primary-100 py-3 px-8 rounded-md text-neutral-700 flex items-center gap-2 font-semibold",
            "hover:bg-primary-200 disabled:bg-primary-100",
            "disabled:opacity-60",
            "group",
          )}
          onClick={() => {
            if (selectedIndustry) {
              chooseIndustry(selectedIndustry);
            }
          }}
        >
          Start Demo
          <span
            className={cn(
              "group-hover:translate-x-1 transition-transform group-focus-visible:translate-x-1",
            )}
          >
            <AngleRightIcon />
          </span>
        </Button>
      </div>
    </div>
  );
};
