import { API_URL } from "@/config";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useChatContext } from "../contexts/chat-context";
import type { MessageType } from "../types";

export const useSendMessage = () => {
  const queryClient = useQueryClient();
  const { agentId, apiKey, firstName, lastName } = useChatContext();

  return useMutation({
    mutationFn: async ({
      question,
      chatId,
    }: {
      question: string;
      chatId: string;
    }) => {
      const botMessage = await sendMessage(
        question,
        chatId,
        agentId,
        apiKey,
        firstName,
        lastName,
      );

      const message: MessageType = {
        id: Math.random().toString(),
        sender: "agent",
        text:
          botMessage === "User is not satisfied, human intervention needed"
            ? "Sorry, I’m not able to provide the answer to your question at the moment. However, your feedback is important to us! Please fill out the form below with your question, and our human support team will get back to you as soon as possible."
            : botMessage,
        timestamp: new Date().toISOString(),
        type:
          botMessage === "User is not satisfied, human intervention needed"
            ? "feedback"
            : undefined,
      };

      return message;
    },
    onMutate: async ({ question, chatId }) => {
      await queryClient.cancelQueries({ queryKey: ["chat", chatId] });

      const previousChat = queryClient.getQueryData<MessageType[]>([
        "chat",
        chatId,
      ]);

      queryClient.setQueryData(["chat", chatId], (oldData: MessageType[]) => {
        return [
          ...(oldData || []),
          {
            id: Math.random().toString(),
            text: question,
            sender: "user",
            timestamp: new Date().toISOString(),
          },
          {
            id: "1000",
            text: "Typing...",
            sender: "agent",
            timestamp: new Date().toISOString(),
          },
        ];
      });

      return { previousChat };
    },

    onError: (_err, newTodo, context) => {
      queryClient.setQueryData(["chat", newTodo.chatId], context?.previousChat);
    },

    onSuccess: (data, { chatId }) => {
      queryClient.setQueryData(["chat", chatId], (oldData: MessageType[]) => {
        return [...(oldData || []).filter((msg) => msg.id !== "1000"), data];
      });
    },
  });
};

const sendMessage = async (
  question: string,
  chatId: string,
  agentId: string,
  apiKey: string,
  firstName: string,
  lastName: string,
) => {
  try {
    const response = await fetch(`${API_URL}/chats/message`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${apiKey}`,
      },
      body: JSON.stringify({
        agent_id: agentId,
        session_id: String(chatId),
        message: question,
      }),
    });

    const data = await response.json();

    if (data.error) {
      return data.error;
    }

    const modifiedResponse = data.message
      .replace(/\$FIRSTNAME/g, firstName)
      .replace(/\$LASTNAME/g, lastName);

    return modifiedResponse;
  } catch (error) {
    throw new Error("Failed to send");
  }
};
