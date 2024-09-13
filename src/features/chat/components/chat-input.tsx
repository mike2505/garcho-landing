import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import styled from "styled-components";
import { ArrowUpIcon } from "../assets/arrow-up-icon";
import { useSendMessage } from "../hooks/use-send-message";
import type { MessageType } from "../types";

const Container = styled.div`
  padding: 0.4rem 1rem;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  border-radius: 6px;
  background-color: var(--clr-bg-100);
  border: 1px solid var(--clr-neutral-200);
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);

  &:has(:focus) {
    border-color: var(--clr-primary-100);
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 0.8rem 1rem;
  min-width: 0;
  width: 100%;
  color: var(--clr-text-100);
  background-color: transparent;
  outline: none;
`;

const SendButton = styled.button`
  margin-left: 0.2rem;
  margin-right: 1rem;
  padding: 0.5rem;
  border-radius: 6px;
  background-color: var(--clr-text-100);
  svg {
    path {
      fill: var(--clr-bg-100);
    }
  }

  &:hover {
    background-color: var(--clr-text-200);
  }

  &:disabled {
    background-color: transparent;
    cursor: default;
    opacity: 0.4;

    svg {
      path {
        fill: var(--clr-text-200);
      }
    }
  }
`;

type ChatInputProps = {
  chatId: string;
};

export const ChatInput: React.FC<ChatInputProps> = ({ chatId }) => {
  const queryClient = useQueryClient();
  const chat =
    (queryClient.getQueryData(["chat", chatId]) as MessageType[]) ?? [];
  const hideInput = chat?.some(
    (message: MessageType) => message.type === "feedback",
  );

  const [text, setText] = useState("");

  const { mutate, isPending } = useSendMessage();

  const handleSendMessage = () => {
    if (text.trim() !== "") {
      mutate({ question: text, chatId: chatId });
      setText("");
    }
  };

  if (hideInput) {
    return null;
  }

  return (
    <Container>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Message..."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSendMessage();
            }
          }}
        />

        <SendButton
          onClick={handleSendMessage}
          disabled={text === "" || isPending}
          type="submit"
        >
          <ArrowUpIcon />
        </SendButton>
      </Form>
    </Container>
  );
};
