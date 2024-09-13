import { API_URL } from "@/config";
import { useMutation } from "@tanstack/react-query";
import { useChatContext } from "../contexts/chat-context";
import { getUserId } from "../utils/get-user-id";
import { useSendMessage } from "./use-send-message";

type CreateChatProps = {
  openChat: (id: string) => void;
};

export const useCreateChat = ({ openChat }: CreateChatProps) => {
  const { mutate } = useSendMessage();
  const { apiKey, industry } = useChatContext();
  const userId = getUserId(industry);

  if (!userId) {
    throw new Error("User ID not found");
  }

  return useMutation({
    mutationFn: async ({ question }: { question?: string }) => {
      const sessionId = await createSession(userId, apiKey);

      return { sessionId, question };
    },
    onSuccess: ({ sessionId, question }) => {
      openChat(sessionId);

      if (question) {
        mutate({ question, chatId: sessionId });
      }
    },
  });
};

const createSession = async (userId: string, apiKey: string) => {
  try {
    const response = await fetch(`${API_URL}/sessions/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${apiKey}`,
      },
      body: JSON.stringify({ user_id: userId }),
    });

    if (!response.ok) {
      throw new Error("Failed to create session");
    }

    const { session_id } = await response.json();
    return session_id;
  } catch (error) {
    console.error(error);
  }
};
