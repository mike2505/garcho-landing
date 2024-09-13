import { API_URL } from "@/config";
import { useQuery } from "@tanstack/react-query";
import { useChatContext } from "../contexts/chat-context";
import type { Colors, Info, PopularTopic } from "../types";
import { getUserId } from "../utils/get-user-id";
import { setUserId } from "../utils/set-user-id";

export const useGetInfo = () => {
  const { apiKey, industry } = useChatContext();
  const userId = getUserId(industry);

  const { data, isLoading } = useQuery({
    queryKey: ["info", industry],
    queryFn: async () => {
      if (!userId) {
        const user = await createUser(apiKey);
        if (user) {
          setUserId(industry, user.user.user_id);
          return getInfo(apiKey);
          // biome-ignore lint/style/noUselessElse: <explanation>
        } else {
          throw new Error("Failed to create user");
        }
      }
      return getInfo(apiKey);
    },
    staleTime: 0,
  });

  return { data, isLoading };
};

type User = {
  message: string;
  user: {
    user_id: string;
    status: string;
    total_deposits: number;
    session_count: number;
    last_login: string;
  };
};

const createUser = async (apiKey: string): Promise<User | undefined> => {
  const info = {
    status: "active",
    total_deposits: 0,
    session_count: 0,
    last_login: new Date().toISOString(),
  };

  try {
    const response = await fetch(`${API_URL}/users/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${apiKey}`,
      },

      body: JSON.stringify(info),
    });
    if (!response.ok) {
      throw new Error("Failed to create user");
    }

    const user = await response.json();
    return user;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("An unknown error occurred");
    }
  }
};

const getInfo = async (apiKey: string): Promise<Info | undefined> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const colors: Colors = {
      brand_color: {
        100: "#111111",
        200: "#1D1D1D",
        300: "#454545",
        opacity: "rgba(6, 6, 6, 0.8)",
      },

      text_color: {
        100: "#1D1D1D",
        200: "#454545",
        300: "#6E6E6E",
        400: "#9B9B9B",
      },

      bg_color: {
        100: "#FFFFFF",
        200: "#F6F6F7",
        300: "#F3F3F3",
        400: "#DCDCDD",
        500: "#C8C8C8",
      },

      bot_message_color: {
        text: "#1D1D1D",
        bg: "#FFFFFF",
        bgHover: "#F6F6F7",
      },

      user_message_color: {
        text: "#FFFFFF",
        bg: "#111111",
        bgHover: "#1D1D1D",
      },

      neutral: {
        100: "#F6F6F7",
        200: "#E8E8E8",
        300: "#D9D9D9",
        400: "#C8C8C8",
        500: "#B3B3B3",
        600: "#9B9B9B",
        700: "#7E7E7E",
        800: "#5E5E5E",
        900: "#1D1D1D",
      },

      success: "#39C682",
      error: "#DE0505",
      warning: "#ED9732",
      information: "#3D84D7",
    };

    const topics: PopularTopic[] = [
      {
        name: "account",
        message: "Account",
      },
      {
        name: "bonus",
        message: "Bonus",
      },
      {
        name: "deposit",
        message: "Deposit",
      },
      {
        name: "withdrawal",
        message: "Withdrawal",
      },
      {
        name: "verification",
        message: "Verification",
      },
    ];

    try {
      const response = await fetch(`${API_URL}/customer/info`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${apiKey}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to get user info");
      }

      const userInfo: Info = await response.json();

      return userInfo;
    } catch (error) {
      console.error("Failed to get user info", error);
    }

    // return info;
  } catch (error) {
    console.error(error);
  }
};
