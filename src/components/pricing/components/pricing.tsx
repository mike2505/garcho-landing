"use client";
import { PriceCard } from "./price-card";

export type Plan = {
  title: string;
  price: string;
  features: Feature[];
  addOns?: AddOn[];
};

type Feature = {
  title: string;
  description: string;
  info: string;
  included: boolean;
};

type AddOn = {
  title: string;
  info: string;
};

const plans: Plan[] = [
  {
    title: "Free Trial",
    price: "0",

    features: [
      {
        title: "Agents",
        description: "1",
        info: "Limited to 1 Agent",
        included: true,
      },

      {
        title: "Functions",
        description: "1 Basic bot function",
        info: "Limited to 1 Basic Bot Function",
        included: true,
      },

      {
        title: "Conversations",
        description: "Up to 25 lifetime conversations",
        info: "Limited to 25 Conversations",
        included: true,
      },

      {
        title: "Messages",
        description: "Up to 100 lifetime messages",
        info: "Limited to 100 Messages",
        included: true,
      },

      {
        title: "Language Model",
        description: "Default support",
        info: "Default Language Model",
        included: true,
      },

      {
        title: "Support",
        description: "Basic Support",
        info: "Standard Support",
        included: true,
      },

      {
        title: "API integration",
        description: "None",
        info: "not included in the free plan",
        included: false,
      },

      {
        title: "Customization",
        description: "None",
        info: "Not included in the free plan",
        included: false,
      },
    ],
  },
  {
    title: "Basic Plan",
    price: "199",

    features: [
      {
        title: "Agents",
        description: "1",
        info: "Limited to 1 Agents",
        included: true,
      },

      {
        title: "Functions",
        description: "3 Basic Bot Functions",
        info: "Limited to 3 Basic Bot Functions",
        included: true,
      },

      {
        title: "Conversations",
        description: "Limited to 300 conversations per month",
        info: "Limited to 300 Conversations",
        included: true,
      },

      {
        title: "Messages",
        description: "Up to 2,500 per month",
        info: "Limited to 2,500 Response Messages",
        included: true,
      },

      {
        title: "Language Model",
        description: "Default",
        info: "Default Language Model",
        included: true,
      },

      {
        title: "Support",
        description: "Standard Support",
        info: "Standard Support",
        included: true,
      },

      {
        title: "API integration",
        description: "Default",
        info: "Default API Integration",
        included: true,
      },

      {
        title: "Customization",
        description: "Basic Branding Options",
        info: "Basic Branding Options",
        included: true,
      },
    ],

    addOns: [
      { title: "$99 per agent/month.", info: "Additional agents" },
      {
        title: "Additional 50 conversations $49 per month",
        info: "Additional 50 conversations $49 per month",
      },
      {
        title: "Additional 100 messages $29 per month",
        info: "Additional 100 messages $29 per month",
      },
      {
        title: "Advanced analytics $199 per month",
        info: "Advanced analytics $199 per month",
      },
    ],
  },

  {
    title: "Advanced Plan",
    price: "999",

    features: [
      {
        title: "Agents",
        description: "Up to 3",
        info: "Limited to 5 Agents",
        included: true,
      },

      {
        title: "Functions",
        description: "15 Advanced bot functions with function-calling",
        info: "Limited to 15 Basic Bot Functions",
        included: true,
      },

      {
        title: "Conversations",
        description: "Up to 1,000 per month",
        info: "Limited to 1,000 Conversations",
        included: true,
      },

      {
        title: "Messages",
        description: "Up to 10,000 per month",
        info: "Limited to 10,000 Response Messages",
        included: true,
      },

      {
        title: "Language Model",
        description: "Fine-tuned",
        info: "Fine-tuned Language Model",
        included: true,
      },

      {
        title: "Support",
        description: "Priority Support",
        info: "Priority Support",
        included: true,
      },

      {
        title: "API integration",
        description: "Default",
        info: "Default API Integration",
        included: true,
      },

      {
        title: "Customization",
        description: "Advanced Branding Options",
        info: "Advanced Branding Options",
        included: true,
      },

      {
        title: "Analytics",
        description: "Basic usage Analytics",
        info: "Basic Analytics",
        included: true,
      },
    ],

    addOns: [
      { title: "$99 per agent/month.", info: "Additional agents" },
      {
        title: "Additional 50 conversations $49 per month",
        info: "Additional 50 conversations $49 per month",
      },

      {
        title: "Additional 100 messages $29 per month",
        info: "Additional 100 messages $29 per month",
      },

      {
        title: "Advanced analytics $199 per month",
        info: "Advanced analytics $199 per month",
      },
    ],
  },

  {
    title: "Enterprise Plan",
    price: "2499",

    features: [
      {
        title: "Agents",
        description: "Unlimited",
        info: "Unlimited Agents",
        included: true,
      },

      {
        title: "Functions",
        description: "Unlimited functions with custom integration",
        info: "Unlimited Bot Functions",
        included: true,
      },

      {
        title: "Conversations",
        description: "Unlimited",
        info: "Unlimited Conversations",
        included: true,
      },

      {
        title: "Messages",
        description: "Unlimited",
        info: "Unlimited Response Messages",
        included: true,
      },

      {
        title: "Language Model",
        description: "Custom fine-tuning",
        info: "Fine-tuned Language Model",
        included: true,
      },

      {
        title: "Support",
        description: "Dedicated account manager 24/7",
        info: "Priority Support",
        included: true,
      },

      {
        title: "API integration",
        description: "Custom integration",
        info: "Custom API Integration",
        included: true,
      },

      {
        title: "Customization",
        description: "Ful white-labeling and custom branding options",
        info: "Advanced Branding Options",
        included: true,
      },

      {
        title: "Analytics",
        description: "Advanced usage analytics and reporting",
        info: "Advanced Analytics",
        included: true,
      },

      {
        title: "Security",
        description:
          "Enhanced security features including custom compliance options",
        info: "Enhanced Security",
        included: true,
      },

      {
        title: "SLA",
        description: "Custom Service Level Agreement",
        info: "Custom SLA",
        included: true,
      },
    ],
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="px-4 py-40 w-full">
      <span className="text-primary-100 font-bold text-sm border border-primary-100 rounded-sm py-1.5 px-4">
        Pricing
      </span>
      <h3 className="font-suwannaphum font-bold text-secondary-300 text-2xl mt-10">
        Find the plan that fits your needs
      </h3>

      <h2 className="text-3xl lg:text-5xl font-black mt-3 mb-20 font-suwannaphum">
        Compare features
      </h2>

      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {plans.map((plan) => {
          return <PriceCard key={plan.title} plan={plan} />;
        })}
      </div>
    </section>
  );
};
