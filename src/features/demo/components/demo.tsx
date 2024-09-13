"use client";
import { Grid } from "@/assets/grid";
import { InfoCircleIcon } from "@/assets/info-circle";
import { Button } from "@/components/button";
import { useModal } from "@/components/modal";
import { ErrorBoundaryProvider } from "@/providers/error-boundary";
import { cn } from "@/utils/cn";
import { useState } from "react";
import type { DemoInformation, Industry } from "../types";
import { IndustryInformation } from "./industry-information";
import { PersonalInformation } from "./personal-information";
import { Progress } from "./progress";
import { Showcase } from "./showcase";

export const Demo = () => {
  const { showModal } = useModal();

  const [page, setPage] = useState(1);
  const [info, setInfo] = useState<DemoInformation>({
    industry: "E-commerce",
    firstName: "",
    lastName: "",
  });

  const forward = () => {
    setPage(page + 1);
  };
  const backward = () => {
    setPage(page - 1);
  };

  const chooseIndustry = (industry: Industry) => {
    setInfo((prev) => {
      return {
        ...prev,
        industry,
      };
    });
    forward();
  };

  const choosePersonalInformation = (data: {
    firstName: string;
    lastName: string;
  }) => {
    setInfo((prev) => {
      return {
        ...prev,
        firstName: data.firstName,
        lastName: data.lastName,
      };
    });
    forward();
  };

  return (
    <section id="demo" className="px-4 py-40 w-full">
      <div className="relative bg-primary-200 border border-primary-100 bg-cover">
        <div className="z-10 relative grid lg:grid-cols-[1fr_2fr] gap-6">
          <div className="flex flex-col p-6">
            <div className="flex items-center flew-wrap gap-4">
              <div className="w-fit p-0.5 border-2 border-neutral-700 rounded-md">
                <div className="bg-neutral-700 text-primary-100 font-black rounded-sm py-1.5 px-4">
                  DEMO
                </div>
              </div>

              <div className="flex items-center gap-2 text-neutral-700 text-sm">
                <InfoCircleIcon />
                <span className="font-light">
                  Demo responses are based on{" "}
                  <strong className="font-medium">imitation data</strong>
                </span>
              </div>
            </div>

            <h2 className="text-3xl lg:text-5xl text-neutral-700 font-black mt-12 mb-3 font-suwannaphum max-w-[500px]">
              Experience Garcho in action
            </h2>

            <span className="font-suwannaphum text-3xl text-neutral-700 mb-6">
              Tailored demos for your industry.
            </span>

            <p className="text-neutral-600 max-w-[500px] leading-8 mb-12">
              This demo uses simulated data across six different industries to
              showcase Garcho's capabilities. While the data is fictional, the
              demonstration highlights how Garcho can be tailored to meet your
              specific business needs and deliver real-world benefits.
            </p>

            <div className="my-10">
              <Button
                className={cn(
                  "bg-neutral-700 py-3 px-5 rounded-md font-semibold",
                  "hover:bg-neutral-600",
                  "active:bg-neutral-500",
                  "focus-visible:outline-secondary-100",
                )}
                onClick={showModal}
              >
                Contact us
              </Button>
            </div>
          </div>

          <div className="bg-neutral-700 overflow-hidden p-6 grid">
            {page === 1 ? (
              <div>
                <Progress page={page} />
                <PersonalInformation
                  choosePersonalInformation={choosePersonalInformation}
                />
              </div>
            ) : page === 2 ? (
              <div>
                <Progress page={page} />
                <IndustryInformation
                  backward={backward}
                  chooseIndustry={chooseIndustry}
                />
              </div>
            ) : page === 3 ? (
              <ErrorBoundaryProvider>
                <Showcase backward={backward} info={info} />
              </ErrorBoundaryProvider>
            ) : null}
          </div>
        </div>

        <div className="absolute inset-0 overflow-hidden opacity-40">
          <Grid />
        </div>
      </div>
    </section>
  );
};
