import { LogoIcon } from "@/assets/logo-icon";

export const Logo = () => {
  return (
    <div className="grid grid-cols-[42px_auto] items-center gap-3">
      <LogoIcon />
      <span className="text-lg lg:text-xl font-semibold truncate">Garcho AI</span>
    </div>
  );
};
