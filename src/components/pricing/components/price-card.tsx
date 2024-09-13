import { CheckCircleIcon } from "@/assets/check-circle";
import { CheckIcon } from "@/assets/check-icon";
import { InfoIcon } from "@/assets/info-icon";
import { XIcon } from "@/assets/x-icon";
import { Button } from "@/components/button";
import { useModal } from "@/components/modal";
import { cn } from "@/utils/cn";
import type { Plan } from "./pricing";

type Props = {
  plan: Plan;
};

export const PriceCard: React.FC<Props> = ({ plan }) => {
  const { showModal } = useModal();

  return (
    <div
      className={cn(
        "h-fit border border-neutral-400 rounded-lg py-10 px-6 transition-all duration-300",
        "hover:border-primary-100",
        "group",
      )}
    >
      <div className="grid gap-6 pb-6 mb-6 border-b border-b-neutral-400">
        <h2
          className={cn(
            "text-3xl font-suwannaphum font-black text-secondary-300",
          )}
        >
          {plan.title}
        </h2>
        <div className="font-suwannaphum">
          <span className="text-2xl">$</span>
          <span className="font-black text-4xl">{plan.price}</span>
          <span className="font-workSans font-medium text-secondary-300 text-sm ml-2">
            {plan.price === "0" ? "/Lifetime" : "/Month"}
          </span>
        </div>

        <Button
          onClick={() => showModal()}
          className={cn(
            "border border-secondary-300 p-4 bg-neutral-700 rounded-md",
            "hover:bg-primary-100 hover:text-neutral-700",
            "group-hover:border-primary-100",
            "active:bg-primary-200",
            "transition-all duration-300",
          )}
          type="button"
        >
          Get started for free →
        </Button>
      </div>

      <div className="grid gap-5">
        <h3 className="font-bold">Includes</h3>
        {plan.features.map((feature) => (
          <div key={Math.random()} className="">
            <div className="flex items-center gap-2 text-secondary-300 mb-2 text-sm font-semibold">
              <span>
                {feature.included === true ? <CheckIcon /> : <XIcon />}
              </span>
              <span className="border-b border-b-neutral-400 py-1 text-sm border-dashed">
                {feature.title}
              </span>
              {/* <span>
                <InfoIcon />
              </span> */}
            </div>
            <div className="ml-6">
              <span className="text-sm text-secondary-100">
                {feature.description}
              </span>
            </div>
          </div>
        ))}

        {plan.addOns && (
          <div className="pt-6 border-t border-t-neutral-400 grid gap-3">
            <h3 className="font-bold text-secondary-300 mb-2">Add-ons:</h3>
            {plan?.addOns?.map((addOn) => {
              return (
                <div
                  key={Math.random()}
                  className="flex items-center gap-2 font-medium text-sm text-secondary-300"
                >
                  <CheckCircleIcon />
                  {addOn.title}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
