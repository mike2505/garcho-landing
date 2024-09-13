type ProgressProps = {
  page: number;
};

export const Progress: React.FC<ProgressProps> = ({ page = 1 }) => {
  return (
    <div className="mt-auto h-20 flex flex-col items-center">
      <div className="mt-4 w-full mx-auto flex items-center justify-between">
        <div className="font-bold font-suwannaphum text-2xl flex items-center gap-2">
          <span>{page}</span>
          <span className="text-secondary-300">/</span>
          <span className="text-secondary-300">3</span>
        </div>
        <div className="w-full h-2 bg-neutral-200 rounded-full overflow-hidden ml-4">
          <div
            className="h-full bg-primary-100 rounded-full"
            style={{ width: `${(page / 3) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};
