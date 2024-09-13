import { AngleRightIcon } from "@/assets/angle-right";
import { DatabaseNavIcon } from "@/assets/database-icon";
import { MessageDotsIcon } from "@/assets/messge-dots";
import { Button } from "@/components/button";
import { ChatContainer } from "@/features/chat";
import { cn } from "@/utils/cn";
import { useState } from "react";
import { data } from "../data";
import type { DemoInformation } from "../types";
import { Database } from "./database";

type ChatProps = {
  backward: () => void;
  info: DemoInformation;
};

export const Showcase: React.FC<ChatProps> = ({ backward, info }) => {
  const [page, setPage] = useState<"chat" | "database">("chat");
  const selectedIndustry = data[info.industry];
  const [chatId, setChatId] = useState<string | null>(null);

  return (
    <div className="bg-neutral-500 p-3 rounded-lg border border-neutral-400 grid grid-rows-[auto_1fr_auto]">
      <div className="flex items-center justify-center pb-2">
        <div className="flex flex-wrap gap-2 items-center bg-neutral-700 rounded-lg p-1">
          <Button
            onClick={() => setPage("chat")}
            className={cn(
              "py-2 px-4 rounded-md bg-neutral-500 text-secondary-300 text-sm font-medium flex items-center gap-2",
              page === "chat" && "bg-primary-100 font-bold text-neutral-700",
            )}
          >
            <MessageDotsIcon /> Chat
          </Button>

          <Button
            onClick={() => setPage("database")}
            className={cn(
              "py-2 px-4 rounded-md bg-neutral-500 text-secondary-300 text-sm font-medium flex items-center gap-2",
              page === "database" &&
                "bg-primary-100 font-bold text-neutral-700",
            )}
          >
            <DatabaseNavIcon /> Database
          </Button>
        </div>
      </div>

      <div className="grid">
        {page === "chat" ? (
          <div className="flex justify-center bg-chat-background bg-cover bg-center bg-no-repeat">
            <ChatContainer
              apiKey={selectedIndustry.apiKey}
              agentId={selectedIndustry.agentId}
              firstName={info.firstName}
              lastName={info.lastName}
              industry={info.industry}
              chatId={chatId}
              setChatId={setChatId}
            />
          </div>
        ) : (
          <Database info={info} />
        )}
      </div>

      <div className="pt-2 flex flex-wrap items-center gap-4 justify-between">
        <Button
          className={cn(
            "border border-secondary-400 text-secondary-300 py-3 px-8 rounded-md flex items-center gap-2 font-semibold",
            "hover:border-secondary-100 hover:text-secondary-100",
            "group",
          )}
          onClick={() => {
            backward();
          }}
        >
          <span
            className={cn(
              "transform rotate-180",
              "group-hover:-translate-x-1 transition-transform group-focus-visible:-translate-x-1",
              "group-hover:text-secondary-100",
            )}
          >
            <AngleRightIcon />
          </span>
          Back
        </Button>
      </div>
    </div>
  );
};
