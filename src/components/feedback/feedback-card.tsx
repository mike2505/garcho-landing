"use client";
import Image from "next/image";

export type FeedbackCardProps = {
  companyLogo: React.ReactNode;
  name: string;
  position: string;
  image: string;
  feedback: string;
};

export const FeedbackCard: React.FC<FeedbackCardProps> = ({
  companyLogo,
  name,
  position,
  image,
  feedback,
}) => {
  return (
    <article className="grid grid-cols-[1fr_2fr] w-[620px] h-[220px] border border-secondary-400/40 rounded-xl p-4">
      <div className="flex flex-col gap-2">
        <span>{companyLogo}</span>

        <div className="mt-auto grid grid-cols-[auto_1fr] items-center gap-2">
          <Image src={image ?? ""} alt={name} width={30} height={30} />
          <div>
            <h3 className="text-sm font-medium">{name}</h3>
            <p className="text-sm text-secondary-300">{position}</p>
          </div>
        </div>
      </div>
      <div className="border border-secondary-400/40 rounded-lg p-6">
        <p>{feedback}</p>
      </div>
    </article>
  );
};
