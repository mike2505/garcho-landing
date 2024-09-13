type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  isHovered: boolean;
};

export const Feature: React.FC<FeatureProps> = ({
  icon,
  title,
  description,
  onMouseEnter,
  onMouseLeave,
  isHovered,
}) => {
  return (
    <div
    className={`group flex flex-col gap-4 bg-secondary-400/20 p-7 rounded-[8px] border border-secondary-100/20 transition-all ease-out ${isHovered ? 'scale-105 border-primary-100 hover:border-primary-100' : 'scale-95 hover:bg-transparent'}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {icon}
      <h2 className="text-lg font-bold text-secondary-100 group-hover:text-secondary-100">
        {title}
      </h2>
      <p className="text-secondary-300 group-hover:text-secondary-100">
        {description}
      </p>
    </div>
  );
};
