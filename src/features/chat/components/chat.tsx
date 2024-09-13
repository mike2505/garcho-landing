import { styled } from "styled-components";

import { ChatHeader } from "./chat-header";
import { ChatInput } from "./chat-input";
import { Footer } from "./footer";
import { Messages } from "./messages";

type ChatProps = {
  chatId: string | null;
  goBack: () => void;
};

const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto auto;
`;

export const Chat: React.FC<ChatProps> = ({ chatId, goBack }) => {
  if (!chatId) {
    throw new Error("Chat ID is required");
  }

  return (
    <Container>
      <ChatHeader goBack={goBack} />
      <Messages chatId={chatId} />
      <ChatInput chatId={chatId} />
      <Footer />
    </Container>
  );
};
