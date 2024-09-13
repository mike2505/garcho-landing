import { useEffect, useRef } from "react";
import { styled } from "styled-components";
import { useGetChat } from "../hooks/use-get-chat";
import { Message } from "./message";

const Container = styled.div`
  padding: 1rem;
  overflow-y: auto;
`;

type MessagesProps = {
  chatId: string;
};

export const Messages: React.FC<MessagesProps> = ({ chatId }) => {
  const { data: chat, isLoading } = useGetChat(chatId);
  const containerRef = useRef<HTMLDivElement>(null);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [chat]);

  if (isLoading) {
    return <Container />;
  }

  return (
    <Container ref={containerRef}>
      {chat?.map((message) => {
        return <Message key={message.id} {...message} chatId={chatId} />;
      })}
    </Container>
  );
};
