import Image from "next/image";

export type UseCaseCardProps = {
  id: string;
  icon: string;
  title: string;
  description: string;
};

export const UseCaseCard: React.FC<UseCaseCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <article className="border border-neutral-400/20 bg-neutral-700 p-2 rounded-lg hover:border-primary-100 hover:bg-neutral-500 group">
      <div className="size-full border border-neutral-400/20 p-3 rounded-[6px] bg-neutral-600 group-hover:border-transparent group-hover:bg-neutral-500">
        <div className="size-full border border-neutral-400 grid sm:grid-cols-[auto_1fr] gap-6 bg-neutral-500 rounded-md py-11 px-8 group-hover:border-transparent">
          <div>
            <Image src={icon} alt={title} width={56} height={56} />
          </div>
          <div>
            <h3 className="font-suwannaphum font-black text-2xl mb-5">
              {title}
            </h3>
            <p className="font-medium text-secondary-300">{description}</p>
          </div>
        </div>
      </div>
    </article>
  );
};
