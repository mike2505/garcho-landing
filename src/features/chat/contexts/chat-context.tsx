import { createContext, useContext } from "react";
import type { ChatWidgetConfig } from "../types/index";

type ContextType = Omit<ChatWidgetConfig, "chatId" | "setChatId">;

const ChatContext = createContext<ContextType | undefined>(undefined);

export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChatContext must be used within a ChatProvider");
  }
  return context;
};

export const ChatProvider: React.FC<
  ContextType & { children: React.ReactNode }
> = ({ agentId, apiKey, firstName, lastName, industry, children }) => {
  return (
    <ChatContext.Provider
      value={{
        agentId,
        apiKey,
        firstName,
        lastName,
        industry,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
