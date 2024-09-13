"use client";
import { ConversationIcon } from "@/assets/conversation-icon";
import { DatabaseIcon } from "@/assets/database-icon";
import { SalesIcon } from "@/assets/sales-icon";
import { SupportIcon } from "@/assets/support-icon";
import { Feature } from "./feature";

import React, { useState } from "react";

const features = [
  {
    id: 1,
    icon: <SupportIcon />,
    title: "Function-Calling Mastery",
    description:
      "Garcho can access, cross-check, and pull data from multiple databases, making decisions based on comprehensive information.",
  },

  {
    id: 2,
    icon: <DatabaseIcon />,
    title: "Advanced Reasoning",
    description:
      "Garcho can handle complex tasks, learn from scenarios, and execute multiple actions seamlessly.",
  },

  {
    id: 3,
    icon: <ConversationIcon />,
    title: "Context-Aware Conversations",
    description:
      "Garcho uses in-depth user data to craft highly tailored and context-aware conversations, enhancing engagement and satisfaction.",
  },

  {
    id: 4,
    icon: <SalesIcon />,
    title: "Customizable Behavior",
    description:
      "Easily customize Garcho's behavior by creating specific scenarios. Garcho will instantly adapt and follow these new instructions in real-time..",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

export const Features = () => {
  const [hoveredFeatureId, setHoveredFeatureId] = useState<number | null>(null);

  return (
    <section id="features" className="px-4 py-40 w-full">
      <div className="grid gap-6 mb-6 lg:grid-cols-[1fr_2fr_2fr] lg:gap-20">
        <h2 className="text-3xl font-bold font-suwannaphum">Features</h2>
        <p className="text-secondary-300 font-light max-w-[600px]">
          Integrate <strong className="font-medium">Garcho</strong> effortlessly
          with your systems. Our intuitive interface lets you create custom
          commands and manage interactions efficiently, enhancing performance
          across support, sales, and lead generation.
        </p>
        <p className="text-secondary-300 font-light max-w-[600px]">
          <strong className="font-medium">Garcho</strong> leverages cutting-edge
          AI for natural language processing and decision-making. We provide
          tailored solutions for customer support, sales, and lead generation,
          ensuring effective user interactions.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
        {features.map((feature, index) => (
          <Feature
            key={feature.id}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            onMouseEnter={() => setHoveredFeatureId(feature.id)}
            onMouseLeave={() => setHoveredFeatureId(null)}
            isHovered={hoveredFeatureId === feature.id}
          />
        ))}
      </div>
    </section>
  );
};
