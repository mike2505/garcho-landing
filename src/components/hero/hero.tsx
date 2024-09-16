"use client";
import { AngleRightIcon } from "@/assets/angle-right";
import { CalendarIcon } from "@/assets/calendar-icon";
import { HeroChatPrimary } from "@/assets/hero-chat-primary";
import { HeroChatSecondary } from "@/assets/hero-chat-secondary";
import { InfinityIcon } from "@/assets/infinity";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { Button } from "../button";
import { Link } from "../link";
import { useModal } from "../modal";

export const Hero = () => {
  const { showModal } = useModal();

  return (
    <section id="home">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-green-circle py-10 px-4 md:py-20 bg-contain bg-no-repeat bg-center">
          <h1 className="font-suwannaphum text-3xl md:text-5xl font-light leading-tight mb-4 max-w-[600px]">
            Meet <strong className="font-bold">Helpnode</strong> - Level 2{" "}
            <strong className="font-bold">AI Agents</strong>
          </h1>
          <p className="text-secondary-300 mb-10 max-w-[750px]">
            <strong className="text-secondary-100 font-bold">Helpnode</strong> can
            reason, take multiple actions, and learn from your scenarios,
            becoming completely autonomous in handling complex tasks.
          </p>

          <div className="flex items-center gap-4 pb-32 flex-wrap">
            <Link
              className={cn(
                "rounded-md py-3 px-5 bg-neutral-400 border border-transparent flex items-center gap-2",
                "hover:bg-neutral-900 hover:border-neutral-400",
                "active:bg-neutral-800",
              )}
              href="#demo"
            >
              <CalendarIcon />
              Explore Demo
            </Link>

            <Button
              className={cn(
                "rounded-md py-3 px-6 text-secondary-800 font-semibold bg-primary-100",
                "flex items-center gap-2",
                "hover:bg-primary-300 active:bg-primary-400",
                "group",
              )}
              onClick={() => showModal()}
            >
              Book a call
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

        <div className="hidden lg:grid grid-cols-[4fr_3fr] items-center overflow-hidden relative translate-x-[20%] xl:translate-x-0">
          <div className="relative translate-x-[35%]">
            <HeroChatPrimary />
          </div>
        </div>
      </div>
    </section>
  );
};

export const Stats = () => {
  return (
    <div className="relative top-[-100px] w-full mx-auto p-4 flex justify-center">
      <div
        className={cn(
          "p-10 bg-neutral-900/80 backdrop-blur-md rounded-3xl border border-neutral-400/50 max-w-6xl",
        )}
      >
        <div className="mt-4 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-4xl font-light mb-6">Unique Selling Point</h2>
            <p className="text-secondary-300 mb-6">
              {
                "Helpnode will transform your customer engagement by processing multiple data points and delivering sub-second responses, ensuring seamless and truly helpful interactions."
              }
            </p>

            <Link
              className={cn(
                "rounded-md py-3 px-6 font-medium bg-secondary-400/50 text-secondary-100 border border-neutral-100",
                "flex items-center gap-2",
                "hover:bg-secondary-300/50 active:bg-secondary-400/60",
                "group",
              )}
              href="#pricing"
            >
              Contact sales
              <span
                className={cn(
                  "block transition-transform",
                  "group-hover:translate-x-1",
                  "group-focus-visible:translate-x-1",
                )}
              >
                <AngleRightIcon />
              </span>
            </Link>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="grid gap-2">
              <div className="flex items-center gap-2 text-3xl font-light font-suwannaphum">
                {"<"}
                <strong className="text-5xl font-semibold">5</strong>s
              </div>
              <span className="text-secondary-300">Avg. Response time</span>
            </div>

            <div className="grid gap-2">
              <div className="flex items-center gap-2 text-3xl font-light">
                <span className="font-bold text-2xl">
                  <InfinityIcon />
                </span>
                <span className="font-bold">(unlimited)</span>
              </div>
              <span className="text-secondary-300">
                Number of simultaneous conversations
              </span>
            </div>
            <div className="grid gap-2">
              <div className="flex items-center gap-2 text-3xl font-bold font-suwannaphum text-primary-100">
                24/7
              </div>
              <span className="text-secondary-300">
                Availability all year round
              </span>
            </div>
            <div className="grid gap-2">
              <div className="flex items-center gap-2 text-3xl font-bold font-suwannaphum">
                1M
              </div>
              <span className="text-secondary-300">
                Helpnode process up to a million data points.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
