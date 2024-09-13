import Cookies from "js-cookie";

export const getUserId = (industry: string): string | null => {
  const userId = Cookies.get(`${industry}-userId`);

  if (userId === undefined) {
    return null;
  }

  return userId;
};
