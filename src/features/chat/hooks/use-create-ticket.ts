import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useChatContext } from "../contexts/chat-context";
import type { MessageType } from "../types";

export const useCreateTicket = (hideFeedback: () => void) => {
  const { apiKey } = useChatContext();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      name,
      email,
      sessionId,
    }: { name: string; email: string; sessionId: string | undefined }) => {
      const data = await createTicket({
        name,
        email,
        sessionId: sessionId,
        apiKey,
      });

      return data;
    },

    onMutate({ name, sessionId }) {
      const previousChat = queryClient.getQueryData<MessageType[]>([
        "chat",
        sessionId,
      ]);

      queryClient.cancelQueries({ queryKey: ["chat", sessionId] });

      queryClient.setQueryData(
        ["chat", sessionId],
        (oldData: MessageType[]) => {
          return [
            ...(oldData || []),
            {
              id: "1000",
              message: `${name} submitting a ticket...`,
              sender: "agent",
              timestamp: new Date().toISOString(),
            },
          ];
        },
      );

      return { previousChat };
    },

    onError: (_error, { sessionId }) => {
      queryClient.setQueryData(
        ["chat", sessionId],
        (oldData: MessageType[]) => {
          return [
            ...(oldData || []).filter((msg) => msg.id !== "1000"),
            {
              id: Math.random().toString(),
              text: "There was an error",
              sender: "agent",
              timestamp: new Date().toISOString(),
            },
          ];
        },
      );
    },

    onSuccess: (_data, { sessionId }) => {
      queryClient.setQueryData(
        ["chat", sessionId],
        (oldData: MessageType[]) => {
          const updatedData = oldData ? oldData.slice(0, -2) : [];
          return [
            ...updatedData,
            {
              id: Math.random().toString(),
              text: "Thank you for your feedback! Our team has received your message, and we’ll get back to you as soon as possible. We appreciate your patience and look forward to assisting you further!",
              sender: "agent",
              timestamp: new Date().toISOString(),
            },
          ];
        },
      );
      hideFeedback();
    },
  });
};

const createTicket = async ({
  name,
  email,
  sessionId,
  apiKey,
}: {
  name: string;
  email: string;
  sessionId: string | undefined;
  apiKey: string;
}) => {
  console.info(name, email, sessionId, apiKey);
  try {
    const data = new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          ok: true,
          json: async () => ({ ticket_id: "123" }),
        });
      }, 1000);
    });

    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Failed to submit a ticket");
  }
};
