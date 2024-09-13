"use client";
import { AngleRightIcon } from "@/assets/angle-right";
import { cn } from "@/utils/cn";
import { Button } from "../button";
import { Logo } from "../logo";
import { useModal } from "../modal";
import { Navbar } from "../navbar";

export const Header = () => {
  const { showModal } = useModal();

  return (
    <header className="sticky top-0 bg-neutral-900/80 backdrop-blur-md z-50 border-b border-b-neutral-400/50">
      <div className="max-w-[1400px] m-auto flex items-center justify-between gap-4 p-4 flex-wrap">
      <Logo />
        <div className="flex items-center gap-4">
          <Navbar />

          <div>
            <Button
              className={cn(
                "text-sm lg:text-md rounded-md py-3 px-4 text-secondary-800 font-semibold bg-primary-100",
                "flex items-center gap-2",
                "hover:bg-primary-300 active:bg-primary-400",
                "group",
              )}
              onClick={showModal}
            >
              Book a demo
              <span
                className={cn(
                  "block transition-transform",
                  "group-hover:translate-x-1",
                  "group-focus-visible:translate-x-1",
                )}
              >
                <AngleRightIcon />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
