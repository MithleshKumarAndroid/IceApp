import * as storage from "./Storage";
export const getUser = async () => {
  let userId: any = await storage.getData("UserId");
  let parsed = JSON.parse(userId);
  return  parsed;
};
