import { UseCaseCard, type UseCaseCardProps } from "./use-case-card";

const useCases: UseCaseCardProps[] = [
  {
    id: "1",
    icon: "/images/saas.png",
    title: "SaaS",
    description:
      "Enhance user experience with AI-driven support for onboarding, subscription management, and technical troubleshooting.",
  },
  {
    id: "2",
    icon: "/images/education.png",
    title: "Education",
    description:
      "Empower students and faculty with AI-driven assistance for course management, enrollment, and academic support.",
  },
  {
    id: "3",
    icon: "/images/marketplace.png",
    title: "Marketplace",
    description:
      "Optimize buyer and seller interactions with intelligent, responsive support for seamless transactions and dispute resolution.",
  },
  {
    id: "4",
    icon: "/images/healthcare.png",
    title: "Healthcare",
    description:
      "Streamline patient interactions with secure, HIPAA-compliant AI support for appointment scheduling and medical inquiries.",
  },

  {
    id: "5",
    icon: "/images/ecommerce.png",
    title: "E-commerce",
    description:
      "Boost customer satisfaction with AI-powered support for order tracking, product recommendations, and seamless return management.",
  },
  {
    id: "6",
    icon: "/images/hospitality.png",
    title: "Hospitality",
    description:
      "Enhance guest experiences with tailored AI-driven support, from booking assistance to personalized recommendations.",
  },
];

export const UseCases: React.FC = () => {
  return (
    <section className="px-4 py-40 w-full">
      <h2 className="font-suwannaphum font-bold text-3xl mb-6">Use Cases</h2>
      <p className="mb-10">
        Discover how Garcho AI can transform customer support across various
        industries, making it a game-changer for your business.
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {useCases.map((useCase) => (
          <UseCaseCard key={useCase.id} {...useCase} />
        ))}
      </div>
    </section>
  );
};
