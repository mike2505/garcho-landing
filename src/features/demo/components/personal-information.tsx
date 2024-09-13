import { AngleRightIcon } from "@/assets/angle-right";
import { Button } from "@/components/button";
import { cn } from "@/utils/cn";
import { useState } from "react";

type CompanyInformationProps = {
  choosePersonalInformation: (data: {
    firstName: string;
    lastName: string;
  }) => void;
};

export const PersonalInformation: React.FC<CompanyInformationProps> = ({
  choosePersonalInformation,
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <div className="">
      <h2 className="font-suwannaphum font-bold text-2xl mb-2">
        Introduction & Name Entry
      </h2>
      <span className="text-secondary-300">
        In this demo, you'll step into the role of a user at a fictional
        business. Let's start by entering your first and last name (real or
        fictional).
      </span>

      <div className="py-10 grid gap-4">
        <label htmlFor="first-name">
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full rounded-[4px] text-sm p-4 border border-neutral-100 bg-transparent focus-visible:outline-none focus-visible:border-primary-100"
            type="text"
            id="first-name"
            placeholder="First name"
          />
        </label>

        <label htmlFor="last-name">
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full rounded-[4px] text-sm p-4 border border-neutral-100 bg-transparent focus-visible:outline-none focus-visible:border-primary-100"
            type="text"
            id="last-name"
            placeholder="Last name"
          />
        </label>
      </div>

      <div className="flex justify-end">
        <Button
          disabled={!firstName || !lastName}
          className={cn(
            "bg-primary-100 py-3 px-8 rounded-md text-neutral-700 flex items-center gap-2 font-semibold",
            "hover:bg-primary-200 disabled:bg-primary-100",
            "disabled:opacity-60",
            "group",
          )}
          onClick={() => {
            choosePersonalInformation({ firstName, lastName });
          }}
        >
          Next
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
