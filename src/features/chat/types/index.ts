export type ChatWidgetConfig = {
  agentId: string;
  apiKey: string;
  industry: string;
  firstName: string;
  lastName: string;
  chatId: string | null;
  setChatId: React.Dispatch<React.SetStateAction<string | null>>;
};

export type IconType = {
  width?: number;
  height?: number;
  color?: string;
};

export type MessageType = {
  id: string;
  sender: "user" | "agent";
  text: string;
  timestamp: string;
  type?: "feedback";
};

export type Colors = {
  brand_color: {
    100: string;
    200: string;
    300: string;
    opacity: string;
  };

  text_color: {
    100: string;
    200: string;
    300: string;
    400: string;
  };

  bg_color: {
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
  };

  bot_message_color: {
    text: string;
    bg: string;
    bgHover: string;
  };

  user_message_color: {
    text: string;
    bg: string;
    bgHover: string;
  };

  neutral: {
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };

  success: string;
  error: string;
  warning: string;
  information: string;
};

export type PopularTopic = {
  name: string;
  message: string;
};

export type Info = {
  brand_name: string;
  brand_logo: string;
  brand_message: string;
  topics: PopularTopic[];
  colors: Colors;
};

export type ChatCard = {
  id: string;
  companyName: string;
  latestMessage: string;
  timestamp: string;
};

export type ChatHistory = ChatCard[];
