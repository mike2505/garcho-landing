import { useState } from "react";
import ReactMarkdown from "react-markdown";
import styled, { keyframes } from "styled-components";
import type { MessageType } from "../types";
import { Feedback } from "./feedback";

const Container = styled.div<{ sender: string }>``;

const MessageWrapper = styled.div<{ sender: string }>`
  margin-top: 1rem;
  display: grid;
  place-items: ${(props) => (props.sender === "agent" ? "start" : "end")};
`;

const Timestamp = styled.span`
  font-size: 0.725rem;
  color: var(--clr-text-300);
  margin-left: 0.4rem;
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transition: opacity 0.3s ease, max-height 0.3s ease;

  &.visible {
    opacity: 1;
    max-height: 24px;
  }
`;

const MessageButton = styled.button<{ sender: string }>`
  width: fit-content;
  max-width: 80%;
  background-color: ${(props) =>
    props.sender === "agent"
      ? "var(--clr-bot-message-bg)"
      : "var(--clr-user-message-bg)"};
  color: ${(props) =>
    props.sender === "agent"
      ? "var(--clr-bot-message-text)"
      : "var(--clr-user-message-text)"};
  border-radius: 6px;
  font-size: 0.925rem;
  padding: 0.8rem 1rem;
  border: 1px solid var(--clr-neutral-200);
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  text-align: left;
  user-select: text;
  
  * {
	  word-break: break-word;
	  hyphens: auto;
  }

  &:hover {
    background-color: ${(props) =>
      props.sender === "agent"
        ? "var(--clr-bot-message-bg-hover)"
        : "var(--clr-user-message-bg-hover)"};
  }
`;

const formatTimestamp = (timestamp: string) => {
  const date = new Date(timestamp);
  const now = new Date();
  const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);

  if (diffInHours < 24) {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    // biome-ignore lint/style/noUselessElse: <explanation>
  } else if (diffInHours < 48) {
    return date.toLocaleDateString([], { weekday: "long" });
    // biome-ignore lint/style/noUselessElse: <explanation>
  } else {
    return date.toLocaleDateString([], { month: "long", day: "numeric" });
  }
};

const TypingIndicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
	height: 1rem;
`;

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-100%);
  }
`;

const Dot = styled.span<{ $sender: string }>`
  display: inline-block;
  width: 4px;
  height: 4px;
  margin-inline: 2px; 
  background-color: ${(props) => (props.$sender === "agent" ? "#111111" : "white")};  
  border-radius: 50%;
  animation: ${bounce} 1s infinite;

  &:nth-child(1) {
    animation-delay: 0s;
  }
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.4s;
  }
`;

type MessageProps = MessageType & {
  chatId: string;
};

export const Message: React.FC<MessageProps> = ({
  id,
  sender,
  text,
  timestamp,
  type,
  chatId,
}) => {
  const [showTimestamp, setShowTimestamp] = useState(false);

  return (
    <Container sender={sender}>
      <MessageWrapper sender={sender}>
        <Timestamp className={showTimestamp ? "visible" : ""}>
          {formatTimestamp(timestamp)}
        </Timestamp>
        <MessageButton
          sender={sender}
          onClick={() => {
            setShowTimestamp(!showTimestamp);
          }}
        >
          {id === "1000" ? (
            <TypingIndicator>
              <Dot $sender={sender} />
              <Dot $sender={sender} />
              <Dot $sender={sender} />
            </TypingIndicator>
          ) : (
            <ReactMarkdown>{text}</ReactMarkdown>
          )}
        </MessageButton>
      </MessageWrapper>

      {type === "feedback" && <Feedback chatId={chatId} />}
    </Container>
  );
};
