"use client";
import { AngleDownIcon } from "@/assets/angle-down";
import { QuestionIcon } from "@/assets/question-icon";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Button } from "../button";

type Faq = {
  id: number;
  question: string;
  answer: string;
};

const faqs: Faq[] = [
  {
    id: 1,
    question: "How does Helpnode handle updates and new features?",
    answer:
      "	Helpnode is designed to automatically fetch updates and new features without requiring any manual intervention. Whenever a new feature or improvement is released, your chatbot will be updated seamlessly in the background, ensuring that you always have access to the latest capabilities without any downtime. This way, you can focus on your business while Helpnode continues to evolve and improve your customer interactions.",
  },
  {
    id: 2,
    question:
      "Can I create multiple Agents for different sections of my website?",
    answer:
      "Yes, with Helpnode, you can create multiple agents, each with its own unique functionality, to serve different sections of your website. Whether you need one agent to handle customer support, another for sales inquiries, and yet another for technical assistance, Helpnode allows you to customize each agent to suit the specific needs of various areas on your site. This flexibility means you can deploy different agents across your website, ensuring that each section is equipped with the most relevant and specialized AI support, all tailored to your requirements.",
  },
  {
    id: 3,
    question: "Does Helpnode support multilingual chatbots?",
    answer:
      "Yes, Helpnode fully supports multilingual chatbots, allowing you to engage with customers in multiple languages. As AI technology continues to advance, Helpnode constantly improves its ability to understand and interact in various languages, ensuring accurate and effective communication. We leverage the most advanced natural language understanding technologies to provide a seamless experience for your customers, no matter what language they speak.",
  },
  {
    id: 4,
    question: "How does Helpnode manage user privacy and data protection?",
    answer: `Helpnode takes user privacy and data protection very seriously. The language model (LLM) used by Helpnode does not have direct access to sensitive user data. Instead, any sensitive information is automatically replaced with placeholders before it reaches the AI. This ensures that your data remains secure and private.
Additionally, Helpnode is designed to operate within strict user scopes, meaning that the bot can only access data relevant to the specific user interacting with it. This prevents the bot from accessing or revealing sensitive information, such as other users' transactions, even with prompt engineering. With Helpnode, you can trust that all interactions are securely contained within the appropriate user context.`,
  },
  {
    id: 5,
    question:
      "What happens if the chatbot encounters a question it can't answer?",
    answer:
      "When Helpnode encounters a question it can't answer, the agent first tries to understand the underlying issue. It analyzes the context to determine if the challenge is due to incomplete information, a typo, or another easily fixable problem. The agent attempts to resolve the issue by asking clarifying questions or making suggestions. If it still can’t provide a satisfactory answer, Helpnode can escalate the situation according to your business's preferences, such as calling a human agent for assistance or triggering another predefined action to ensure the customer’s needs are met.",
  },
  {
    id: 6,
    question:
      "Is there a limit to the number of interactions or users the chatbot can handle?",
    answer:
      "No, there are no limits to the number of interactions or users that Helpnode can handle. Whether you're managing a small customer base or a large-scale operation with thousands of users, Helpnode is built to scale effortlessly. Our infrastructure is designed to support unlimited interactions, ensuring that your chatbot can manage all your customer engagement needs without any restrictions.",
  },

  {
    id: 7,
    question:
      "How does Helpnode ensure the chatbot stays relevant to my business as it evolves?",
    answer:
      "Helpnode’s advanced AI technologies ensure that our chatbots remain relevant at every stage of your business's evolution. As your business grows and changes, the chatbot can adapt and evolve alongside it, continually updating its knowledge and capabilities to meet new demands. Additionally, as AI capabilities improve, the chatbot can enhance its performance independently, even outside of direct business changes, ensuring it stays up-to-date with the latest advancements. The proficiency of the chatbot is closely tied to how effectively you manage its advanced functionality, allowing you to refine and optimize its performance over time. This ensures that the chatbot remains a valuable and ever-improving asset for your business.",
  },

  {
    id: 8,
    question:
      "What training or resources are available for learning to use Helpnode? - for the future",
    answer:
      "Helpnode offers a variety of training and resources to ensure a smooth onboarding process and to help you fully understand and utilize our platform. We provide comprehensive manuals and guides that walk you through every feature of Helpnode, making it easy to set up and customize your chatbots. Additionally, our 24/7 customer support team is always available to assist with any questions or challenges you may encounter, ensuring you have all the help you need to get the most out of Helpnode.",
  },

  {
    id: 9,
    question:
      "Can Helpnode’s chatbots handle information about transactions or payments?",
    answer:
      "Yes, Helpnode chatbots can handle any information that your business optimizes them for, including transactions or payment-related inquiries. For sensitive information, Helpnode can offer an extra layer of security, tailored to your specific business requirements. The platform’s customizable functionality allows you to define how the chatbot manages and secures transactional data, ensuring it meets your security standards while providing a seamless user experience.",
  },

  {
    id: 10,
    question: "How does Helpnode manage downtime or service interruptions?",
    answer: `Helpnode is designed with high availability and reliability in mind to minimize downtime and service interruptions. Our infrastructure is built on robust, scalable cloud services that include failover mechanisms and redundancy, ensuring that the chatbot remains operational even in the event of unexpected issues.
In the rare case of a service interruption, our team is alerted immediately, and we work quickly to resolve the issue. Additionally, any updates or maintenance are typically performed during off-peak hours to minimize impact on your operations. We also provide real-time status updates, so you're always informed about the health of the service.`,
  },

  {
    id: 11,
    question: "Is there a way to manually override the chatbot’s responses?",
    answer: `Yes, Helpnode offers a feature called "scenarios," which allows you to manually override the chatbot's responses in specific situations. Scenarios let you define how the bot should behave in different cases, ensuring that it provides the appropriate responses based on your business needs. Whether it's a specific customer request or a unique situation, you can create tailored scenarios to guide the chatbot's actions and ensure it aligns perfectly with your desired outcomes.`,
  },

  {
    id: 12,
    question: "Can Helpnode chatbots integrate with mobile apps?",
    answer:
      "Yes, Helpnode chatbots can be integrated into mobile apps as well as on any platform. We also offer a comprehensive API that you can use for a more seamless integration, ensuring that the chatbot functions smoothly within your mobile app environment and provides a consistent experience across all platforms.",
  },
  {
    id: 13,
    question:
      "What are the best practices for optimizing chatbot performance with Helpnode?",
    answer: `To optimize your chatbot’s performance with Helpnode, it’s essential to follow these best practices:
Maintain a Well-Structured Resource Library: Ensure that your chatbot has access to a comprehensive and well-organized resource library. This library should include detailed information about your products, services, and common customer queries to help the chatbot provide accurate and relevant responses.
Optimize Your Database: A well-structured database that is optimized for your business’s specific needs will enable the chatbot to retrieve and process information efficiently. This optimization is key to ensuring quick and accurate responses.
Create Precise Functions and Commands: For backend server calls, make sure you have correctly created and precise functions and commands. These will enable the chatbot to execute tasks smoothly and interact effectively with your system.
Develop Necessary Scenarios: Tailor the chatbot by creating or editing scenarios specific to your business. These scenarios will guide the chatbot’s interactions, allowing it to handle various customer situations appropriately and effectively.
By following these best practices, you can significantly enhance the performance and reliability of your Helpnode chatbot, ensuring it delivers a high-quality user experience.`,
  },
];

export const Faq: React.FC = () => {
  return (
    <section id="faq" className="px-4 py-40 w-full">
      <span className="text-primary-100 font-bold text-sm border border-primary-100 rounded-sm py-1.5 px-4">
        FAQs
      </span>
      <h2 className="text-3xl font-bold mt-6 mb-10 font-suwannaphum">
        Frequently Asked Questions
      </h2>

      <div className="flex justify-center">
        <div className="w-full max-w-[740px] bg-neutral-700 rounded-xl grid gap-2">
          {faqs.map((faq) => {
            return <FaqItem key={faq.id} {...faq} />;
          })}
        </div>
      </div>
    </section>
  );
};

const FaqItem: React.FC<Faq> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-secondary-400/20 text-secondary-300 rounded-md hover:bg-neutral-900 hover:text-secondary-100 cursor-pointer">
      <Button
        onClick={toggleAnswer}
        className="w-full flex items-center gap-2 text-start font-semibold py-3 px-4 rounded-md"
      >
        <QuestionIcon />
        {question}
        <span
          className={`ml-auto transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <AngleDownIcon />
        </span>
      </Button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="p-4">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
