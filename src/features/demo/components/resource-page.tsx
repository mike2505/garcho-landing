import { CheckListIcon } from "@/assets/check-list";
import { FileCodeIcon } from "@/assets/file-code-icon";

type ResourcePageProps = {
  resource: {
    question: string;
    answer: string;
  };
};

export const ResourcePage: React.FC<ResourcePageProps> = ({ resource }) => {
  return (
    <div className="">
      <div className="p-3 border-b border-neutral-400">
        <h2 className="font-semibold text-sm flex items-center gap-2 mb-1">
          <CheckListIcon width={20} height={20} />
        </h2>
        <p className="text-xs text-secondary-300">{resource.question}</p>
      </div>

      <div className="bg-neutral-700 h-full">
        <div className="flex items-center gap-2 py-2 px-4 bg-neutral-700 border-b-2 border-b-primary-100 w-fit">
          <FileCodeIcon />
          <span className="font-500 text-sm">Resources</span>
        </div>
        <div className="p-3 overflow-auto max-h-[500px]">
          <p className="text-sm text-secondary-200">{resource.answer}</p>
        </div>
      </div>
    </div>
  );
};
