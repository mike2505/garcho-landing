import { RedBullIcon } from "@/assets/red-bull-icon";
import { FeedbackCard, type FeedbackCardProps } from "./feedback-card";

const feedback: FeedbackCardProps[] = [
  {
    companyLogo: <RedBullIcon />,
    name: "Naomi Welbeck",
    position: "CTO at Red Bull",
    image: "/images/feedback.png",
    feedback:
      "“The integration was seamless, and the results speak for themselves. Our response times have improved significantly with Garcho.”",
  },

  {
    companyLogo: <RedBullIcon />,
    name: "Naomi Welbeck",
    position: "CTO at Red Bull",
    image: "/images/feedback.png",
    feedback:
      "“The integration was seamless, and the results speak for themselves. Our response times have improved significantly with Garcho.”",
  },

  {
    companyLogo: <RedBullIcon />,
    name: "Naomi Welbeck",
    position: "CTO at Red Bull",
    image: "/images/feedback.png",
    feedback:
      "“The integration was seamless, and the results speak for themselves. Our response times have improved significantly with Garcho.”",
  },

  {
    companyLogo: <RedBullIcon />,
    name: "Naomi Welbeck",
    position: "CTO at Red Bull",
    image: "/images/feedback.png",
    feedback:
      "“The integration was seamless, and the results speak for themselves. Our response times have improved significantly with Garcho.”",
  },

  {
    companyLogo: <RedBullIcon />,
    name: "Naomi Welbeck",
    position: "CTO at Red Bull",
    image: "/images/feedback.png",
    feedback:
      "“The integration was seamless, and the results speak for themselves. Our response times have improved significantly with Garcho.”",
  },
];

export const Feedback: React.FC = () => {
  return (
    <section id="feedback" className="w-full p-4">
      <span className="text-primary-100 font-bold text-sm border border-primary-100 rounded-sm py-1.5 px-4">
        Testimonials
      </span>
      <h2 className="text-3xl font-bold mt-6 mb-10 font-suwannaphum">
        Discover why people love Garcho
      </h2>

      <div className="grid  grid-flow-col gap-8 overflow-x-scroll">
        {feedback.map((props, index) => {
          return <FeedbackCard key={index.toString()} {...props} />;
        })}
      </div>
    </section>
  );
};
