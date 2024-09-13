import Cookies from "js-cookie";

export const setUserId = (key: string, userId: string): void => {
  try {
    Cookies.set(`${key}-userId`, userId);
  } catch (error) {
    console.error("Failed to set user ID", error);
  }
};
