import { ChatProvider } from "../contexts/chat-context";
import type { ChatWidgetConfig } from "../types";
import { ChatWindow } from "./chat-window";

export const ChatContainer: React.FC<ChatWidgetConfig> = ({
  apiKey,
  agentId,
  firstName,
  lastName,
  industry,
  chatId,
  setChatId,
}) => {
  return (
    <ChatProvider
      agentId={agentId}
      apiKey={apiKey}
      firstName={firstName}
      lastName={lastName}
      industry={industry}
    >
      <ChatWindow chatId={chatId} setChatId={setChatId} />
    </ChatProvider>
  );
};
