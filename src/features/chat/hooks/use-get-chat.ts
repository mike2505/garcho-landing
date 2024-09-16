import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useChatContext } from "../contexts/chat-context";
import type { MessageType } from "../types";

type WelcomeMessageFunction = (firstName: string, lastName: string) => string;

const welcomeMessageVariants: Record<string, WelcomeMessageFunction> = {
  "E-commerce": (firstName, lastName) =>
    `Hello, ${firstName} ${lastName} Welcome to Helpnode store. I'm here to help you find the perfect products, track your orders, and answer any questions you have. How can I assist you today?`,
  Marketplace: (firstName, lastName) =>
    `Hi there, ${firstName} ${lastName}! Welcome to Helpnode marketplace. Whether you're buying or selling, I'm here to assist you with listings, purchases, and any other needs. How can I make your experience smoother today?`,
  "Online Casino": (firstName, lastName) =>
    `Hey, ${firstName} ${lastName}! Welcome to Helpnode online game community. Ready to level up? I'm here to help you navigate the game, find the best strategies, and keep track of your progress. What would you like to do today?`,
  Healthcare: (firstName, lastName) =>
    `Hello, ${firstName} ${lastName}. Welcome to Helpnode healthcare platform. I'm here to assist you with booking appointments, accessing your medical records, or answering any health-related questions you might have. How can I help you today?`,
  Education: (firstName, lastName) =>
    `Hi, ${firstName} ${lastName}! Welcome to Helpnode education platform. I'm your study partner, here to assist with course materials, assignments, and any questions you have along the way. What can I help you with today?`,
  Hospitality: (firstName, lastName) =>
    `Hello, ${firstName} ${lastName} I'm your personal assistant for Helpnode hotel. I can assist with booking rooms, checking your bill, room service, and more. How can I help you today?`,
};

function getWelcomeMessage(
  firstName: string,
  lastName: string,
  industry: string,
): string {
  const getMessage = welcomeMessageVariants[industry];
  if (getMessage) {
    return getMessage(firstName, lastName);
    // biome-ignore lint/style/noUselessElse: <explanation>
  } else {
    return `Hello, ${firstName} ${lastName}! Welcome to our services. How can we assist you today?`;
  }
}

export const useGetChat = (chatId: string) => {
  const queryClient = useQueryClient();
  const { firstName, lastName, industry } = useChatContext();
  const welcomeMessage = getWelcomeMessage(firstName, lastName, industry);

  return useQuery<MessageType[], Error>({
    queryKey: ["chat", chatId],
    queryFn: async () => {
      const message: MessageType = {
        id: Math.random().toString(),
        sender: "agent",
        text: welcomeMessage,
        timestamp: new Date().toISOString(),
      };

      const oldData = queryClient.getQueryData<MessageType[]>(["chat", chatId]);
      if (oldData) {
        return oldData;
        // biome-ignore lint/style/noUselessElse: <explanation>
      } else {
        return [message];
      }
    },
  });
};
