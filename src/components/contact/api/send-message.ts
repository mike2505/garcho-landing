import type { Message } from "../types";

export const sendMessage = async (message: Message) => {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });

    return res.ok;
  } catch (error) {
    console.error(error);
    return false;
  }
};
