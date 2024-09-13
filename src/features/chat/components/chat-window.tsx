import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import { useGetInfo } from "../hooks/use-get-info";
import type { Colors } from "../types";
import { Chat } from "./chat";
import { Home } from "./home";

const Container = styled.div<Colors>`
  --clr-primary-100: ${({ brand_color }) => brand_color[100]};
  --clr-primary-200: ${({ brand_color }) => brand_color[200]};
  --clr-primary-300: ${({ brand_color }) => brand_color[300]};
  --clr-primary-opacity: ${({ brand_color }) => brand_color.opacity};

  --clr-text-100: ${({ text_color }) => text_color[100]};
  --clr-text-200: ${({ text_color }) => text_color[200]};
  --clr-text-300: ${({ text_color }) => text_color[300]};
  --clr-text-400: ${({ text_color }) => text_color[400]};

  --clr-bg-100: ${({ bg_color }) => bg_color[100]};
  --clr-bg-200: ${({ bg_color }) => bg_color[200]};
  --clr-bg-300: ${({ bg_color }) => bg_color[300]};
  --clr-bg-400: ${({ bg_color }) => bg_color[400]};
  --clr-bg-500: ${({ bg_color }) => bg_color[500]};

  --clr-bot-message-text: ${({ bot_message_color }) => bot_message_color.text};
  --clr-bot-message-bg: ${({ bot_message_color }) => bot_message_color.bg};
  --clr-bot-message-bg-hover: ${({ bot_message_color }) =>
    bot_message_color.bgHover};

  --clr-user-message-text: ${({ user_message_color }) =>
    user_message_color.text};
  --clr-user-message-bg: ${({ user_message_color }) => user_message_color.bg};
  --clr-user-message-bg-hover: ${({ user_message_color }) =>
    user_message_color.bgHover};

  --clr-neutral-100: ${({ neutral }) => neutral[100]};
  --clr-neutral-200: ${({ neutral }) => neutral[200]};
  --clr-neutral-300: ${({ neutral }) => neutral[300]};
  --clr-neutral-400: ${({ neutral }) => neutral[400]};
  --clr-neutral-500: ${({ neutral }) => neutral[500]};
  --clr-neutral-600: ${({ neutral }) => neutral[600]};
  --clr-neutral-700: ${({ neutral }) => neutral[700]};
  --clr-neutral-800: ${({ neutral }) => neutral[800]};
  --clr-neutral-900: ${({ neutral }) => neutral[900]};

  --clr-success: ${({ success }) => success};
  --clr-error: ${({ error }) => error};
  --clr-warning: ${({ warning }) => warning};
  --clr-information: ${({ information }) => information};

  color-scheme: light dark;

  .truncate {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  background-color: var(--clr-bg-300);
  height: 600px;
  overflow: auto;
  width: 100%;
  max-width: 400px;
  border-radius: 1rem;

  scrollbar-color: var(--clr-text-400) var(--clr-bg-300);

  button,
  a {
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:focus-visible {
      outline: 2px solid var(--clr-primary-100);
    }
  }
`;

type ChatProps = {
  chatId: string | null;
  setChatId: React.Dispatch<React.SetStateAction<string | null>>;
};

export const ChatWindow = ({ chatId, setChatId }: ChatProps) => {
  const { data: info, isLoading } = useGetInfo();

  const openChat = (id: string) => {
    setChatId(id);
  };

  const goBack = () => {
    setChatId(null);
  };

  if (isLoading) {
    return (
      <div className="grid items-center" role="status">
        <svg
          aria-hidden="true"
          className="w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-primary-100"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  if (!info) {
    return null;
  }

  return (
    <Container {...info?.colors}>
      <AnimatePresence mode="wait">
        {chatId ? (
          <Chat chatId={chatId} goBack={goBack} />
        ) : (
          <Home openChat={openChat} />
        )}
      </AnimatePresence>
    </Container>
  );
};
